// Step 2 of the GitHub OAuth flow used by Decap CMS (/admin).
// GitHub redirects here with a ?code=..., which we exchange for an access
// token, then hand back to the Decap CMS popup window via postMessage.
export default async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const { code } = req.query;

  if (!clientId || !clientSecret) {
    res.status(500).send("Missing OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET environment variables.");
    return;
  }
  if (!code) {
    res.status(400).send("Missing OAuth code from GitHub.");
    return;
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      res.status(400).send(`GitHub OAuth error: ${tokenData.error_description || tokenData.error}`);
      return;
    }

    const token = tokenData.access_token;
    const payload = JSON.stringify({ token, provider: "github" });

    // Decap CMS expects this exact postMessage handshake from the popup.
    const script = `
      <script>
        (function() {
          function receiveMessage(message) {
            window.opener.postMessage(
              'authorization:github:success:${payload.replace(/'/g, "\\'")}',
              message.origin
            );
            window.removeEventListener("message", receiveMessage, false);
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
    `;

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(script);
  } catch (err) {
    res.status(500).send(`OAuth callback failed: ${err.message}`);
  }
}

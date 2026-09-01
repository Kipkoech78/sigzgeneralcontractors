# Editing your site content (no code required)

Your site now has a content editor at **`yoursite.vercel.app/admin`**. Text and
images are stored in small JSON files under `/content` and `/public`, and the
editor commits changes straight to your GitHub repo — Vercel then rebuilds
the site automatically (takes about a minute).

You only need to do the following setup **once**.

## 1. Push this project to GitHub
If it isn't already, push this folder to a GitHub repository and connect
that repo to your Vercel project (Vercel dashboard → Add New Project →
Import from GitHub).

## 2. Create a GitHub OAuth App
1. Go to https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**.
2. Fill in:
   - **Application name**: SIGZ CMS (or anything)
   - **Homepage URL**: `https://your-site.vercel.app`
   - **Authorization callback URL**: `https://your-site.vercel.app/api/callback`
3. Click **Register application**.
4. Copy the **Client ID**, then click **Generate a new client secret** and copy that too.

## 3. Add environment variables in Vercel
In your Vercel project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `OAUTH_GITHUB_CLIENT_ID` | the Client ID from step 2 |
| `OAUTH_GITHUB_CLIENT_SECRET` | the Client Secret from step 2 |

Redeploy after adding these (Vercel → Deployments → ⋯ → Redeploy).

## 4. Point the CMS at your repo
Open `public/admin/config.yml` and update these two lines with your real values,
then commit and push:

```yaml
repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
base_url: https://your-site.vercel.app  
```

## 5. Log in and edit
Visit `https://your-site.vercel.app/admin`, click **Login with GitHub**,
approve access, and you'll see editable sections for:

- Company Info (phone, email, about text, mission, hours, social links, etc.)
- Navigation Menu
- Hero Slides (image + headline + button text)
- Services
- Project Categories (image + text)
- Testimonials
- Why Choose Us

Editing text just means typing in the form fields. Replacing an image means
clicking the image field and uploading a new file — it's stored in
`public/uploads` and committed automatically.

Every **Save** commits to GitHub and triggers a live Vercel rebuild — no code
edits, ever, for routine content changes.

## Notes
- Only people with write access to your GitHub repo can log in and edit —
  it's not public.
- If you ever add a brand-new *section* (not just edit existing text), that
  still needs a small code change — this setup covers editing what's already
  there.

import React from "react";

export default function DomainExpired() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0d0d",
        color: "#eaeaea",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a3"
          strokeWidth="1.5"
          style={{ margin: "0 auto 24px", display: "block" }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="13" />
          <circle cx="12" cy="16" r="0.5" fill="#a3a3a3" />
        </svg>

        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
          }}
        >
          Domain expired or used by other service
        </h1>

        <p
          style={{
            color: "#a3a3a3",
            fontSize: "1rem",
            lineHeight: 1.6,
            margin: "0 0 28px",
          }}
        >
          This website is currently unavailable because the domain requires
          renewal.
        </p>

        <div
          style={{
            width: 40,
            height: 1,
            background: "#333",
            margin: "28px auto",
          }}
        />

        <p style={{ fontSize: "0.9rem", color: "#737373", margin: 0 }}>
          Contact your developer for more info.
        </p>
      </div>
    </div>
  );
}
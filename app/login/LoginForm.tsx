"use client";

import { useEffect } from "react";
import { login } from "./actions";

export default function LoginForm({
  error,
  fontFamily,
}: {
  error?: string;
  fontFamily: string;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        fontFamily,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          padding: "48px 32px",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#1a1a1a",
            marginBottom: "8px",
            letterSpacing: "-0.01em",
          }}
        >
          Protected Site
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "28px",
            lineHeight: "1.6",
          }}
        >
          For access please reach out to Guzman González.
        </p>

        <form action={login}>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "15px",
                color: "#1a1a1a",
                outline: "none",
                boxSizing: "border-box",
                background: "#fff",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                fontSize: "13px",
                color: "#c0392b",
                marginBottom: "14px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 14px",
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "-0.01em",
            }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

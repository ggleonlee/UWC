import { Manrope } from "next/font/google";
import HomePage from "../page";
import LoginForm from "./LoginForm";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      {/* Blurred site background */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            filter: "blur(6px) brightness(0.75)",
            transform: "scale(1.04)",
            transformOrigin: "center top",
          }}
        >
          <HomePage />
        </div>
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Login form */}
      <LoginForm error={params.error} fontFamily={manrope.style.fontFamily} />
    </>
  );
}

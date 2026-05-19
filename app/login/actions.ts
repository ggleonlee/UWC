"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password");
  if (password !== "158822") {
    redirect("/login?error=Incorrect+password.");
  }
  const cookieStore = await cookies();
  cookieStore.set("site-auth", "1", { httpOnly: true, path: "/", sameSite: "lax" });
  redirect("/");
}

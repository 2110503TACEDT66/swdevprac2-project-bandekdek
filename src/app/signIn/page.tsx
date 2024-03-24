"use client";

import InputBox from "@/components/InputBox";
import { signIn } from "next-auth/react";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function page() {
  const router = useRouter();
  const email = useRef("");
  const pass = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email.current,
      password: pass.current,
      redirect: false,
    });
    if (!res?.error) {
      router.push("/");
      router.refresh();
    } else {
      console.log("Error /signIn/page.tsx" + res.error);
    }
  };
  return (
    <div className="mt-[60px]">
      <div className="bg-gradient-to-b  from-slate-50 to-slate-200 p-2 text-center text-slate-600">
        Login Form
      </div>

      <form onSubmit={onSubmit} className="p-2 flex flex-col gap-3">
        <InputBox
          name="email"
          labelText="email"
          onChange={(e) => (email.current = e.target.value)}
        />
        <InputBox
          name="password"
          type="password"
          labelText="Password"
          onChange={(e) => (pass.current = e.target.value)}
        />
        <div className="flex items-center justify-center mt-2 gap-2">
          <button type="submit" className="w-28 hover:bg-white/[0.5]">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-xl text-center">
        <Link href={"/signUp"}>
          <span className="hover:bg-white/[0.5]">Or Register here</span>
        </Link>
      </div>
    </div>
  );
}

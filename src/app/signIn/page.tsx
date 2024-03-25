"use client";

import InputBox from "@/components/InputBox";
import { signIn } from "next-auth/react";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function page() {
  const router = useRouter();
  const email = useRef("");
  const pass = useRef("");
  const [isLogin, setIsLogin] = useState(true);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogin(true);
    const res = await signIn("credentials", {
      email: email.current,
      password: pass.current,
      redirect: false,
    });
    if (!res?.error) {
      router.push("/");
      router.refresh();
    } else {
      setIsLogin(false);
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
        {!isLogin && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        )}
      </form>
      <div className="text-xl text-center">
        <Link href={"/signUp"}>
          <span className="hover:bg-white/[0.5]">Or Register here</span>
        </Link>
      </div>
    </div>
  );
}

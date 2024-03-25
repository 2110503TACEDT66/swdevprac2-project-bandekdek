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
    <div className="h-[100vh] p-5 bg-gradient-to-tl from-red-600 to-slate-950">
      <div className="mt-[70px] w-[60vw] sm:w-[30vw] mx-auto flex flex-col gap-7">
        
        <form onSubmit={onSubmit} className="p-2 flex flex-col gap-5 rounded-xl glass bg-gradient-to-tl from-red-600  to-gray-700">

        <div className=" text-xl text-white">
          Login Form
        </div>        

          <label className="input input-bordered flex items-center gap-2 m-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
              <input    type="text" className="grow" placeholder="Email" id="email"
            name="email" onChange={(e) => (email.current = e.target.value)}/>
          </label>

          <label className="input input-bordered flex items-center gap-2 m-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input type="password" placeholder="Password" className="grow" id="password" name="password" onChange={(e) => (pass.current = e.target.value)}/>
          </label>

          <div className="flex items-center justify-center gap-2 m-2">
            <button id="signin" type="submit" className="w-40 glass btn btn-error bg-red-600">
              Sign In
            </button>
          </div>
        </form>

        <div className="text-xl text-center">
          <Link href={"/signUp"}>
            <span className="hover:bg-white/[0.5] underline text-white">Or Register here</span>
          </Link>
        </div>
      </div>

    </div>

  );
}

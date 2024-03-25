'use client'
import { signOut } from "next-auth/react";


export default function page() {

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/', redirect:true }); // This will sign the user out
      };

    return (
        <div className="flex items-center justify-center gap-2 ">
          <button onClick={handleSignOut} id="submitButton" type="submit" className="w-40 glass btn btn-error bg-red-600 mt-[70px]">
            Sign Out
          </button>
        </div>
    )
}
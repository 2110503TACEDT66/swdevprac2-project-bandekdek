'use client'
import { authOptions } from "@/libs/auth"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Reservation() {
  const { data:session } = useSession()
  
  const urlParams = useSearchParams();
  const shopID = urlParams.get('id')
  console.log(shopID)

  return (
    <main className="p-1 h-[200vh] bg-gradient-to-tl from-red-600 to-yellow-400">
        <div className="mt-[85px] text-4xl text-white font-bold">Your Reservations ({session?.user.data.name})</div>
        <div className="bg-white h-[5px] mt-[20px] mb-[20px] w-[80%] sm:w-[60%] md:w-[50%] m-auto rounded-xl"></div>
    </main>
  )
}
  
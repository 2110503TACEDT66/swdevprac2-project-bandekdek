
import Image from "next/image"

export default function Banner () {

    return (
        <div className="p-5 m-0 w-[100vw] h-[100vh] block relative">
            <Image src='/img/banner.jpg' alt='cover' fill={true} objectFit='cover'/>
            <div className="relative top-[100px] z-20 text-center">
                <h1 className="text-5xl font-semibold text-white bg-black/[.50] p-3 w-fit mx-auto rounded-md mb-3">Vaccine Service Center</h1>
                <h3 className="text-2xl font-serif text-white  bg-black/[.50] p-2 w-fit mx-auto rounded-md">Come get your booster today</h3>
            </div>
        </div>
    )
}
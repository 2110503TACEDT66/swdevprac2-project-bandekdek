
import Image from "next/image"
import { Button } from '@mui/material';
import Link from 'next/link';


export default function Banner () {


    return (
        <div className="p-5 m-0 w-[100vw] h-[100vh] block relative">
            <Image src='/img/banner.jpg' alt='cover' fill={true} objectFit='cover'/>
            <div className="relative top-[100px] z-20 text-center">
                <h1 className="text-5xl font-semibold text-white bg-black/[.50] p-3 w-fit mx-auto rounded-md mb-3">BanDekDek Car Rental</h1>
                <h3 className="text-2xl font-serif text-white  bg-black/[.50] p-2 w-fit mx-auto rounded-md">Come rent your car today</h3>
            </div>

            <Link href='/reservation' className='w-fit absolute left-0 right-0 bottom-0 mb-10 mx-auto md:ml-auto md:mr-10' >
                <Button variant="outlined" size="large" color="error"  className="p-5 font-bold" >
                    Make Your Reservation
                </Button>            
            </Link>


        </div>
    )
}
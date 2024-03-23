
import { ClassNames } from "@emotion/react"
import Image from "next/image"


export default function Card ({carItem}:{carItem:Car}){


    return (
        <div className="w-[200px] sm:w-[300px] m-2 h-[300px] rounded-lg shadow-lg text-white bg-black bg-opacity-40">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={carItem.img}
                    alt='Hospital Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="w-full h-[10%] p-[10px] text-lg font-bold">{carItem.model}</div>
            <div className="w-full h-[15%] p-[10px] text-lg font-bold"> Price per day: {carItem.dayRate}</div>            
        </div>
    )
}
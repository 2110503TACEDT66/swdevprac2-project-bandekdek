
import { ClassNames } from "@emotion/react"
import Image from "next/image"
import Link from "next/link"
import AddInformationButton from "./AddInformationButton"

export default function Card ({carItem}:{carItem:Car}){


    return (
        <div className="w-[500px] sm:w-[300px] m-2 h-[350px] rounded-lg shadow-lg text-white bg-black bg-opacity-40">
            <div className="w-full h-[60%] relative rounded-t-lg">
                <Image src={carItem.img}
                    alt='Hospital Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="w-full h-[10%] p-[5px] text-lg font-bold">{carItem.model}</div>  
            <div className="w-full h-[10%] p-[5px] text-lg font-bold">{carItem.description}</div>         
            <div className="h-[10%]">
                <AddInformationButton text="Select Car"/>
            </div> 
        </div>
    )
}
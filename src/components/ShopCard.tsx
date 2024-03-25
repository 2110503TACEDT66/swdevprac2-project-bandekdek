
import { ClassNames } from "@emotion/react"
import Image from "next/image"

export default function ShopCard({shopItem}:{shopItem:rentalProvider}){
    return (
        <div className="w-[200px] sm:w-[300px] h-[350px] rounded-lg shadow-lg bg-black bg-opacity-40 text-white">
            <div className="w-full h-[47%] relative rounded-t-lg">
                <Image src={"/cars/accord.jpg"}
                    alt={`${shopItem.name} image`}
                    fill={true}
                    className='object-cover rounded-t-lg bg-white bg-opacity-0'
                />
            </div>
            <div className="w-full h-[10%] p-[10px] text-2xl font-bold">{shopItem.name}</div>
            <table className="mt-5 w-full">
                <tbody className="bg-500">
                    <tr className="">
                        <td className="pl-3 text-nowrap"><div className="w-full h-[15%] pl-[10px] text-lg text-left">Cost :</div></td>
                        <td className="pl-3 text-nowrap"><div className="w-full h-[15%] pl-[10px] text-lg text-left">{shopItem.cost + " Baht"}</div></td>
                    </tr>
                    <tr className="">
                        <td className="pl-3 text-nowrap"><div className="w-full h-[15%] pl-[10px] text-lg text-left">Address :</div></td>
                        <td className="pl-3"><div className="w-full h-[15%] pl-[10px] text-lg text-left leading-tight">{shopItem.address}</div></td>
                    </tr>
                    <tr className="">
                        <td className="pl-3 text-nowrap"><div className="w-full h-[15%] pl-[10px] text-lg text-left">Tel. :</div></td>
                        <td className="pl-3 text-nowrap"><div className="w-full h-[15%] pl-[10px] text-lg text-left">{shopItem.tel}</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
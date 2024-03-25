
import { ClassNames } from "@emotion/react"
import Image from "next/image"
import ShopCardInformation from "./ShopCardInformation"


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
            <table className="m-4">
                <tbody>
                    <tr>
                        <td className="text-nowrap"><ShopCardInformation text="Cost :"/></td>
                        <td className="pl-2 text-nowrap"><ShopCardInformation text={shopItem.cost + " Baht"}/></td>
                    </tr>
                    <tr>
                        <td className="text-nowrap"><ShopCardInformation text="Address :"/></td>
                        <td className="pl-2 leading-none"><ShopCardInformation text={shopItem.address}/></td>
                    </tr>
                    <tr>
                        <td className="text-nowrap"><ShopCardInformation text="Tel. :"/></td>
                        <td className="pl-2 text-nowrap"><ShopCardInformation text={shopItem.tel}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
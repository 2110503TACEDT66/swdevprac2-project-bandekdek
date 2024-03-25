import Link from "next/link";
import ShopCard from "./ShopCard";

export default async function ShopCatalog({shopData}:{shopData:rentals}){
    return (
        <div className='flex'>
            <div className='flex flex-wrap content-center justify-center'>
                {
                    shopData.data.map((shopItem:rentalProvider)=>(
                        <Link href={`/shop/${shopItem._id}`} className="w-1/5 m-[20px]">
                            <ShopCard shopItem={shopItem}></ShopCard>
                        </Link>
                    ))
                }                
            </div>
        </div>
    )
}
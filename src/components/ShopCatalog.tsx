import Link from "next/link";
import ShopCard from "./ShopCard";

export default async function ShopCatalog({shopData}:{shopData:rentals}){
    return (
        <div className=''>
            <div className='grid sm:grid-cols-4 grid-cols-1 gap-y-[45px] pt-[20px]'>
                {
                    shopData.data.map((shopItem:rentalProvider)=>(
                        <div className="m-auto">
                            <Link href={`/shop/${shopItem._id}`} className="w-1/5">
                                <ShopCard shopItem={shopItem}></ShopCard>
                            </Link>
                        </div>
                    ))
                }              
            </div>
        </div>
    )
}
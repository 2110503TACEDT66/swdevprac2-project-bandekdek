import Card from '@/components/Card'

export default async function CarCatalog() {
    const cars:Car[] = [{model:"Honda Civic", img:'/cars/civic.jpg', dayRate:1000},
    { model:"Honda Accord", img:'/cars/accord.jpg', dayRate:1200},
    { model:"Toyota Fortuner", img:'/cars/fortuner.jpg', dayRate:1500},
    { model:"Tesla Model 3", img:'/cars/tesla.jpg', dayRate:2000}]

    return(
         <div className="m-[20px] flex flex-row content-around
        justify-around flex-wrap p-[10px]">
            {
                cars.map((carItem:Car)=>(
               //    <Link href={`/hospital/${hosItem.id}`} className="w-1/5">
                        <Card carItem={carItem}/>
            //    {/* </Link> */}
                ))
            }
        </div>
    )
}
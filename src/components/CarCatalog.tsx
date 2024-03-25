import Card from '@/components/Card'

export default async function CarCatalog() {
    const cars:Car[] = [{model:"Honda Civic", img:'/cars/civic.jpg', dayRate:1000},
    { model:"Honda Accord", img:'/cars/accord.jpg', dayRate:1200},
    { model:"Toyota Fortuner", img:'/cars/fortuner.jpg', dayRate:1500},
    { model:"Tesla Model 3", img:'/cars/tesla.jpg', dayRate:2000}]

    return(
         <div className='p-10'>
            <h1 className="text-5xl font-bold text-white my-[30px]">Our Top Cars</h1>
            <div className='flex flex-row content-around justify-around flex-wrap bg-gradient-to-tl shadow-lg rounded-lg from-red-700 from-20% via-amber-600 to-purple-700 to-90%'>
                {
                    cars.map((carItem:Car)=>(
                            <Card carItem={carItem}/>
                    ))
                }                
            </div>
        </div>
        
    )
}
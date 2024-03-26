'use client'

import dayjs, { Dayjs } from "dayjs";
import { FormEvent, useState } from "react";
import ShopSelect from "./ShopSelect";
import CarSelect from "./CarSelect";
import DateReserve from "./DateReserve";
import { TextField } from "@mui/material";
import addBooking from "@/libs/addBooking";

export default function BookingForm({userID, userToken, shops, cars}:{userID:string, userToken:string, shops:rentals, cars:Array<Car>}) {
    const [ bookDate, setBookDate ] = useState<Dayjs|null>(null);
    const [ selectedCar, setSelectedCar ] = useState<string>('None');
    const [ selectedShop, setSelectedShop ] = useState<string>('None');
    const [ daySpend, setDaySpend ] = useState<number>(0);

    const submitReservation = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (bookDate != null && selectedCar != 'None' && selectedShop != 'None' && daySpend > 0) {
            console.log(`${bookDate} ${selectedCar} ${selectedShop} ${daySpend}`)

            console.log("ADDING BOOKING");
                
                const responseData = await addBooking(selectedShop, userToken, {
                    bookingDate: bookDate,
                    user: userID,
                    car: selectedCar,
                    daySpend: daySpend,
                    rentalProvider: selectedShop,
                })
                console.log(responseData);
        }
    }

    return (
        <form onSubmit={(e)=>submitReservation(e)} className="pt-[35px] h-full">
            <table className="w-full">
                <tbody>
                    <tr>
                    <td className='text-left pl-5'><div className="text-xl font-bold ml-5">Select Shop</div></td>
                    <td className="p-[15px]"><ShopSelect value={selectedShop} shops={shops} onShopChange={(value:string)=>setSelectedShop(value)}/></td>
                    </tr>
                    <tr>
                    <td className='text-left pl-5'><div className="text-xl font-bold ml-5">Select Car</div></td>
                    <td className="p-[15px]"><CarSelect value={selectedCar} cars={cars} onCarChange={(value:string)=>setSelectedCar(value)}/></td>
                    </tr>
                    <tr>
                    <td className="text-left pl-5"><div className="text-xl font-bold ml-5">Select Pickup Date</div></td>
                    <td className="p-[15px]">
                        <DateReserve onDateChange={(value:Dayjs)=>setBookDate(value)}/>
                    </td>
                    </tr>
                    <tr>
                    <td className="text-left pl-5"><div className="text-xl font-bold ml-5">Days Duration</div></td>
                    <td className="p-[15px]">
                        <TextField type="number" className="w-[25%] text-center" onChange={(e)=>setDaySpend(parseInt(e.target.value))}></TextField>
                    </td>
                    </tr>
                </tbody>
                </table>
                <button className="transition mb-[25px] hover:scale-110 hover:shadow-2xl absolute bottom-0 left-[50%] -translate-x-1/2 ml-auto text-2xl rounded-md bg-red-500 hover:bg-red-800 px-8 py-[2%] shadow-sm text-white" >
                    Submit
                </button>
        </form>
    )
}
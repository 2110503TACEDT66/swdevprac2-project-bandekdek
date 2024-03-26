import BookingForm from "@/components/BookingForm";
import CarSelect from "@/components/CarSelect";
import DateReserve from "@/components/DateReserve";
import ShopSelect from "@/components/ShopSelect";
import { authOptions } from "@/libs/auth";
import getShops from "@/libs/getShops";
import { MenuItem, Select } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { getServerSession } from "next-auth";

export default async function Reservation() {
  const cars:Car[] = [{model:"Honda Civic", img:'/cars/civic.jpg', description:'Cool car'},
    { model:"Honda Accord", img:'/cars/accord.jpg', description:'Cool car'},
    { model:"Toyota Fortuner", img:'/cars/fortuner.jpg', description:'Cool car'},
    { model:"Tesla Model 3", img:'/cars/tesla.jpg', description:'Cool car'}]

  const shops:rentals = await getShops();

  const session = await getServerSession(authOptions)

  if (!session || !session?.user.data._id) return null;

  //console.log(bookDate)
  //onDateChange(dayjs(value).format('DD/MM/YYYY'))
  
  return (
    <main className="p-1 h-[200vh] bg-gradient-to-tl from-red-600 to-slate-950">
        <div className="mt-[85px] text-4xl text-white font-bold">Make Reservation</div>
        <div className="bg-white h-[5px] mt-[20px] mb-[30px] w-[80%] sm:w-[60%] md:w-[50%] m-auto rounded-xl"></div>
        <div className="relative items-center bg-gray-200 h-[35%] w-[40%] m-auto rounded-xl">
          <BookingForm userID={session.user.data._id} userToken={session.user.token} shops={shops} cars={cars}></BookingForm>
        </div>
    </main>
  )
}
  
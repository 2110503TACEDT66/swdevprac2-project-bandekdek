interface Car {
  model: string;
  img: string;
  dayRate: number;
}

interface Bookings {
  count: number;
  totalCost: number;
  data: Booking[];
}
interface Booking {
  _id: string;
  bookingDate: string;
  user: string;
  car: string;
  daySpend: number;
  rentalProvider: rentalProvider;
  createdAt: string;
}
interface rentalProvider {
  _id: string;
  name: string;
  address: string;
  cost: number;
  tel: string;
}

"use client";
import { MdDeleteOutline } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import deleteBooking from "@/libs/deleteBooking";
import updateBooking from "@/libs/updateBooking";
import { useRouter } from "next/navigation";
import { FaInfoCircle } from "react-icons/fa";
export default function BookingList({
  bookings,
  token,
}: {
  bookings: Bookings;
  token: string;
}) {
  const [form, setForm] = useState({});
  const [editID, setEditID] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleDel(id: string) {
    try {
      await deleteBooking(token, id);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    setEditID("");
    setForm({});
  }

  async function handleSave(id: string) {
    try {
      await updateBooking(token, id, form);
      router.refresh();
      setEditID("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {bookings && (
        <div className="collapse bg-base-200 mt-8 ">
          <input type="checkbox" />
          <div className="collapse-title text-xl flex justify-center">
            <FaInfoCircle />
          </div>
          <div className="collapse-content">
            <header>
              <h1 className="text-xl font-[700]">
                Booking Count : {bookings.count}
              </h1>
              <h1 className="text-xl font-[600]">
                Total Cost : {bookings.totalCost.toLocaleString()}
              </h1>
            </header>{" "}
            <div className="w-full mt-4">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th className="text-sm">No.</th>
                    <th className="text-sm">Car</th>
                    <th className="text-sm">bookingDate</th>
                    <th className="text-sm">daySpend</th>
                    <th className="text-sm">Provider</th>
                    <th className="text-sm">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.data.map((item: Booking, idx) => (
                    <tr className="font-[500]" key={idx}>
                      <th>{idx + 1}</th>
                      {editID === item._id ? (
                        <div className="flex flex-col">
                          <label>Car</label>
                          <input
                            value={form.car !== undefined ? form.car : item.car}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="car..."
                            name="car"
                            className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
                          />
                          <label>bookingDate</label>
                          <input
                            value={
                              form.bookingDate !== undefined
                                ? form.bookingDate
                                : item.bookingDate
                            }
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="bookingDate..."
                            name="bookingDate"
                            className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
                          />
                          <label>daySpend</label>
                          <input
                            value={
                              form.daySpend !== undefined
                                ? form.daySpend
                                : item.daySpend
                            }
                            onChange={(e) => handleChange(e)}
                            type="number"
                            placeholder="daySpend..."
                            name="daySpend"
                            className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
                          />
                          <label>createdAt</label>
                          <input
                            value={
                              form.createdAt !== undefined
                                ? form.createdAt
                                : item.createdAt
                            }
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="createdAt..."
                            name="createdAt"
                            className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
                          />
                          <label>Provider</label>
                          <input
                            value={
                              form.rentalProvider !== undefined
                                ? form.rentalProvider.name
                                : item.rentalProvider.name
                            }
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="Provider..."
                            name="Provider"
                            className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
                          />
                          <label>Cost</label>
                          <input
                            value={
                              form.rentalProvider !== undefined
                                ? form.rentalProvider.cost
                                : item.rentalProvider.cost
                            }
                            onChange={(e) => handleChange(e)}
                            type="number"
                            placeholder="cost..."
                            name="cost"
                            className="px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      ) : (
                        <>
                          <td>{item.car}</td>
                          <td>{item.bookingDate}</td>
                          <td>{item.daySpend}</td>
                          <td>{item.rentalProvider.name}</td>
                          <td>{item.rentalProvider.cost}</td>
                        </>
                      )}

                      <td className="grid md:grid-cols-2 md:max-w-[200px]">
                        {editID === item._id ? (
                          <>
                            <button
                              onClick={() => handleCancel()}
                              className="md:mr-2 btn btn-error hover:opacity-75"
                            >
                              <TiCancel />
                            </button>
                            <button
                              onClick={() => handleSave(item._id)}
                              className="btn btn-success"
                            >
                              <FaRegSave />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleDel(item._id)}
                              className="md:mr-2 btn btn-error hover:opacity-75"
                            >
                              <MdDeleteOutline />
                            </button>
                            <button
                              onClick={() => setEditID(item._id)}
                              className="btn btn-info"
                            >
                              <FaRegEdit />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

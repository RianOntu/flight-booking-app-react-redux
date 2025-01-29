import React from "react";
import TableSvgOne from "./SVGS/TableSvgOne";
import TableSvgTwo from "./SVGS/TableSvgTwo";
import TableSvgThree from "./SVGS/TableSvgThree";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ROW } from "../redux/actionTypes";

function Table() {
  const dispatch = useDispatch();

  const bookings = useSelector((state) => state);
  console.log("bookings", bookings);
  const handleDelete = (id) => {
    dispatch({
      type: DELETE_ROW,
      payload: id,
    });
  };
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">className</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookings.map((booking) => (
            <tr className="lws-bookedTable text-black">
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <p className="lws-bookedFrom">{booking.from}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="lws-bookedTo">{booking.to}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <p className="lws-bookedDate">{booking.date}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <p className="lws-bookedGustes">{booking.guests}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="lws-bookedclassName">
                  {booking.ticketclassName}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="lws-remove"
                    
                  >
                    <TableSvgOne />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

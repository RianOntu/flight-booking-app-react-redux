import React from "react";
import TableSvgOne from "./SVGS/TableSvgOne";
import TableSvgTwo from "./SVGS/TableSvgTwo";
import TableSvgThree from "./SVGS/TableSvgThree";

function Table() {
  return (
    <div class="table-container">
      <table class="booking-table">
        <thead class="bg-gray-100/50">
          <tr class="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th class="text-center">Journey Date</th>
            <th class="text-center">Guests</th>
            <th class="text-center">Class</th>
            <th class="text-center">Delete</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
          <tr class="lws-bookedTable text-black">
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <p class="lws-bookedFrom">Dhaka</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <p class="lws-bookedTo">Sylhet</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedDate">11-01-23</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedGustes">2</p>
            </td>
            <td class="px-6 py-4 text-center">
              <span class="lws-bookedClass"> Business </span>
            </td>
            <td class="px-6 py-4 text-center">
              <div class="flex justify-center gap-4">
                <button class="lws-remove">
                  <TableSvgOne />
                </button>
              </div>
            </td>
          </tr>

          <tr class="lws-bookedTable text-black">
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <p class="lws-bookedFrom">Dhaka</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <p class="lws-bookedTo">Sylhet</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedDate">11-01-23</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedGustes">2</p>
            </td>
            <td class="px-6 py-4 text-center">
              <span class="lws-bookedClass"> Business </span>
            </td>
            <td class="px-6 py-4 text-center">
              <div class="flex justify-center gap-4">
                <button class="lws-remove">
                  <TableSvgTwo />
                </button>
              </div>
            </td>
          </tr>

          <tr class="lws-bookedTable text-black">
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <p class="lws-bookedFrom">Dhaka</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <p class="lws-bookedTo">Sylhet</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedDate">11-01-23</p>
            </td>
            <td class="px-6 py-4 text-center">
              <p class="lws-bookedGustes">2</p>
            </td>
            <td class="px-6 py-4 text-center">
              <span class="lws-bookedClass"> Business </span>
            </td>
            <td class="px-6 py-4 text-center">
              <div class="flex justify-center gap-4">
                <button class="lws-remove">
                  <TableSvgThree />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

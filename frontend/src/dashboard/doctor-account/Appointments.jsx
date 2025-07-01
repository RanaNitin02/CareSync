import React from 'react'
import { formateDate } from '../../utils/formateDate'

const Appointments = ({ appointments }) => {
  return (
    <table className="w-full text-left text-sm text-gray-700">
      <thead className="text-xs uppercase bg-gray-100">
        <tr>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Gender</th>
          <th className="px-6 py-3">Payment</th>
          <th className="px-6 py-3">Price</th>
          <th className="px-6 py-3">Booked On</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {appointments.map((item) => (
          <tr key={item._id}>
            <td className="flex items-center px-6 py-4 whitespace-nowrap">
              <img
                src={item.user.photo}
                alt={`${item.user.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900">{item.user.name}</div>
                <div className="text-gray-500 text-sm">{item.user.email}</div>
              </div>
            </td>
            <td className="px-6 py-4">{item.user.gender}</td>
            <td className="px-6 py-4">
              {item.isPaid ? (
                <div className="flex items-center text-green-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
                  Paid
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" />
                  Unpaid
                </div>
              )}
            </td>
            <td className="px-6 py-4">${item.ticketPrice}</td>
            <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Appointments
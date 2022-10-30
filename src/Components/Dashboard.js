import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Dashboard = () => {
    const [bookings, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookingData')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])
    return (
        <div>
        <div>
            <h1 className='py-12 font-medium text-3xl'>Booking Data</h1>
        </div>
<div className='lg:max-w-full sm:max-w-xs  bg-gray-200'>

<div className="secondary-color px-8 h-screen">
<SimpleBar  style={{ minHeight: '600px' }}>
                       <table class="table  w-full ">
                           {/* <!-- head --> */}
                           <thead className=''>
                               <tr>
                                   <th className='tableHead text-gray-900'>Name</th>
                                   <th className='tableHead text-gray-900'>Email</th>
                                   <th className='tableHead text-gray-900'>Phone Number</th>
                                   <th className='tableHead text-gray-900'>Number of Room</th>
                                   <th className='tableHead text-gray-900'>Check In </th>
                                   <th className='tableHead text-gray-900'>CheckOut</th>
                               </tr>
                           </thead>
                           <tbody>
                          
                               {
                                   bookings.map(booking =>
                                       <tr>
                                           <td  className='border-y-gray-600 secondary-color text-gray-900'>{booking.name}</td>
                                           <td className=' border-y-gray-600 secondary-color text-gray-900'>{booking.email}</td>
                                           <td className='border-y-gray-600 secondary-color text-gray-900'>{booking.phone}</td>
                                           <td className='border-y-gray-600 secondary-color text-gray-900'>{booking.room}</td>
                                           <td className='border-y-gray-600 secondary-color text-gray-900'>{booking.checkIn}</td>
                                           <td className='border-y-gray-600 secondary-color text-gray-900'>{booking.checkout}</td>

                                       </tr>
                                   )
                               }
                              
                           </tbody>
                       </table>
                       </SimpleBar>
                   </div>
         </div>
        </div>
    );
};

export default Dashboard;
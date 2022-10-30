import React, { useState } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HeroSection = () => {


  var currentDate = new Date().toLocaleDateString();
  

  
    const handleData = async event  => {
      event.preventDefault()
      
      const name = event.target.name.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const room = event.target.room.value;
      const date = event.target.date.value;
      const checkout = event.target.checkout.value;
      const checkIn = event.target.checkIn.value;
    
    
 


      const booking = {
         name,
         email,
         phone,
         room,
         date,
         checkout,
         checkIn
      }
  
   
    

      fetch('http://localhost:5000/booking', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Booking Successfully Done,${currentDate}`)
            }
           else {
            toast.error(`Everyday Booking Limit End Try Tomorrow`)
           }
        })
      
   
   
      
  }




    return (
        <div>
   <section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto flex flex-wrap">
    <div class="flex flex-wrap justify-center w-full">
         <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg  md:mt-0 mt-12" src="https://i.ibb.co/B25yjMJ/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" alt="step"/>
      <div class="lg:w-2/5 md:w-1/2 md:pl-10 lg:mt-0 mt-6 md:py-6">
        <h1 className='font-medium text-3xl'>Hotel Booking</h1>
        <form onSubmit={handleData} >
      <div class="form-control lg:w-full w-full mt-12">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" name='name' placeholder="Name"  class="input input-bordered w-full " />
</div>
      <div class="form-control lg:w-full w-full mt-3">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="text" name='email' placeholder="Email" class="input input-bordered w-full " />
</div>
      <div class="form-control lg:w-full w-full mt-3">
  <label class="label">
    <span class="label-text"> Phone Number</span>
  </label>
  <input type="text" placeholder="Phone Number" name='phone' class="input input-bordered w-full " />
</div>
      <div class="form-control lg:w-full w-full mt-3">
  <label class="label">
    <span class="label-text">Number of Rooms</span>
  </label>
  <input type="number" placeholder="Number of Rooms" name='room' class="input input-bordered w-full " />
</div>

      <div class="form-control lg:w-full w-full">
  <input type="hidden" value={currentDate} name='date' class="input input-bordered w-full " />
</div>

  <div class="form-control lg:w-full w-full mt-3">
  <label class="label">
    <span class="label-text">Check In Date</span>
  </label>
  {/* <RangePicker  
  onChange={(values) => {

    setDates(values.map(item =>  {
 return moment(item).format('YYYY-DD-MM')

    }))
  }} 
  /> */}
  <DatePicker  name='checkIn' placeholder='Choose a date'/>
</div>
<div class="form-control lg:w-full w-full mt-3">
  <label class="label">
    <span class="label-text">Check Out Date</span>
  </label>
  {/* <RangePicker  
  onChange={(values) => {

    setDates(values.map(item =>  {
 return moment(item).format('YYYY-DD-MM')

    }))
  }} 
  /> */}
  <DatePicker  name='checkout' placeholder='Choose a date'/>
</div>

      <div class="form-control w-full mt-3">
      <button class="btn btn-block">Book Now</button>
</div>
</form>
        
      </div>
     
    </div>
  </div>
</section>
<ToastContainer/>
      </div>
    );
};

export default HeroSection;
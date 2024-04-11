import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReserve = ({hotelId}) => {
  const {handleSubmit, register, reset} = useForm()
const [,,createBooking] = useCrud()
const submit = data =>{
  const url = 'https://hotels-api.academlo.tech/bookings'
  data.hotelId = Number(hotelId)
createBooking(url, data)
}
  return (
    <section onSubmit={handleSubmit(submit)}>
      <h3>do you want to book</h3>
      <form>
        <label >
          <span>Check-in</span>
          <input {...register('checkIn')} type="date"  />
        </label>
        <label >
          <span>check-out</span>
          <input {...register('checkOut')}type="date" />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;

import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../components/ReservationPage/ReserveCard'
import FormReviews from './FormReviews'


const ReservationsPage = () => {
  const [reserveSelected, setReserveSelected] = useState()
    const[bookings, getBookings,,deleteBooking] = useCrud()
    useEffect(()=>{
        const url ='https://hotels-api.academlo.tech/bookings'
  getBookings(url)
    },[])
   
  return (
    <section>
      <FormReviews reserveSelected={reserveSelected}
      setReserveSelected={setReserveSelected}/>
      <h2>Reservation</h2>
      <div>
        {
         bookings?.map(reserve=>(
            <ReserveCard
            key={reserve.id}
            reserve={reserve}
            setReserveSelected={setReserveSelected}
            deleteBooking={deleteBooking}/>
         ))   
        }
      </div>
    </section>
  )
}

export default ReservationsPage

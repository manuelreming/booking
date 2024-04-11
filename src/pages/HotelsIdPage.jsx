import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker } from 'pigeon-maps'
import OtherHotels from '../components/HomePage/OtherHotels'
import FormReserve from '../components/HotelsIdPage/FormReserve'

const HotelsIdPage = () => {
  const {id} = useParams()
  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(()=>{
    getHotel()
  },[id])
  console.log(hotel)
  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>Rating - {hotel?.rating}</h3>
      <div className='slider'>
        <img src={hotel?.images[0].url} alt="" />
          <Map height={200} width = {200}defaultCenter={[+hotel?.lat, +hotel?.lon]} zoom={15}/>
            
      </div>
      <section>
        <h3>{hotel?.city.name}, {hotel?.city.country}</h3>
        <p>
        <i className='bx bx-map'></i>
        <span>{hotel?.address}</span>
        </p>
        <p>
          {hotel?.description}
        </p>
     </section>
     {
      localStorage.getItem('token')
      ?<FormReserve hotelId={hotel?.id}/>
      : <h4>If  you want to make a reservation, please <Link to='login'>Login</Link></h4>

     }
     
     <OtherHotels hotel = {hotel}/>
    </div>
  )
}

export default HotelsIdPage

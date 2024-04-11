import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from './HotelCard'

const OtherHotels = ({hotel}) => {
    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
    const[hotelsInCity, getHotelsInCity] = useFetch(url)
    useEffect(()=>
    {
        if(hotel){
            getHotelsInCity()
        }
    
    },[hotel])
    console.log({hotel, hotelsInCity})
  return (
    <section>
    <h3>Other hotels in <span>{hotel?.city.name}</span></h3>
    <div>
        {
            hotelsInCity?.filter(hotelInfo=> hotelInfo.id !== hotel.id).map(hotelInfo=>(
                <HotelCard hotel={hotelInfo} key={hotelInfo.id}/>            ))
        }
    </div>
    </section>
  
  )
}

export default OtherHotels

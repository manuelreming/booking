import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import CategoryFilter from '../components/HomePage/CategoryFilter'
import PriceFilter from '../components/HomePage/PriceFilter'

const HomePage = () => {
  const [inputName, setInputName]=useState('')
  const [fromTo, setFromTo] = useState({
    from:0,
    to: Infinity
  })
    const hotels = useSelector((states)=>states.hotels)
     const inputValue = useRef()
     const handleChange=()=>{
      setInputName(inputValue.current.value)

     }

     const cbfilter = hotelInfo =>{
      const filterName= hotelInfo.name.toLowerCase().includes(inputName.toLowerCase().trim())
      const price = Number(hotelInfo.price)
      const filterPrice = price >= fromTo.from && price<= fromTo.to
      return filterName && filterPrice;
     }
      return (
    <div>
      <div>
        <input ref={inputValue} value={inputName} onChange={handleChange} type="text" />
      </div>
      <div>
        {
            hotels?.filter(cbfilter).map( hotelInfo => (
             <HotelCard key={hotelInfo.id}
             hotel={hotelInfo}
             />            ) )
        }
      </div>
    <aside>
      <h3>Filters</h3>
      <PriceFilter setFromTo={setFromTo}/>
      <CategoryFilter/>
      </aside>
    </div>
  )
}

export default HomePage

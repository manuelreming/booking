import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from './store/states/hotels.slice'
import PrincipalHeader from './components/shared/PrincipalHeader'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {

 const dispatch = useDispatch()
 useEffect(()=>{
  const url = 'https://hotels-api.academlo.tech/hotels'
 dispatch(getHotelsThunk(url))

 }, [])

  return (
    <div>
      <PrincipalHeader/>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/hotels/:id' element={<HotelsIdPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route element = {<ProtectedRoutes/>}>
        <Route path='/reservations' element ={<ReservationsPage/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App

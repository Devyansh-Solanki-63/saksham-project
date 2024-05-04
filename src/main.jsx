import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import PriceCalculator from './components/priceCalculator/PriceCalculator'
import Cctv from './components/priceCalculator/Cctv'
import LandPriceCalculator from './components/priceCalculator/LandPriceCalculator.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Drones from './components/Drones/Drones.jsx'
import DroneDetails from './components/Drones/Dronedetails.jsx'

import Ecommerce from './components/Ecommerce/Ecommerce.jsx'

import Homes from './components/Rentals/Homes.jsx'

import Gem from './components/GeM/Gem.jsx'
import Dronetraining from './components/Drone-training/Dronetraining.jsx'
import CCTV from './components/CCTV-services/CCTV.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/calculator' element={<PriceCalculator />}></Route>
        <Route path='/cctv' element={<Cctv />}></Route>
        <Route path='/land' element={<LandPriceCalculator />}></Route>
        <Route path='/services/drones' element={<Drones />}></Route>
        <Route path="/services/drones/:id" element={ <DroneDetails/> }/>
        <Route path='/services/ecommerce' element={<Ecommerce />}/>
        <Route path='/services/homes' element={<Homes />}/>
        <Route path='/services/gem' element={<Gem />}/>
        <Route path='/services/drone-training' element={<Dronetraining/>}/>
        <Route path='/services/cctv-services' element={<CCTV/>}/>
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)

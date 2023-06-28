import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddData from "./components/AddData";
import DisplayData from "./components/DisplayData";

function App() {


  return ( 
    <>

      <Routes>
        <Route path='/' element={<AddData />} />
        <Route path='/view/:id' element={<DisplayData />} />
      </Routes>
      
      

    </>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SigzContractors from './pages/home/Home'


function App() {
  return (
    <div className='flex flex-col w-full overflow-hidden bg-white font-raleway'>
    <Routes>
    <Route path='/'
    element={<SigzContractors />}
     />
    </Routes>
    </div>
  )
}

export default App

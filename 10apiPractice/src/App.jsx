import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import TakingData from './components/TakingData'
import ShowingData from './components/ShowingData'

function App() {

  return (
    <UserContextProvider>
      <div className='grid grid-cols-2 h-screen w-full'>
        <div className='flex justify-center items-center bg-blue-400 p-10'>
          <TakingData />
        </div>
        <div className='relative bg-gray-600 text-white p-6 flex-col'>
          <ShowingData />
        </div>
      </div>

    </UserContextProvider>
  )
}

export default App

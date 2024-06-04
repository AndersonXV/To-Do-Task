import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/view" element={<h1>view page</h1>} />
    </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import ShowAllTask from './Components/ShowAllTask'
import AddTask from './Components/AddTask'
import UpdateTask from './Components/UpdateTask'
import TaskNotFound from './Components/TaskNotFound'
import NavBar from './Components/NavBar'
function App() {

  return (
    <>
    <NavBar/>
    <div className='flex flex-row justify-center items-center min-h-screen'>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/add" element={<AddTask />} />
      <Route path ="/view" element={<ShowAllTask />} />
      <Route path ="/update/:id" element={<UpdateTask />} />
      <Route path ="*" element={<TaskNotFound />} />
    </Routes>
    </div>
    </>
  )
}

export default App

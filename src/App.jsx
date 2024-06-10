import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import ShowAllTask from './Components/ShowAllTask'
import AddTask from './Components/AddTask'
import UpdateTask from './Components/UpdateTask'
import TaskNotFound from './Components/TaskNotFound'
function App() {

  return (
    <>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/add" element={<AddTask />} />
      <Route path ="/view" element={<ShowAllTask />} />
      <Route path ="/update/:id" element={<UpdateTask />} />
      <Route path ="*" element={<TaskNotFound />} />
    </Routes>
    </>
  )
}

export default App

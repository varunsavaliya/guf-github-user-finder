import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserList from '../components/UserList/UserList'

export default function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<UserList />} />
    </Routes>
  )
}

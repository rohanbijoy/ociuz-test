import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUser from './/components/CreateUser'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUser } from './components/redux/userSlice'
import UpdateUser from './components/UpdateUser'

import Pdf from './components/Pdf'

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchData = async() => {
        try {
            const response = await axios.get('http://localhost:3001');
            dispatch(getUser(response.data));
        } catch(err) {
            console.log(err)
        }
    }
    fetchData();
}, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/display' element={<Users />}></Route>
        <Route path='/' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>
        <Route path='/download' element={<Pdf/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

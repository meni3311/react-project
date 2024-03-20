import { useState } from 'react'
import './App.css'
import AppRoutes from './appRoutes'
import { ToastContainer } from 'react-toastify'
// import{toast} from 'react-toastify';
// onclick...- toast.error("jhgfg hf");
// import "react-toastify/dist/react-toastify.css" // livdok

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App

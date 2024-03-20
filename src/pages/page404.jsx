import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
         <div className='text-center'>

<div className="row justify-content-md-center">
  <div className="">
    <div className='rounded-4' style={{ background: "pink" }}><Link to="/" className="m-4 display-5 text-center text-danger">Back to home</Link></div>
    <div className="text-center w-100">
      <img width={500} src="img\404.gif" alt="hg" />
    </div>
    <p className="text-secondary text-danger mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
    <hr className="w-50 mx-auto mb-5 mb-xl-9 border-danger-subtle" />
  </div>
</div>
</div>
    </div>
  )
}

export default Page404
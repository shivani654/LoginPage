import React, { useState } from 'react';
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom';
import SignUp from './Client/SignUp';
import circle from '../Image/circle.png';

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }


  return (
    <div className='bg-zinc-200 h-screen md:flex justify-center items-center manager'>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[580px] rounded-lg shadow-lg shadow-gray-600">
        <div className='bg-white p-4 flex flex-col justify-around rounded-l-lg'>
           <form className='space-y-2 mx-12' action="">
              <div className='mb-5'>
                <h1 className='font-semibold text-3xl tracking-wide'>Welcome Back</h1>
                <p className='text-zinc-400'>Welcome back!Please enter your details.</p>
              </div>
              <div className='mr-5'>
                  <label className='text-zinc-600 font-semibold'>Email</label>
                  <input
                    className='outline-none h-10 px-5 border border-sm w-full rounded-lg'
                    value={email}
                    onChange={handleEmail}
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
              </div>
                <div className='mr-5'>
                  <label className='text-zinc-600 font-semibold'>Password</label>
                  <input
                    className='outline-none h-10 px-5 border border-sm w-full rounded-lg'
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className='md:flex md:flex-wrap gap-32 space-y-4'>
                  <div className='flex mt-4 gap-4'>
                    <input className='' type="checkbox" />
                    <label className=''>Remember Me</label>
                  </div>
                  <div className='flex'>
                    <p className='text-violet-500'>Forgot Password</p>
                  </div> 
                </div>
                <div className='mr-5'>
                  <button onClick={handleApi} className='w-full h-10 text-white font-semibold py-2 my-4 bg-violet-700 hover:bg-violet-600 rounded-lg'>Sign in</button>
                </div>
                <div className='flex flex-row mr-5 h-10 justify-center gap-2 space-y-1 text-l border rounded-lg'>
                  <FcGoogle className="h-10 "/>
                  <button className="font-semibold">Sign in with Google</button>
                </div>
                <div className='flex justify-center items-center'>
                  <p className='text-gray-400'>Don't have an account? 
                  <span className='text-violet-500 font-semibold pl-2'><Link to="/SignUp" element ={<SignUp />}>Sign Up</Link></span></p>
                </div>
            </form>
        </div>
        <div className="h-[550px] hidden md:block w-1/2">
          <img className="ml-32 pt-44" src={circle} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Signin;
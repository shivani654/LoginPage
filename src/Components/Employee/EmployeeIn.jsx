import React, { useState } from 'react';
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import EmployeeSignup from './EmployeeSignup';
import logo from "../../Image/logo.jpg";


function EmployeeIn() {

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
    <div className='relative bg-white flex justify-center items-center'>
      <div className="flex m-auto h-[580px] rounded-lg">
        <div className='container bg-white flex flex-col mx-2 justify-center rounded-l-lg'>
          <div className="flex justify-center">
            <img className="h-18 w-24" src={logo} alt="" />
          </div>
          <div className='mb-5 justify-center text-center'>
            <h1 className='font-semibold text-3xl tracking-wide'>We're glad to see you again!</h1>
            <div className='flex justify-center items-center'>
              <p className='text-gray-500 font-semibold mt-3'>Don't have an account? 
              <span className='text-blue-500 font-semibold pl-2'><Link to="/EmployeeSignup" element ={<EmployeeSignup />}>Sign Up</Link></span></p>
            </div>
          </div>
          <form className='space-y-5' action="">
            <div className='relative flex'>
              <div className='bg-gray-200 w-14 rounded-l'>
                <AiOutlineMail size="20" className="pointer-events-none ml-3 h-12" />
              </div>
              <input
                className='outline-none h-12 px-12 border border-sm w-full rounded-r'
                value={email}
                onChange={handleEmail}
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className='relative flex'>
              <div className='bg-gray-200 w-14 rounded-l'>
                <RiLock2Line size="20" className="pointer-events-none ml-3 h-12" />
              </div>
              <input
                className='outline-none h-12 px-12 border border-sm w-full rounded-r'
                value={password}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className='flex'>
              <p className='text-end text-blue-600'>Forgot Password?</p>
            </div>
            <div className='relative flex rounded'>
              <button onClick={handleApi} className='outline-none h-12 text-white font-semibold w-full bg-blue-600 hover:bg-blue-600 rounded'>Login</button>
            </div>
            <div className="mt-8 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400 ml-8" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400 mr-8" />
            </div>
            <div className='md:flex md:flex-shrink md:justify-center space-y-4 lg:space-mb-8 lg:flex lg:flex-shrink lg:justify-center '>
              <div className="flex flex-row mx-2 h-10 md:w-64 justify-center space-y-1 mt-4 text-l border border-gray-400 hover:bg-red-300 rounded">
                <FcGoogle className="mt-3 w-12 h-5" />
                <button className="font-semibold hover:text-white">
                  Sign in with Google
                </button>
              </div>
              <div className="flex flex-row mx-2 h-10 md:w-64 justify-center gap-2 space-y-1 text-l border border-gray-400 hover:bg-blue-500 rounded">
                <FaFacebook className="h-5 mt-3 fill-blue-700 hover:fill-white" />
                <button className="font-semibold hover:text-white">
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmployeeIn;
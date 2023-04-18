import React, { useState } from 'react';
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom';
import logos from "../../Image/logos.png";
import SignUp from './SignUp'; 

function ClientIn() {

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
    <div className='relative bg-zinc-200 bg-cover body'>
      <div className= 'flex justify-center h-screen items-center manager bg-zinc-900/90'>
        <div className='bg-white flex flex-col h-[480px] rounded-xl'>
          <div className="flex justify-center my-2">
            <img className="h-16 w-20" src={logos} alt="" />
          </div>
          <div className='flex justify-center mx-8'>
            <h1 className='not-italic font-semibold text-xl leading-7 text-center font-serif text-black'>Sign In Your Account</h1>
          </div>
          <form className='max-w-[500px] w-full bg-white rounded-xl justify-center items-center space-y-2' action="">
            <div className='px-8 py-3 flex'>
              <input
                className='outline-none h-11 px-5 rounded border border-sm w-full text-gray-900'
                value={email}
                onChange={handleEmail}
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className='fle px-8 py-3 '>
              <input
                className='h-11 px-5 rounded border border-sm w-full'
                value={password}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
              <div className='flex justify-end'>
                <button className='text-blue-600 font-normal not-italic cursor-pointer'>Forgot Password?</button>
              </div>
            </div>
            <div className='px-8 my-2'>
              <button onClick={handleApi} className='w-full h-11 text-white font-semibold  bg-blue-600 hover:bg-blue-500'>Sign In</button>
            </div>
            <div class="grid grid-cols-3 items-center text-gray-400">
              <hr class="border-gray-300 ml-8" />
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-300 mr-8" />
            </div>
            <div className='flex flex-row mx-8 my-9 h-11 justify-center gap-2 space-y-1 text-l border'>
              <FcGoogle className="my-4"/>
              <button className="font-semibold text-lg">Sign in with Google</button>
            </div>
            <div className='flex justify-center'>
              <p className='text-black not-italic font-normal text-l leading-4 flex items-center text-center font-sans'>Don't have an account ?<span className='text-blue-600 font-normal not-italic pl-2'><Link to="/SignUp" element ={<SignUp />}>Sign Up</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientIn;
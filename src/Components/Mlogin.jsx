import React, { useState } from 'react';
import axios from "axios";
import freelancer from '../Image/freelancer.png';
import {Link} from 'react-router-dom';
import ManagerIn from './ManagerIn';
import logo from "../Image/logo.jpg";

function Mlogin() {

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
    <div className='bg-zinc-200 h-screen flex justify-center items-center manager'>
      <div className="grid grid-cols-1 md:grid-cols-2 m-4 bg-white h-[550px] rounded-xl shadow-lg">
        <div className='bg-white flex flex-col h-[500px] justify-around rounded-xl'>
          <div className="flex ml-10">
            <img className="h-18 w-24" src={logo} alt="" />
          </div>
          <form className='space-y-2 mx-12' action="">
            <div className='mb-5'>
              <h1 className='font-normal not-italic text-3xl font-serif tracking-wide'>Log in your account</h1>
              
            </div>
            <div>
              <label className='text-zinc-400 font-semibold'>Email</label>
              <input
                className='outline-none h-10 px-5 mt-2 border border-sm w-full rounded'
                value={email}
                onChange={handleEmail}
                type="text"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className='pt-4'>
              <label className='text-zinc-400 font-semibold'>Password</label>
              <input
               className='outline-none h-10 px-5 mt-2 border border-sm w-full rounded'
               value={password}
               onChange={handlePassword}
               type="password"
               name="password"
               placeholder="Password"
               required
              />
              <div className='flex justify-end'>
                <button className='text-blue-600 font-normal not-italic cursor-pointer'>Forgot Password?</button>
              </div>
            </div>
            <div className='w-full'>
              <button onClick={handleApi} className='w-full h-10 text-white font-semibold py-2 my-4 bg-blue-600 hover:bg-blue-500 rounded'>Sign In</button>
            </div>
            <div className='flex'>
            <p className='text-gray-600 font-extralight not-italic text-base font-serif pt-4'>Don't have an account ?<span className='text-blue-600 font-normal not-italic pl-2'><Link to="/ManagerIn" element ={<ManagerIn />}>Sign Up</Link></span></p>
            </div>
          </form>
        </div>
        <div className="h-[500px] hidden w-[320px] ml-10 mt-8 md:block shadow-gray-100 bg-blue-600 rounded-xl">
          <div className='grid grid-cols-1 pt-20 pl-8'>
              <h1 className='text-white font-semibold text-4xl'>Start your journey with us.</h1>
              <p className='text-slate-300 text-base pt-4'>Discover the world's best community of freelancers and buisness owners.</p>
          </div> 
          <div className='mt-24 mx-8 h-[140px] bg-blue-700 rounded-xl'>
            <p className='text-slate-300 text-sm pl-2 pt-2'>Simply unbliveble! I am really satisfied with my projects and buisness. This is Absolutely wonderful!</p>
            <div className='flex pl-2 pt-3'>
              <img className='h-12 w-14 rounded-lg' src={freelancer} alt='' />
                  <div className='pl-3'>
                    <p className='text-slate-300 text-sm'>Thimson K</p>
                    <p className='text-slate-300 text-sm'>Freelancer</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mlogin;
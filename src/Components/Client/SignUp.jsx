import React, { useState }  from 'react';
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom';
import logos from "../../Image/logos.png";

function SignUp() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password, firstname, lastname })
  const handleFirstname = (e) => {
    setFirstname(e.target.value)
  }

  const handleLastname = (e) => {
    setLastname(e.target.value)
  }

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
    <div className='relative justify-center items-center body bg-cover manager'>
      <div className='md:flex md:justify-center bg-zinc-900/90'>
        <form className='w-[500px] bg-white rounded-l-3xl md:m-8 rounded-r-3xl justify-center items-center' action="">
          <div className='h-32 max-w-[500px] w-full text-center bg-blue-500 box-border rounded-tl-2xl rounded-tr-2xl mb-5'>
            <div className="relative flex justify-center">
              <img className="h-16 w-20" src={logos} alt="" />
            </div>
            <div className='flex justify-center'>
              <h1 className='text-4xl text-white font-bold'>Create your account</h1>
            </div>
          </div>
          <div className='px-8 py-3'>
            <input
              className='outline-none h-12 px-5 border border-sm w-full'
              value={firstname}
              onChange={handleFirstname}
              type="text"
              name="firstname"
              placeholder="First name"
              required
            />
          </div>
            <div className='px-8 py-3'>
               
               <input
                  className='outline-none h-12 px-5 border border-sm w-full'
                  value={lastname}
                  onChange={handleLastname}
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className='px-8 py-3'>
                  <input
                    className='outline-none h-12 px-5 border border-sm w-full'
                    value={email}
                    onChange={handleEmail}
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
              </div>
                <div className='px-8 py-3'>
                  <input
                    className='outline-none h-12 px-5 border border-sm w-full'
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className='flex space-y-2 gap-4 mt-1 pl-10'>
                  <input className='mt-2' type="checkbox" />
                  <p className='text-zinc-400 text-lg'>I have read and agree to all
                  {/*<a className='text-blue-500 text-lg' >Term & Condition</a>*/}
                  </p>
                 <p className='text-blue-500 text-lg'>Terms & Conditions</p>
                </div>
                <div className='px-8 py-3'>
                  <button onClick={handleApi} className='w-full h-12 text-white font-semibold py-2 my-4 bg-blue-600 hover:bg-blue-500'>Join Now 🡢</button>
                </div>
                <div className='flex flex-row mx-8 h-12 justify-center gap-2 space-y-1 text-l border'>
                <FcGoogle className="my-4"/>
                <button className="font-semibold text-lg">Sign in with Google</button>
          </div>
          
          <div className='flex justify-between my-5 px-10'>
              <span className='text-blue-500 font-semibold'><Link to="/ClientIn">Join Us Today</Link></span>
              <span className='text-gray-500 font-semibold'><Link to="/Lostpassword">Lost Password ?</Link></span>
          </div>  
        </form>
      </div>
    </div>
  );
};

export default SignUp;
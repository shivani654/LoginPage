import React, { useState } from 'react';
import axios from "axios";
import freelancer from '../Image/freelancer.png';
import { Multiselect } from 'multiselect-react-dropdown';
import {Link} from 'react-router-dom';
import Mlogin from './Mlogin';
import logo from "../Image/logo.jpg";

function ManagerIn() {


  const [designs,setDesigns]= useState(false)

      function designsSelected () {
      setDesigns(true);
      console.log(designs)
      }

      function projectsSelected () {
        setDesigns(false);
        console.log(designs)
        }

  const data =[
    {Skills: 'HTML5', id:1},
    {Skills: 'CSS3', id:2},
    {Skills: 'TAILWINDCSS', id:3},
    {Skills: 'REACT.JS', id:4},
    {Skills: 'PYTHON', id:5},
    {Skills: 'ANGULAR', id:6},
    {Skills: 'SQL', id:7},
    {Skills: 'MYSQL', id:8},
    {Skills: 'BOOTSTRAP', id:9},
    {Skills: 'JAVASCRIPT', id:10},
    {Skills: 'JAVA', id:11}
  ]
  const [options] = useState(data);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ firstname, lastname, email, password });
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password
      })
      .then((result) => {
        console.log(result.data);
        alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });

      
  }

  return (
    <div className='bg-zinc-200 flex justify-center items-center manager'>
      <div className="grid grid-cols-1 md:grid-cols-2 md:m-8 bg-white rounded-xl shadow-lg">
        <div className='bg-white md:flex md:flex-col mx-6 md:justify-around rounded-xl'>
          <div className='flex flex-col'>
            <div className="flex ml-4 pt-8">
              <img className="h-18 w-24" src={logo} alt="" />
            </div>
            <div className='flex flex-col ml-4'>
              <h1 className='font-bold text-3xl tracking-wide'>Create your Account</h1>
              <p className='text-gray-700 font-semibold text-base pt-2'>Have an account?
                <span className='text-blue-700 font-semibold pl-2'><Link to="/Mlogin" element ={<Mlogin />}>Sign In</Link></span>
              </p>
            </div>
          </div>
          <div className='md:flex md:flex-col ml-4'>
            <label className='text-zinc-500 font-semibold'>Looking for?</label>
            <div className='md:flex md:flex-wrap gap-2 space-y-4'>
              <div className={`flex border border-zinc-400 rounded ${designs?'bg-white':'bg-blue-500' } h-11 w-56 mt-4 cursor-pointer`}>
                <button className='mx-14 my-2 text-center font-medium text-xl' id="project" name="project-type" value="project" onClick={projectsSelected}>Projects</button>
              </div>
              <div className={`md:flex border border-zinc-400 rounded ${designs?'bg-blue-500':'bg-white'} h-11 w-56 cursor-pointer`}>
                <button className='mx-14 my-2 font-medium text-xl' id='design' name="project-type" value="design" onClick={designsSelected}>Designs</button>
              </div>
            </div>
          </div>
            <form className='mx-4 my-4' action="">
            <div className="md:flex md:justify-center md:flex-wrap gap-6 space-y-2">
              <div className="bg-gray-200 h-12 md:w-58 mt-2 mb-5 cursor-pointer rounded">
                <input
                  className="outline-none h-12 px-4 border border-sm w-full rounded"
                  value={firstname}
                  onChange={handleFirstname}
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="bg-gray-300 h-10 md:w-58 mb-5 cursor-pointer rounded">
                <input
                  className="outline-none h-12 px-4 border border-sm w-full rounded"
                  value={lastname}
                  onChange={handleLastname}
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className='flex pt-4'>
              <input
                className='outline-none h-10 px-5 border border-sm w-full rounded'
                value={email}
                onChange={handleEmail}
                type="text"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className='pt-4'>
              <input
                className='outline-none h-10 px-5 mt-2 border border-sm w-full rounded'
                value={password}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
              <div className="flex">
                <p className="font-light text-semibold">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>
            </div>
            <div className='pt-4'>
              <input
                className='outline-none h-10 px-5 mt-2 border border-sm w-full rounded'
                value={password}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Re-Enter Password"
                required
              />
            </div>
            <div className='pt-3'>
              <label className='text-zinc-400 font-semibold'>Select Skills</label>
              <Multiselect className='pt-4' options={options} displayValue="Skills"/>
            </div>
            <div className='md:flex md:w-auto'>
              <button onClick={handleApi} className='w-40 h-10 py-2 my-4 bg-blue-700 hover:bg-blue-600 rounded text-white'>
                Create account
              </button>
            </div>
          </form>
        </div>
        <div className="h-[580px] w-[350px] mt-20 mx-20 hidden md:block shadow-gray-100 bg-blue-600 rounded-xl">
          <div className='grid grid-cols-1 pt-28 pl-8'>
            <h1 className='text-white font-semibold text-4xl'>Start your journey with us.</h1>
            <p className='text-slate-300 text-base pt-4'>Discover the world's best community of freelancers and buisness owners.</p>
          </div> 
          <div className='mt-24 mx-8 h-[140px] bg-blue-700 rounded-xl'>
            <p className='text-slate-300 text-sm pl-2 pt-2'>Simply unbliveble! I am really satisfied with my designs and buisness. This is Absolutely wonderful!</p>
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

export default ManagerIn;
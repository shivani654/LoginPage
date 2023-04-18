import React from 'react';
import {Link} from 'react-router-dom';
import logos from "../../Image/logos.png";


function Lostpassword() {
  return (
    <section className='relative h-screen body bg-cover'>
      <div className= 'flex py-32 justify-center items-center h-screen bg-zinc-900/90'>
        <form className='max-w-[500px] w-full bg-white m-4 rounded-l-3xl rounded-r-3xl justify-center items-center' action="">
          <div className='h-40 max-w-[500px] w-full max-auto text-center bg-blue-600 box-border rounded-tl-2xl rounded-tr-2xl mb-5'>
            <div className="relative flex justify-center">
              <img className="h-16 w-20" src={logos} alt="" />
            </div>
            <div className='relative flex flex-col justify-center '>
              <h1 className='text-3xl text-white font-extrabold'>Lost Password</h1>
              <p className='text-white font-semibold'>Lost password? No need to worry,<br></br> we'll send you the password reset link</p>
            </div>
          </div>
              <div className='px-8 py-3'>
                  <input
                    className='outline-none h-12 px-5 border border-sm w-full'
                    type="text"
                    name="email"
                    placeholder="Enter email ID"
                    required
                  />
              </div>
              <div className='flex flex-col'>
                <div className='px-8'>
                  <button className='w-full h-12 text-white font-semibold py-2 my-4 bg-blue-600 hover:bg-blue-500'>Send reset link 🡢</button>
                </div>
                <div className='px-8'>
                  <button className='w-full h-12 font-light not-italic'>Back to homepage 🡨</button>
                </div>
              </div> 
            <div className='flex justify-between mb-6 px-10'>
              <span className='text-blue-500 font-semibold'><Link to="/SignUp">Join Us Today</Link></span>
              <span className='text-blue-500 font-semibold'><Link to="/ClientIn">Sign In</Link></span>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Lostpassword;

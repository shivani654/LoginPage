import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiBriefcase } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import EmployeeIn from "./EmployeeIn";
import logo from "../../Image/logo.jpg";

function EmployeeSignup() {
  const [employee, setEmployee] = useState(false);

  function employeeSelected() {
    setEmployee(true);
    console.log(employee);
  }

  function freelancerSelected() {
    setEmployee(false);
    console.log(employee);
  }

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
  };

  return (
    <div className="relative bg-white flex justify-center items-center md:w-custom">
      <div className="flex m-auto Class min-h-screen w-full justify-center items-center rounded-l-lg">
        <div className="bg-white flex flex-col mx-2 justify-center rounded-lg space-y-2">
          <div className="flex justify-center">
            <img className="h-18 w-24" src={logo} alt="" />
          </div>
          <div className="mb-8 justify-center text-center">
            <h1 className="font-semibold text-3xl tracking-wide">
              Let's create your account
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-gray-500">
                Already have an account?
                <span className="text-blue-700 font-semibold pl-2">
                  <Link to="/EmployeeIn" element={<EmployeeIn />}>
                    Sign In
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="md:flex md:justify-center md:flex-wrap gap-2">
            <div
              className={`border border-zinc-400 h-12 md:w-72 mb-5 rounded ${
                employee ? "bg-gray-100" : "bg-green-500 text-white"
              } cursor-pointer`}
            >
              <MdOutlineAccountCircle className="absolute mt-4 ml-20" />
              <button
                name="account-type"
                id="freelancer"
                className="cursor-pointer ml-24 mt-3 font-serif"
                onClick={freelancerSelected}
              >
                Freelancer
              </button>
            </div>
            <div
              className={`border border-zinc-400 h-12 md:w-72 mb-5 rounded ${
                employee ? "bg-green-500 text-white" : "bg-gray-100"
              } cursor-pointer`}
            >
              <TfiBriefcase className="absolute mt-4 ml-20" />
              <button
                name="account-type"
                id="employee"
                className="cursor-pointer mt-3 font-serif ml-24"
                onClick={employeeSelected}
              >
                Employee
              </button>
            </div>
          </div>
          <form className="space-y-6" action="">
            <div className="md:flex md:justify-center md:flex-wrap gap-6">
              <div className="bg-gray-200 h-10 md:w-68 mb-5 cursor-pointer">
                <input
                  className="outline-none h-12 px-12 border border-sm w-full"
                  value={firstname}
                  onChange={handleFirstname}
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="bg-gray-300 h-10 md:w-68 mb-5 cursor-pointer">
                <input
                  className="outline-none h-12 px-12 border border-sm w-full"
                  value={lastname}
                  onChange={handleLastname}
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="relative flex">
              <input
                className="outline-none h-12 px-12 border border-sm w-full rounded-r"
                value={email}
                onChange={handleEmail}
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="relative flex flex-col">
              <input
                className="outline-none h-12 px-12 border border-sm w-full rounded-r"
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

            <div className="relative flex">
              <input
                className="outline-none h-12 px-12 border border-sm w-full rounded-r"
                value={password}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Re-Enter Password"
                required
              />
            </div>

            <div className="relative flex">
              <button
                onClick={handleApi}
                className="outline-none h-12 text-white font-semibold w-full bg-blue-700 hover:bg-blue-600 rounded"
              >
                Register
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400 ml-8" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400 mr-8" />
            </div>
            <div className="md:flex md:flex-wrap md:justify-center gap-6 space-y-4 ">
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
            <div className='flex gap-4 mt-1 pl-4'>
              <input type="checkbox" />
              <p className='text-gray-700 text-lg'>I have read and agree to all Terms & Conditions</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSignup;

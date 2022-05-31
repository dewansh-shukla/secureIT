import React from "react"
import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"

function Login() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <main className='flex flex-col items-center pt-10 w-full flex-1 px-20 text-center'>
        <div className='bg-neutral-500 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5 '>
            <div className='flex text-left font-bold'>
              <span className='text-2xl'>Secure</span>
              <span className='text-1xl font-bold text-yellow-500'>IT</span>
            </div>
            <div className='py-5'>
              <h2 className='text-3xl text-yellow-400 font-bold mb-2'>
                Log in to your Account
              </h2>
              <div className='border-2 w-40 border-yellow-400 inline-block mb-2'></div>
            </div>
            <div className='flex justify-center my-2'>
              <a
                href='#'
                className='border-2 border-yellow-300 rounded-full p-3 mx-2'
              >
                <FaFacebook className='text-md'></FaFacebook>
              </a>
              <a
                href='#'
                className='border-2 border-yellow-300 rounded-full p-3 mx-2'
              >
                <FaLinkedinIn className='text-md'></FaLinkedinIn>
              </a>
              <a
                href='#'
                className='border-2 border-yellow-300 rounded-full p-3 mx-2'
              >
                <FaGoogle className='text-md'></FaGoogle>
              </a>
            </div>
            <p className='text-black my-3'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-slate-700 m-2 ml-1' />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='outline-none text-md flex-1'
                />
              </div>
              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-slate-700 m-2 ml-1' />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='outline-none text-md flex-1'
                />
              </div>
              <div className='flex w-64 mb-5 text-sm justify-between '>
                <label className='flexitems-center'>
                  <input type='checkbox' name='remember' className='mr-1' />
                  Remember Me
                </label>
                <a href='#' className='text-black text-sm'>
                  Forgot Password?
                </a>
              </div>
              <a
                href='../signup'
                className='border-2 border-yellow-400 text-yellow-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-400 hover:text-black'
              >
                Log In
              </a>
            </div>
          </div>
          <div className='w-2/5 bg-yellow-400 text-black rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Hello, Friends</h2>
            <div className='border-2 w-20 border-black inline-block mb-2'></div>
            <p className='mb-10'>
              If you wanna be assisted, then join us today!
            </p>
            <a
              href='../signup'
              className='border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-yellow-400'
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login

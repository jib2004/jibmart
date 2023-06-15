import  { useState, useEffect } from 'react'
import { Form , Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import illustrate from '../assets/Illustration.png'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
import book from '../assets/red opened book.png'
import cube from  '../assets/front shapes.png'
import blur from '../assets/Saly-16.png'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'

import { useLoginMutation } from '../features/usersApiSlice'
import { setCredientials } from '../features/authSlice'
import Loader from '../components/Loader'
const LoginPage = () => {

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const  [seePassword, setSeePassword] = useState(false)
    const navigate = useNavigate()
    const dispath = useDispatch()

    const [login, {isLoading}] = useLoginMutation()
    
    const {userInfo} = useSelector((state) => state.auth)

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    }, [userInfo])

    async function handleLogin(e){
        e.preventDefault()
        try{
        const res =await login({email,password}).unwrap()
        dispath(setCredientials({...res}))
       navigate('/')
     
    } catch(err){
        console.log(err)
    }
    }
  return (
    <div className='overflow-hidden h-[100vh] login sm:w-full overflow-visible h-auto'>
    <div className=' w-[75%] mx-auto flex flex-col justify-center sm:w-full'>
        <div className=' h-fit mx-auto '>
            <img src={illustrate} alt=""  className='sm:w-[300px]'/>
        </div>

        <Form action='' className='w-[55%]     mx-auto p-8 rounded-3xl relative -top-[8.3rem] form_log sm:-top-[5.9rem] w-full' onSubmit={handleLogin}>
                 <div  className=''> 
                <img src={blur} alt=""  className='w-10 absolute top-2 left-0'/>
                <img src={cube} alt=""  className='w-10 absolute top-3 right-6'/>
                <h1 className='text-center text-white text-3xl font-bold'>Welcocome Back!</h1>
                <p className='text-center text-white text-sm'>Document is organizing</p>
                <label htmlFor="name" className='text-white'>Username</label>
                <input 
                type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                name='email'
                placeholder='Username' />
                  <div className='relative'>  
                <label htmlFor="password"  className='text-white'>Password</label>
                <input 
                type={seePassword ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Password' />
                        <span
                        className='absolute right-3 top-12'
                        onClick={()=>{
                            setSeePassword(!seePassword)
                            
                        }}
                        >
                     {seePassword ? <FaEyeSlash /> : <FaEye />} 
                        </span>
                </div>
                </div>
                <div className='text-end'>
                <Link className='text-white w-full hover:underline'>Forgot Password ?</Link>
                </div>

                {isLoading && <Loader />}
                <div className='flex justify-center' >
                  <button type='submit' className='text-white w-full text-center py-2 px-4 rounded-2xl mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-red-600 transition duration-300'>Sign in</button> 
                </div>
                <div className='flex justify-between items-center my-2'>
                <hr className='border w-40 sm:w-16'/>
                <legend className='text-white'>Or Continue wth</legend>
                <hr className='border w-40 sm:w-16'/>
                </div>

                <div className='flex justify-center mt-10'>
                <button className='border w-12 rounded-2xl p-2  mx-2'>
                    <img src={google} alt="" />
                </button>
                <button className='border w-12 rounded-2xl p-2  mx-2'>
                    <img src={apple} alt="" />
                </button>
                <button className='border w-12 rounded-2xl p-2  mx-2'>
                    <img src={facebook} alt="" />
                </button>

                
                </div>
                <img src={book} className='absolute bottom-0 right-0 ' alt="" />
                
        </Form>
        </div>
    </div>
  )
}

export default LoginPage
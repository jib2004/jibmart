import { useState,useEffect } from 'react'
import { Form , Link,useNavigate} from 'react-router-dom'
// import {  useForm } from 'react-hook-form'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
import illustrate from '../assets/Illustration_2.png'
import book from '../assets/red opened book.png'
import cube from  '../assets/front shapes.png'
import blur from '../assets/Saly-16.png'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../features/usersApiSlice'
import { ToastContainer, toast } from 'react-toastify';
import { setCredientials } from '../features/authSlice'
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
    // const {register,handleSubmit} = useForm()
    const [firstName, setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [userName, setUserName] = useState('')
    const [email,setEmail]= useState('')
    const [role,setRole]= useState('')
    const [dob,setDob] = useState(new Date())
    const [gender, setGeander] = useState('')
    const [city, setCity] = useState('')
    const [address,setAddress] = useState('')
    const [phoneNumber,setPhoneNumber]= useState('')
    const [password,setPassword]= useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const  [seePassword, setSeePassword] = useState(false)
    


     const handleSubmit= async (e) =>{
        e.preventDefault()
       if (password !== confirmPassword){
        toast('Passwords not similar')
       }else{
        try{
        let response = await axios.post('/register',{
            firstName,
            lastName,
            userName,
            email,
            role,
            dob,
            gender,
            city,
            address,
            password,
            phoneNumber,
        })
        navigate('/login')
        if(response){
            toast('Registration Successful')
        }else{
            toast("Try again later")
        }
    }catch(e){
        toast('Registration Failed')
    }

}
    
}

  return (
    <div className=' login'>
    <div className=' w-[75%] mx-auto flex flex-col justify-center sm:w-full'>
        <div className=' h-fit mx-auto'>
            <img src={illustrate} alt=""  className=''/>
        </div>

        

        <Form action='' className='w-[55%]  mb-2     mx-auto p-8 rounded-3xl relative -top-[0] form_log sm:w-full' onSubmit={handleSubmit}>
                 <div  className=''> 
                <img src={blur} alt=""  className='w-10 absolute top-0 left-0'/>
                <img src={cube} alt=""  className='w-10 absolute top-0 right-3'/>
                <h1 className='text-center text-white text-3xl font-bold'>Get Started Free</h1>
                <p className='text-center text-white text-sm'>And get the best prices</p>
                <div className='flex gap-2 mt-3'>
                <div>
                <label htmlFor="fname" className='text-white'>First Name</label>
                <input 
                
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                type="text" 
                name='fname'
                required={true}
                placeholder='First Name' />

              </div>

                <div className=''>

                 <label htmlFor="lname" className='text-white'>Last Name</label>
                <input 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                type="text" 
                required={true}
                name='lname'
                placeholder='Last Name' />
                </div>
                </div>

                <label htmlFor="username" className='text-white'>Username</label>
                <input 
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                type="text" 
                required={true}
                name='username'
                placeholder='User Name' />

                <label htmlFor="email"  className='text-white'>Email Address</label>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                required={true}
                name='email'
                placeholder='John@gmail.com' />

                <label htmlFor="Role"  className='text-white'>Role</label>
                <select 
                value={role}
                onChange={(e)=> setRole(e.target.value)}
                name="Role" 
                required={true}
                className='cursor-pointer' >
                  <option value="" disabled selected hidden>Kindly Select Your Role</option>
                  <option 
                  value="Buyer" 
                  className='p-2 text-gray-500 '>Buyer</option>
                  <option 
                  value="Seller" 
                  className='p-2 text-gray-500'>Seller</option>
                </select>
                
                <div className='flex gap-6'>
                <div>
                <label htmlFor="D.O.B"  className='text-white'>D.O.B</label>
                <input 
                value={dob.toISOString().slice(0,10)}
                onChange={(e)=>setDob(new Date(e.target.value))}
                type="date" 
                required={true}
                name="D.O.B" />
                </div>

                <div>
                <label htmlFor="gender"  className='text-white'>Gender</label>
                <select 
                name="gender" 
                required={true}
                className='cursor-pointer' 
                value={gender}
                onChange={(e)=> setGeander(e.target.value)}
                >
                  <option value="" disabled selected hidden>Kindly Select Your Gender</option>
                  <option value="Male" className='p-2 text-gray-500 '>Male</option>
                  <option value="Female" className='p-2 text-gray-500'>Female</option>
                </select>
                </div>
                </div>


                <div>
                    <label htmlFor="state" className='text-white'>Select your state</label>
                <select name='state' value={city} required={true} onChange={(e)=> setCity(e.target.value)}>
    <option value="" selected disabled hidden>--Select State--</option>
    <option value="Abia">Abia</option>
    <option value="Adamawa">Adamawa</option>
    <option value="Akwa Ibom">Akwa Ibom</option>
    <option value="Anambra">Anambra</option>
    <option value="Bauchi">Bauchi</option>
    <option value="Bayelsa">Bayelsa</option>
    <option value="Benue">Benue</option>
    <option value="Borno">Borno</option>
    <option value="Cross River">Cross River</option>
    <option value="Delta">Delta</option>
    <option value="Ebonyi">Ebonyi</option>
    <option value="Edo">Edo</option>
    <option value="Ekiti">Ekiti</option>
    <option value="Enugu">Enugu</option>
    <option value="FCT">Federal Capital Territory</option>
    <option value="Gombe">Gombe</option>
    <option value="Imo">Imo</option>
    <option value="Jigawa">Jigawa</option>
    <option value="Kaduna">Kaduna</option>
    <option value="Kano">Kano</option>
    <option value="Katsina">Katsina</option>
    <option value="Kebbi">Kebbi</option>
    <option value="Kogi">Kogi</option>
    <option value="Kwara">Kwara</option>
    <option value="Lagos">Lagos</option>
    <option value="Nasarawa">Nasarawa</option>
    <option value="Niger">Niger</option>
    <option value="Ogun">Ogun</option>
    <option value="Ondo">Ondo</option>
    <option value="Osun">Osun</option>
    <option value="Oyo">Oyo</option>
    <option value="Plateau">Plateau</option>
    <option value="Rivers">Rivers</option>
    <option value="Sokoto">Sokoto</option>
    <option value="Taraba">Taraba</option>
    <option value="Yobe">Yobe</option>
    <option value="Zamfara">Zamfara</option>
</select>
                </div>

 
                <label htmlFor="address"  className='text-white'>Address</label>
                <input 
                value={address}
                required={true}
                onChange={(e)=> setAddress(e.target.value)}
                type="text" 
                name="address" 
                placeholder='123 Avenue' />

                <div className='flex gap-2'>
                <div className='relative'>
                <label htmlFor="password"  className='text-white'>Password</label>
                <input 
                value={password}
                required={true}
                onChange={(e)=> setPassword(e.target.value)}
               type={seePassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password' />

                        <span
                        // type=''
                        className='absolute right-3 top-12'
                        onClick={()=>{
                            setSeePassword(!seePassword)
                            
                        }}
                        >
                     {seePassword ? <FaEyeSlash /> : <FaEye />} 
                        </span>
                </div>

                <div className='relative'>
                <label htmlFor="cpassword"  className='text-white'>Confirm Password</label>
                <input 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
               type={seePassword ? 'text' : 'password'}
                name='cpassword'
                required={true}
                id='cpassword'
                placeholder='Confirm Password' />

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

                <label htmlFor="phone" className='text-white'>Phone Number</label>
                <input type="tel" name="phone" required={true}  value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
                </div>
                
                
                <div className='flex justify-center'>
                 <button type='submit' className='text-white w-full text-center py-2 px-4 rounded-2xl mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-red-600 transition duration-300'>Sign in</button> 
                </div>
                <ToastContainer />

                <div className='mt-3'>
                <input type="checkbox" name="check" id="" required={true}/>
                <label htmlFor="check" className='text-white ml-2'>
                By creating an account, you agree to Jib's <Link className='text-blue-500'>Conditions of Use</Link> and <Link className='text-blue-500'> Privacy Notice.</Link> 
                </label>    
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

export default SignupPage
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import { setCredientials } from "../../features/authSlice"
import { useUpdateMutation } from "../../features/usersApiSlice"
import Loader from "../../components/Loader"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
    const {userInfo} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const [firstName, setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [userName, setUserName] = useState('')
    const [email,setEmail]= useState('')
    const [city, setCity] = useState('')
    const [address,setAddress] = useState('')
    const [phoneNumber,setPhoneNumber]= useState('')
    const id = userInfo._id

    const [updateProfile,{isLoading}] = useUpdateMutation()

    useEffect(()=>{
        setFirstName(userInfo.firstName)
        setLastName(userInfo.lastName)
        setUserName(userInfo.userName)
        setEmail(userInfo.email)
        setCity(userInfo.city)
        setAddress(userInfo.address)
        setPhoneNumber(userInfo.phoneNumber)
    },[
        userInfo.firstName,
        userInfo.lastName,
        userInfo.userName,
        userInfo.email,
        userInfo.city,
        userInfo.address,
        userInfo.phoneNumber
    ])

    const navigate = useNavigate()



    
    const handleSubmit= async (e) =>{
        e.preventDefault()
        try{
            const res = await updateProfile({
                _id: userInfo._id,
                firstName,
                lastName,
                userName,
                email,
                city,
                address,
                phoneNumber
            }).unwrap()
            dispatch(setCredientials({...res}))
            toast.success('Profile Updated')
        }catch(err){
            toast.error(err.error)
        }
    
}

  return (
    
    <form action='' className='  mb-4 mt-4 mx-auto p-8 sm:w-full' onSubmit={handleSubmit}>
                    <h1 className="text-center text-4xl font-bold mb-6">Update Profile</h1>
                 <div  className=''> 

                <div className='flex gap-2 mt-3'>
                <div className="basis-1/2">
                <label htmlFor="fname" className=''>First Name</label>
                <input 
                
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                type="text" 
                name='fname'
                required={true}
                placeholder='First Name' />

              </div>

                <div className="basis-1/2">

                 <label htmlFor="lname" className=''>Last Name</label>
                <input 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                type="text" 
                
                name='lname'
                placeholder='Last Name' />
                </div>
                </div>

                <label htmlFor="username" className=''>Username</label>
                <input 
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                type="text" 
                
                name='username'
                placeholder='User Name' />

                <label htmlFor="email"  className=''>Email Address</label>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                
                name='email'
                placeholder='John@gmail.com' />

        <div>
                    <label htmlFor="state" className=''>Select your state</label>
                <select name='state' value={city}  onChange={(e)=> setCity(e.target.value)}>
    <option selected  hidden>--Select State--</option>
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

 
                <label htmlFor="address"  className=''>Address</label>
                <input 
                value={address}
                
                onChange={(e)=> setAddress(e.target.value)}
                type="text" 
                name="address" 
                placeholder='123 Avenue' />

                <label htmlFor="phone" className=''>Phone Number</label>
                <input type="tel" name="phone"   value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
                </div>
                
                {isLoading ? <Loader /> : null}

                <div className='flex justify-center'>
                 <button type='submit' className='text-white w-full text-center py-2 px-4 rounded-2xl mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-red-600 transition duration-300'>Save Changes</button> 
                </div>

                <ToastContainer />
                

    </form>
  )
}

export default Profile
import {useSelector , useDispatch } from "react-redux"
import { 
  Title,
  States,
  From,
  To,
  Fee,
  Opened
 } from "../features/deliverySlice"
import { useState } from "react"

const DeliverInfo = () => {
  // let openenedDeliveryMenu = useSelector((state)=> state.delivery.isOpened)
  
  const [deliverMenu, setDeliverMenu] = useState(false)
  const [productTitle, setProduct] = useState('')
  const [states, setState] = useState('')
  const [to, setTo] = useState(0)
  const [from, setFrom] = useState(0)
  const [fee, setFee] = useState(0)



   const dispatch =  useDispatch()
  return (
    <div className='absolute top-0 w-full h-full bg-[rgba(0,0,0,0.7)]'>
        <div className='border w-96 p-3 absolute bg-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-2xl '>
        <div className='flex justify-end' onClick={()=> {setDeliverMenu(!deliverMenu); console.log(deliverMenu)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


        </div>

        <label htmlFor="">Product</label>
        <input type="text" value={productTitle} onChange={(e)=>{setProduct(e.target.value)}} />


        <label htmlFor="state" className=''>Region</label>
                <select name='state' value={states}  onChange={(e)=>{setState(e.target.value)}}  required={true} >
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

      <label htmlFor="numofdays">How long Would it take to deliver?</label>
      <div className='flex gap-2'>
        <input type="number" name="" id="" value={from}  onChange={(e)=>{setFrom(e.target.value)}}  placeholder='From'/>
        <input type="number" name="" id="" value={to} onChange={(e)=>{setTo(e.target.value)}} />

      </div>

        <label htmlFor="">Felivery fee</label>
        <div className='flex items-center relative w-full'>
          <button className=' text-xl py-[0.375rem] px-2 absolute'>&#8358;</button>
          <input type="tel" name="price" className=' pl-12 sellPrice' value={fee} onChange={(e)=>{setFee(e.target.value)}}  />
          </div>
      


        <button  className='text-white w-full text-center py-2 px-4 rounded-2xl mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-red-600 transition duration-300' onClick={(e)=>{ 
          e.preventDefault()
          setDeliverMenu(!deliverMenu); 
          console.log(deliverMenu)
          dispatch(Title(productTitle))
          dispatch(States(states))
          dispatch(To(to))
          dispatch(From(from))
          dispatch(Fee(fee))
          dispatch(Opened(deliverMenu))
        

          setProduct('')
          setState('')
          setFrom(0)
          setTo(0)
          setFee(0)
          
          }}>Save</button>
      </div>

    </div>
  )
}

export default DeliverInfo
import  { useState } from 'react'
import DeliverInfo from '../../components/DeliverInfo'
import { useSelector,useDispatch } from 'react-redux'
import { Opened } from '../../features/deliverySlice'

const ProductForm = () => {
  // const openenedDeliveryMenu = useSelector((state)=> state.delivery.isOpened)
  const dispatch = useDispatch()
  const [deliverMenu, setDeliverMenu] = useState(false)
  const [delivery, setDelivery] = useState([])
  const title = useSelector((state)=> state.delivery.productTitle)
  const states = useSelector((state)=> state.delivery.states)
  const from = useSelector((state)=> state.delivery.from)
  const to = useSelector((state)=> state.delivery.to)
  const fee = useSelector((state)=> state.delivery.fee)

 

  return (
    <form className='relative mt-10'>
      <label htmlFor="productName">Product Title</label>
      <input type="text" name="productName"  />

      <div className='mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        
        
        <label className='h-32 cursor-pointer inline-flex items-center justify-center gap-1 border bg-transparent rounded-2xl  p-2 text-2xl text-gray-600' title='Add Product Image'>
        <input type="file" multiple  className='hidden' />
            Upload <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>

        </label>
        </div>

      <label htmlFor="category">Select The category</label>
      <select name="category" >
        <option value="" selected disabled hidden>Select a Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Computers">Computers</option>
        <option value="Mobile Phones and Accessories">Mobile Phones and Accessories</option>
        <option value="Automotive">Automotive</option>
        <option value="Beauty and Personal Care">Beauty and Personal Care</option>
        <option value="Fashion">Fashion</option>
        <option value="Health and Household">Health and Household</option>
        <option value="Toys and Games">Toys and Games</option>
        <option value="Video Games and Consoles">Video Games and Consoles</option>
        <option value="Arts & Craft">Arts & Craft</option>
        <option value="Sports and Outdoors">Sports and Outdoors</option>
        <option value="Pet Supplies">Pet Supplies</option>
        <option value="Appliances">Appliances</option>
        <option value="Fruits and Vegetables">Fruits and Vegetables</option>
        <option value="Books">Books</option>
      </select>

      <label htmlFor="condition">Condition</label>
      <select name="condition" >
        <option value="" selected disabled hidden>Condition</option>
        <option value="Brand New">Brand New</option>
        <option value="Manufacturer Refurbished">Manufacturer Refurbished</option>
        <option value="Seller Refurbished">Seller Refurbished</option>
        <option value="Used">Used</option>
      </select>

      <div>
        <h1>Colors</h1>
        <div className='flex gap-3'>
        <div className='flex items-center'>
        <input type="checkbox" name="red" value='Red'  />
        <label htmlFor="red">Red</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="blue" value='Blue'  />
        <label htmlFor="blue">Blue</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="purple" value='Purple'  />
        <label htmlFor="purple">Purple</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="orange" value='Orange'  />
        <label htmlFor="orange">Orange</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="white" value='White'  />
        <label htmlFor="white">White</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="black" value='Black'  />
        <label htmlFor="black">Black</label>
        </div>


        <div className='flex items-center'>
        <input type="checkbox" name="Gold" value='Gold'  />
        <label htmlFor="Gold">Gold</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="Silver" value='Silver'  />
        <label htmlFor="Silver">Silver</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="Pink" value='Pink'  />
        <label htmlFor="Pink">Pink</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="Gray" value='Gray'  />
        <label htmlFor="Gray">Gray</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="Violet" value='Violet'  />
        <label htmlFor="Violet">Violet</label>
        </div>

        <div className='flex items-center'>
        <input type="checkbox" name="Other" value='Other'  />
        <label htmlFor="Other">Other</label>
        </div>
        </div>
        
      </div>

      <label htmlFor="description">Description</label>
      <textarea name="description"  cols="30" rows="10" placeholder='Description' className='rounded-none'></textarea>

      <label htmlFor="numofgoods">Number of goods</label>
      <input type="number" name="numofgoods" />

      <div>
      <div className='flex w-full  gap-2 items-center'>
        <label htmlFor="Price">Price</label>
        <div className='flex items-center relative w-full'>
          <button className=' text-xl py-[0.375rem] px-2 absolute'>&#8358;</button>
          <input type="tel" name="price" className=' pl-12 sellPrice' />
          </div>

        <div className=' w-full'> 
          <input type="text" placeholder='bulk >'  disabled  />
        </div>

        </div>

        <input type="checkbox" name="negotiate"  />
        <label htmlFor="negotiate" className='ml-2'>Negotiatable</label>
      </div>

      

      <div className='my-4' >
        {title ?  

      <div>
        <div>
            <button className='bg-green-500 text-white p-2 rounded-xl'>
              Add
            </button>
        </div>
        <div className='flex '>
          <table className='w-[75%] mx-auto'>
            <tr>
              <th className='border p-4'>Title</th>
              <th className='border p-4'>State</th>
              <th className='border p-4'>From</th>
              <th className='border p-4'>To</th>
              <th className='border p-4'>Fee</th>
            </tr>

            <tr >
              <td className='border p-4'>{title}</td>
              <td className='border p-4'>{states}</td>
              <td className='border p-4'>{from}</td>
              <td className='border p-4'>{to}</td>
              <td className='border p-4'>{fee}</td>

              <button className='bg-red-500 text-white p-2 rounded-xl'>Delete</button>
            </tr>


            
          </table>
          
        </div>
      </div>
      : 
      
      <span className=' flex items-center justify-between w-full border p-3 cursor-pointer rounded-lg' onClick={()=> {
        setDeliverMenu(!deliverMenu);  
        console.log(deliverMenu)
        dispatch(Opened(deliverMenu))
      
      }}>
      Delivery Information 
      <span> 
        
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

   

      </span>

     
    </span> 
      }

       

      </div>



      {deliverMenu ? <DeliverInfo /> : null }
      {console.log(deliverMenu)}

      <ul className='border p-4 mt-4'>
        <h2 className='text-xl font-semibold my-4'>Promote Your product</h2>

        <li className='flex justify-between border p-4 mb-3 cursor-pointer'>
          <span>Standard</span><span className='text-gray-400 '>Free</span>
        </li>


        <li className='border p-4 mb-3 cursor-pointer'>
            Premium 
            <div className='flex items-center justify-between '>
            <div className='flex'>
              <div className='border w-20 h-10 flex justify-center items-center rounded-full cursor-pointer'>7 Days</div>
              <div className='border w-20 h-10 flex justify-center items-center rounded-full cursor-pointer'>30 Days</div>
            </div>
            
            <span className='text-xl'>&#8358; 3000</span>
            </div>
        </li>
        

        <li className='border p-4 mb-3 cursor-pointer'>
            VIP
            <div className='flex items-center justify-between '>
            <div className='flex'>
              <div className='border w-20 h-10 flex justify-center items-center rounded-full cursor-pointer'>1 month</div>
              
            </div>
            
            <span className='text-xl'>&#8358; 20000</span>
            </div>
        </li>

        <div className='flex justify-center'>
        <span  className='text-white  text-center py-2 px-4 rounded-2xl mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-red-600 transition duration-300'>Promote Product</span>
        </div>

      </ul>

      


      <div>
        <button  className='text-white w-full text-center py-2 px-4 rounded-2xl mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-red-600 transition duration-300'>Add Product</button>
      </div>
    </form>
  )
}

export default ProductForm
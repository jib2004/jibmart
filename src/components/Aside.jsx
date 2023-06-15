import {  Link, useLocation} from 'react-router-dom'

const Aside = () => {
  
  return (
    <aside className=" ">
    <ul>
      <Link>  <li className="border p-4 my-9 text-center bg-red-400 text-white">  <i className="fa-solid fa-house"></i>  <p>Home</p></li></Link>
      <Link>  <li className="border p-4 my-9 text-center bg-red-400 text-white">  <i className="fa-solid fa-bag-shopping"></i> <p>Cart</p></li></Link>
      <Link>  <li className="border p-4 my-9 text-center bg-red-400 text-white">  <i className="fa-solid fa-cart-shopping"></i> <p>Order</p></li></Link>
      <Link>  <li className="border p-4 my-9 text-center bg-red-400 text-white">  <i className="fa-solid fa-wallet"></i> <p>Wallet</p></li></Link>
      <Link>  <li className="border p-4 my-9 text-center bg-red-400 text-white">  <i className="fa-solid fa-user"></i> <p>Profile</p></li></Link>
    </ul>
    
    </aside>
  )
}

export default Aside
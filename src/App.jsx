import Hopmepage from './pages/Hopmepage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx' 
import ProductPage from './pages/ProductPage.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

//Toastify
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}  from 'react-router-dom'
 import axios from 'axios'
import UserProfilePage from './pages/UserProfilePage.jsx'
import Seller from './pages/userrole/Seller.jsx'

 axios.defaults.baseURL = 'http://localhost:5000'
 axios.defaults.withCredentials = true

function App() {

  const router = createBrowserRouter(
     
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//     {/* <Route path='' element={<PrivateRoute />}> */}
//     <Route path='/profile' element={<UserProfilePage/>}/>
// {/* </Route> */}
// </Route>
//   ),
    
    [
    {
      path: '/',
              exact: true,
              index:true,
              element: <LandingPage />,
    },
    {
      path: '/home',
              exact: true,
              element: <Hopmepage />,
    },
    {
      path: '/login',
              exact: true,
              element: <LoginPage />,
    },
    {
      path: '/register',
              exact: true,
              element: <SignupPage />,
    },
    {
      path:'/product/:productName',
      exact:true,
      element:<ProductPage />
    },
    {
      path:'/checkout',
      exact:true,
      element:<CheckOutPage />
    },

    {
      path: '/account',
      element: <UserProfilePage />
    },

    {
      path:'/account/:subpage?',
      element: <UserProfilePage />
    },
    {
      path:'/seller',
      element:<Seller />
    },
    {
      path:'/seller/:subpage',
      element:<Seller />
    }


   
  ])

  


  return (
    <>
  
    <RouterProvider  router={router} />

    </>
  )
}

export default App

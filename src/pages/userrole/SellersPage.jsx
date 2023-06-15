import {useState} from 'react'
import Aside from '../../components/Aside'
import SellerSubscriptionPage from '../SellerSubscriptionPage'
import Seller from './Seller'
const SellersPage = () => {
const [isPaidSubscption, setisPaidSubscption] = useState(true)

  return (
    <div>
      {isPaidSubscption ? <Seller /> : <SellerSubscriptionPage />}
      
    </div>
  )
}

export default SellersPage
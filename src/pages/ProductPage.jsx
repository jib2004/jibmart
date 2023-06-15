import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    let {productName} = useParams()
  return (
    <div>ProductPage {productName}</div>
  )
}

export default ProductPage
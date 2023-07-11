import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  let {id} = useParams()
  let [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
    .then((res) => {
      console.log(res.data)
      setProduct(res.data.data[0])
  })
    .catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <div>
      <ul>
          <li>{product.id}</li>
          <li>{product.name}</li>
          <li>{product.stock}</li>
          <li>{product.price}</li>
          <li><a target="_blank" rel="noopener noreferrer" href={product.photo}>{product.photo}</a></li>
          <li>{product.description}</li>
        </ul>
    </div>
  )
}

export default Detail
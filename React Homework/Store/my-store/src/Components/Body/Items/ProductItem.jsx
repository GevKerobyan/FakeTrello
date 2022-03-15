import './Item.css'
import { useEffect, useState } from 'react'
import Count from '../count'


export default function ProductItem({
   productElement,
   basket,
   itemCountMinus,
   itemCountPlus,

}) {

   
   return (
      <div className='product-item' >
         <div className='item-image-container'>
            <img src={productElement.url} alt='barev sujux' />
         </div>
         <p><span>Title:</span> {productElement.title}</p>
         <span>Year: {productElement.dated}</span>

         <div className="item-counter">
            <button className='minus' onClick={() => itemCountMinus(basket.find(item => item.id === productElement.id) || productElement)}>-</button>
            <span className='show-count'>{basket.find(item => item.id === productElement.id)?.count || 0}</span>
            <button className='plus' onClick={() => itemCountPlus(basket.find(item => item.id === productElement.id) || productElement)}>+</button>
         </div>

      </div>
   )
}

import { useState, useEffect } from 'react';
import ProductItem from './Items/ProductItem'
import './ProdList.css'

export default function ProductsList({
  data,
  basket,
  isModalOpen,
  itemCountMinus,
  itemCountPlus,

}) {



  return (
    <div className={`products-list-container ${isModalOpen ? "fixed" : ""}`}>

      {data.length > 0 ? data.map((item) => {
        return (
          <ProductItem
            /* data-item */
            key={item.id}
            productElement={item}
            basket={basket}

            /* data-item */

       
            itemCountPlus={itemCountPlus}
            itemCountMinus={itemCountMinus}
          />
        )
      }) : <span>Please wait a sec ...</span>}
    </div>
  )
}

import { useEffect, useState } from 'react';
import './BasketOpen.css'

export default function BasketOpen({
   basket,
   setBasket,
  
   basketPlus,
   basketMinus,
   isModalOpen,
   setIsModalOpen,

}) {


   const closeModal = () => {
      setIsModalOpen(false)
   }

   if (isModalOpen) {
      return (
         <>

            {/* return (
    <ProductItem
      lotName={lotName}
      setLotName={setLotName}
      key={item.id}
      data={item}

      basketArr={basketArr}
      setBasketArr={setBasketArr}

  ) */}
            <div className="basket-open-window" onClick={closeModal}> </div>
            <div className='basket-open'>
               {basket.length > 0 ? basket.map((item) => {
                  console.log(item.count)
                  return (
                     <div className='basket-item' key={item.id} >
                        <img src={item.url} alt="item-image" className='basket-item-img' />
                        <p>
                           <span>{item.id}</span>
                        </p>
                        <div className='basket-count-modal'>
                           <button className='basket-plus' onClick={()=> basketPlus(item)}>+</button>
                           <button className='basket-minus' onClick={()=> basketMinus(item)}>-</button>

                        </div>

                        <p className="basket-item-count">{item.count}</p>

                     </div>
                  )
               }) : <span>Nothing Selected Yet ...</span>}
            </div>
         </>

      )
   }
   return null;
}
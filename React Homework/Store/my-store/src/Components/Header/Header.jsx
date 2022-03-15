import logo from "../../assets/myLogo.png"
import basketSVG from "../../assets/shopping-cart.svg"
import BasketOpen from "./BasketOpen/BasketOpen"
import './Header.css'

export default function Header({
   basket,
   setBasket,
   basketPlus,
   basketMinus,
   isModalOpen,
   setIsModalOpen
}) {
   // console.log(basket.length)
   return (
      <div className='header-conatiner'>
         <div className="header-logo">
            <img src={logo} alt="" className="logo-img" />
         </div>
         <div className="header-right-side">
            <div className="search-input">
               <label htmlFor="search">Search</label>
               <input type="text" id='search' className="header-search" />
            </div>
            <div className="header-basket" onClick={() => (setIsModalOpen(true))}>
               <div className="basket-count-top">{basket.length}</div>
               <img src={basketSVG} alt="" className="basket-img" />
            </div>
            <BasketOpen
               basket={basket}
               setBasket={setBasket}
               isModalOpen={isModalOpen}
               setIsModalOpen={setIsModalOpen}
               basketPlus= {basketPlus}
               basketMinus={basketMinus}
            />
         </div>
      </div>
   )
}

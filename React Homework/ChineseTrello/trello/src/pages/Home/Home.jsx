import './home.css'
// import { useReducer } from 'react'
import logo from '../../Assets/trello-logo.svg';
import heroImg from '../../Assets/home-img.png'
// import { ACTIONS, reducer, userDefaultState } from '../../state/UserState.js'
import {Link} from 'react-router-dom'

function Home() {


   return (
      <>
         <div className="home-nav">
            <img className='logo' src={logo} />
            <Link to='/login'><button > sign in </button></Link>
         </div>
         <div className="home-page">
            <div className="home-content">
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iusto.</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis veritatis
                  eos aliquam expedita, dolorum itaque ipsam repudiandae dolor saepe nulla!
               </p>
            </div>
            <img className='hero' src={heroImg} />

         </div>

      </>
   )
}


export default Home
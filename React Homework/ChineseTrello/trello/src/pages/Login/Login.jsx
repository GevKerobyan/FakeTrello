import { useState, useReducer } from 'react'
import { Link, Navigate } from 'react-router-dom'
import useUserContext from '../../components/Hooks/useUserContext'
// import { Users } from '../../Data/UserData'
import { ACTIONS, reducer, userDefaultState } from '../../state/UserState'
import './Login.css'

function Login() {
  const {userState, userDispatch} = useUserContext()



  const [LoggedUser, setLoggedUser] = useState({
    userName: '',
    userSurname: '',
    userEmail: '',
    userPassword: '',
  })

  
  // ----- INPUT FUNCTIONS ----- //
  
    const handleNameChange = (e) => {
      setLoggedUser((prev) => ({ ...prev, userName: e.target.value }))
      console.log(LoggedUser)
    }

    const handleSurnameChange = (e) => {
      setLoggedUser((prev) => ({ ...prev, userSurname: e.target.value }))
      console.log(LoggedUser)
    }

  const handleMailChange = (e) => {
    setLoggedUser((prev) => ({ ...prev, userEmail: e.target.value }))
  }

  const handlePasswordChange = (e) => {
    setLoggedUser((prev) => ({ ...prev, userPassword: e.target.value }))
  }

  // ----- SUBMIT FUNCTION ----- //

  const handleSubmit = (e) => {
    e.preventDefault();
    userDispatch({type: ACTIONS.LOGIN, value: LoggedUser })
  }



  if (userState.isLoggedIn) {
    console.log('test');
    return <Navigate replace to='/boards'/>
  }


  
  return (

    <div className="login-page">

      <form className="login-container">

        <h2>log in to chineseTrello</h2>
        <input type="text" value={LoggedUser.userName} onChange={(e) => handleNameChange(e)} placeholder='your name' />
        <input type="text" value={LoggedUser.userSurname} onChange={(e) => handleSurnameChange(e)} placeholder='your Surname' />
    
        <input type="email" value={LoggedUser.userEmail} onChange={(e) => handleMailChange(e)} placeholder='your mail' />
        <input type="password" value={LoggedUser.userPassword} onChange={(e) => handlePasswordChange(e)} placeholder='your password' />
        <button type='submit' onClick={(e)=> handleSubmit(e) }>Get In</button>

      </form>
    </div>

  )
}

export default Login
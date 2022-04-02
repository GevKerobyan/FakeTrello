import { useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Boards from './pages/Boards/Boards.jsx';
import Profile from './pages/Profile/Profile.jsx'
import { ACTIONS, reducer, State, userDefaultState } from './state/UserState'
import BoardItem from './pages/BoardItem/BoardItem';


function App() {
  const [userState, userDispatch] = useReducer(reducer, userDefaultState);


  return (
    <State.Provider value={{userState, userDispatch}}>

      <div className="App">

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/boards' element={<Boards />} />
          <Route path='/board/js' element={<BoardItem />} />
          <Route path='/profile' element={<Profile />} />


        </Routes >
      </div>
    </State.Provider>




  );
}

export default App;
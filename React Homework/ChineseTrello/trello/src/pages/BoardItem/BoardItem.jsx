import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { boardItemStyles } from './BoardItemStyling'
import useUserContext from "../../components/Hooks/useUserContext.js";
import Collumn from '../../components/ListCollumn/ListCollumn.jsx'
import { ACTIONS } from "../../state/UserState";


function BoardItem() {
   const BoardItemStyles = boardItemStyles()
   const { userState, userDispatch } = useUserContext()
   const { state: { item, index } } = useLocation()
   
   const [collumnName, setCollumnName] = useState('')

   // console.log( item, ' : item' )

   useEffect(() => { console.log(userState, ' : userState')}, [userState])

   const enterTask = () => {
      if (collumnName) {
         userDispatch({ type: ACTIONS.ADDCOLLUMN, index: index, collumnName: collumnName })
         setCollumnName('')
      }
   }

   return (
      <div className={BoardItemStyles.collumnPage}>
         <div className={BoardItemStyles.boardItemInputWrap}>
            <input type='text' value={collumnName} placeholder="name your list"
               onChange={(e) => setCollumnName(e.target.value)} className={BoardItemStyles.collumnNameInput} />
            <button onClick={enterTask} className={BoardItemStyles.collumnNameButton}>add list</button>
         </div>
         <div className={BoardItemStyles.taskWrapper}>
            {userState.userBoards[index].tasksCollumn.map((collumn, collumnIndex) => {
               // { console.log(collumn, collumnIndex, 'baba') }
               return <Collumn key={collumnIndex} collumn={collumn} index={index} collumnIndex={collumnIndex} />
            })}
         </div>
      </div>
   )
}

export default BoardItem
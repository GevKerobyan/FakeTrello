import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx'
import useUserContext from '../../components/Hooks/useUserContext.js'
import BoardItemLeft from '../../components/BoardItem/BoardItemLeft/BoardItemLeft.jsx';
import { useBoardsStyles } from './BoardsStyling'
import { ACTIONS, reducer, userDefaultState } from '../../state/UserState'
import BoardItemRight from '../../components/BoardItem/BoardItemRight/BoardItemRight.jsx';
import userAvatar from '../../Assets/profilePic.png'



function Boards() {
  const { userState, userDispatch } = useUserContext();
  const BoardsStyles = useBoardsStyles();
  const [newBoard, setNewBoard] = useState();

  const handleNewBoardCreateClick = (e) => {
    e.preventDefault();
    const boardID = Math.random() * 10;
    userDispatch({ type: ACTIONS.ADDBOARD, value: {
      boardName: newBoard,
      boardID: boardID,
      tasksCollumn: [],
      boardCategory: '',
   } })
    console.log(newBoard, 'newBoard')

  }


  return (
    <>
      <Header />
      <div className={BoardsStyles.boardsPage}>
        <div className={BoardsStyles.boardsLeft}>
          <form className={BoardsStyles.boardsCreateInputWrap}>
            <label htmlFor="createBoardInput" className={BoardsStyles.createBoardLabel}>create a new board</label>
            <div className={BoardsStyles.inputLowerWrap}>
              <input type="text"
                onChange={(e) => setNewBoard(e.target.value)}
                id='createBoardInput'
                className={BoardsStyles.createBoardInput} />
              <button type='submit' onClick={(e) => handleNewBoardCreateClick(e)} className={BoardsStyles.createBoardButton}>+</button>
            </div>
          </form>
          <div className={BoardsStyles.profWrapper}>
            <div className={BoardsStyles.avatarContainer}>
              <img src={userAvatar} className={BoardsStyles.avatarImg} alt="" />
            </div>
            <div className={BoardsStyles.profWrapperInfo}>
              <span>{userState.userInfo.userName}</span>
              <span>{userState.userInfo.userSurname}</span>
              <span>{userState.userInfo.userEmail}</span>

            </div>
          </div>
        </div>
        <div className={BoardsStyles.boardsRight}>
          {userState.userBoards.map((item, index) => {
            return (
              <BoardItemRight item={item} index={index} key={Math.random()*10} />
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default Boards
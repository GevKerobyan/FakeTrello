import { useState } from "react";
import { collumnStyles } from "./ListCollumnStyling"
import useUserContext from "../../components/Hooks/useUserContext.js";
import { ACTIONS } from "../../state/UserState";
import TaskItemModal from "../Task/TaskItemModal";


export default function ListCollumn({ collumn, index, collumnIndex }) {
  const { userState, userDispatch } = useUserContext()
  const collumnStyle = collumnStyles();
  const [taskName, setTaskName] = useState('')
  const [modalFlag, setModalFlag] = useState(false)

  const handleCreateTask = () => {
    userDispatch({
      type: ACTIONS.ADDTASK, index: index, collumnIndex: collumnIndex,
      task: {
        taskText: taskName,
        taskPriority: 'medium',
        taskStatus: collumn.collumnName,
      }
    })
  }

  const openTaskModal = (e) => {
    // console.log(e.target, ' : eTarget');
    setModalFlag(!modalFlag)
  }

  return (
    <div className={collumnStyle.collumnWrap}>
      <div className={collumnStyle.collumnTitle}>{collumn.collumnName}</div>
      <div className={collumnStyle.taskInputWrap}>
        <input type='text' value={taskName} className={collumnStyle.taskInput}
          onChange={(e) => setTaskName(e.target.value)}></input>
        <button type="submit" className={collumnStyle.taskInputButton} onClick={handleCreateTask} >+</button>
      </div>
      <div className={collumnStyle.taskList}>
        <h3>Tasks</h3>
        <div className={collumnStyle.tasksWrap}>
        {userState.userBoards[index].tasksCollumn[collumnIndex].tasks.map((taskItem, taskItemIndex) => {
              //  { console.log(collumn, collumnIndex, 'baba') }
               return (<div key={taskItemIndex}>
               <div onClick={(e)=>openTaskModal(e)} className={collumnStyle.singleTask} >{taskItem.taskText}</div>
               {modalFlag && <TaskItemModal openTaskModal={openTaskModal} 
               taskItem={taskItem} 
               boardIndex = {index}
               collumnIndex = {collumnIndex}
               taskItemIndex={taskItemIndex}
               collumn = {collumn.collumnName}
               />}
               </div>)
            })}
        </div>
       
        
 
      </div>
    </div>
  )
}

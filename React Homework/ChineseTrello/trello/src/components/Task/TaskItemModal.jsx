import { useEffect, useRef, useState } from "react";
import { ACTIONS } from "../../state/UserState";
import ModalClose from "../Hooks/modalClose";
import useUserContext from "../Hooks/useUserContext";
import editIMG from '../../Assets/editTask.svg'

import taskModal from "./TaskItemModalStyling"


function TaskItemModal({ openTaskModal, taskItem, taskItemIndex, boardIndex, collumnIndex, collumn }) {
  const ref = useRef()
  ModalClose(ref, () => openTaskModal())
  const taskItemModal = taskModal();
  const { userState, userDispatch } = useUserContext()

  const [newModalTask, setNewModalTask] = useState({
    inputTitle: userState.userBoards[boardIndex].tasksCollumn[collumnIndex].tasks[taskItemIndex].taskText,
    inputPriority: userState.userBoards[boardIndex].tasksCollumn[collumnIndex].tasks[taskItemIndex].taskPriority,
    inputStatus: userState.userBoards[boardIndex].tasksCollumn[collumnIndex].collumnName,
  })

  const [textInputFlag, setTextInputFlag] = useState(false)
  const [priorityInputFlag, setPriorityInputFlag] = useState(false)
  const [statusInputFlag, setStatusInputFlag] = useState(false)

  const [dispatchFlag, setDispatchFlag] = useState(false)

 

  const changeInputTitle = (e) => {
    return setNewModalTask({...newModalTask, inputTitle: e.target.value});
  }

  const changeInputPriority = (e) => {
    return setNewModalTask({...newModalTask, inputPriority: e.target.value});
  }

  const changeInputStatus = (e) => {
    return setNewModalTask({...newModalTask, inputStatus: e.target.value});
  }

  const submitTitleChange = (e) => {
    setTextInputFlag(!textInputFlag)
    setNewModalTask({...newModalTask, inputTitle: e.target.value})
    setDispatchFlag(!dispatchFlag)  
    
  }

  const submitPriorityChange = (e) => {
    setPriorityInputFlag(!priorityInputFlag)
    setNewModalTask({...newModalTask, inputPriority: e.target.value})
    setDispatchFlag(!dispatchFlag)  
  }

  const submitStatusChange = (e) => {
    setStatusInputFlag(!statusInputFlag)
    setNewModalTask({...newModalTask, inputStatus: e.target.value})
    setDispatchFlag(!dispatchFlag)  
  }

  
  const dispatchChanges = () => {
    userDispatch(
      {
        type: ACTIONS.EDITTASK,  
        taskItemIndex: taskItemIndex, 
        collumnIndex: collumnIndex,
        boardIndex: boardIndex,
        collumnIndex: collumnIndex,
        task: {
          taskText: newModalTask.inputTitle,
          taskPriority: newModalTask.inputPriority,
          taskStatus: newModalTask.inputStatus,
        }
      })
  }

    

  return (
    <div className={taskItemModal.modalWrap} ref={ref}>
      <div className={taskItemModal.modalInputWrap}><span>Task</span>
        {textInputFlag ? <input value={newModalTask.inputTitle} className={taskItemModal.modalInput} type='text'
          onChange={(e) => changeInputTitle(e)} /> :
          (<span>{newModalTask.inputTitle}</span>)}
        <button onClick={(e) => submitTitleChange(e)} className={taskItemModal.editButton}> <img className={taskItemModal.editIMG} src={editIMG} /></button>
      </div>

      <div className={taskItemModal.modalInputWrap}><span>Priority</span>
        {priorityInputFlag ? <input value={newModalTask.inputPriority} className={taskItemModal.modalInput} type='text'
          onChange={(e) => changeInputPriority(e)} /> :
          (<span>{newModalTask.inputPriority}</span>)}
        <button onClick={(e) => submitPriorityChange(e)} className={taskItemModal.editButton}> <img className={taskItemModal.editIMG} src={editIMG} /></button>

      </div>

      <div className={taskItemModal.modalInputWrap}><span>Status</span>
        {statusInputFlag ? <input value={newModalTask.inputStatus} className={taskItemModal.modalInput} type='text'
          onChange={(e) => changeInputStatus(e)} /> :
          (<span>{newModalTask.inputStatus}</span>)}
        <button onClick={(e) => submitStatusChange(e)} className={taskItemModal.editButton}> <img className={taskItemModal.editIMG} src={editIMG} /></button>

      </div>
      <button onClick={dispatchChanges}>dispatch</button>

    </div>

  )
}

export default TaskItemModal
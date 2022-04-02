import { useRef, useState } from "react";
import { ACTIONS } from "../../state/UserState"
import ModalClose from "../Hooks/modalClose";
import useUserContext from "../Hooks/useUserContext"

import taskModal from "./TaskItemModalStyling"


function TaskItemModal({ openTaskModal, taskItem, boardIndex, collumnIndex, collumn }) {
  const ref = useRef()
  const taskItemModal = taskModal();
  const { userState, userDispatch } = useUserContext()

  const [inputTitle, setInputTitle] = useState(taskItem.taskText)
  const [inputPriority, setInputPriority] = useState(taskItem.taskPriority)
  const [inputStatus, setInputStatus] = useState()

  const [textInputFlag, setTextInputFlag] = useState(false)
  const [priorityInputFlag, setPriorityInputFlag] = useState(false)
  const [statusInputFlag, setStatusInputFlag] = useState(false)

  ModalClose(ref, () => openTaskModal())

  console.log(taskItem);

  const changeInputTitle = (e) => {
    return setInputTitle(e.target.value);
  }

  const changeInputPriority = (e) => {
    return setInputPriority(e.target.value);
  }

  const changeInputStatus = (e) => {
    return setInputStatus(e.target.value);
  }

  const toggleTextInput = () => {
    setTextInputFlag(true)
    setStatusInputFlag(false)
    setPriorityInputFlag(false)
  }
  const togglePriorityInput = () => {
    setPriorityInputFlag(true)
    setTextInputFlag(false)
    setStatusInputFlag(false)
  }
  const toggleStatusInput = () => {
    setStatusInputFlag(true)
    setPriorityInputFlag(false)
    setTextInputFlag(false)

  }

  const submitChanges = (e) => {
    setInputTitle(e.target.value[0])
    setInputPriority(e.target.value[1])
    setInputStatus(e.target.value[2])

    userDispatch(
      {type: ACTIONS.ADDTASK, 
        index: boardIndex, 
        collumnIndex: collumnIndex,
        task: {
          taskText: inputTitle,
          taskPriority: inputPriority,
          taskStatus: inputStatus,
        }})
  }

  return (
    <div className={taskItemModal.modalWrap} ref={ref}>
      <div className={taskItemModal.modalInputWrap} onClick={toggleTextInput}><span>Task</span>
        {textInputFlag ? <input value={inputTitle} className={taskItemModal.modalInput} type='text'
          onChange={(e) => changeInputTitle(e)} /> :
          (<span>{inputTitle}</span>)}
      </div>

      <div className={taskItemModal.modalInputWrap} onClick={togglePriorityInput}><span>Priority</span>
        {priorityInputFlag ? <input value={inputPriority} className={taskItemModal.modalInput} type='text'
          onChange={(e) => changeInputPriority(e)} /> :
          (<span>{inputPriority}</span>)}
      </div>

      <div className={taskItemModal.modalInputWrap} onClick={toggleStatusInput}><span>Status</span>
        {statusInputFlag ? <input value={inputStatus} className={taskItemModal.modalInput} type='text'
          onChange={(e) => changeInputStatus(e)} /> :
          (<span>{collumn}</span>)}
      </div>
      <button onClick={(e) => submitChanges(e)}>Submit Changes</button>
    </div>

  )
}

export default TaskItemModal
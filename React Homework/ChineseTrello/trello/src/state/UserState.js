import { createContext, useContext, useReducer } from "react"
import { users } from '../Data/UserData'

const userDefaultState = {

   userInfo: {
      userName: '',
      userSurname: '',
      userEmail: '',
      userPassword: '',
   },
   isLoggedIn: false,
   userBoards: [
      // {
         // boardName: '',
         // boardID: Math.random() * 10,
         // boardDiscription: '',
         // boardCategory: '',
         // boardStatus: '',
         // tasksCollumn: [
         //    {
         //       collumnName: '',
         //       tasks: [

         //       ]
         //    }
         // ]
      // }
   ]
}

const ACTIONS = {
   LOGIN: 'LOGIN',
   ADDBOARD: 'ADDBOARD',
   ADDCOLLUMN: 'ADDCOLLUMN',
   ADDTASK: 'ADDTASK',
}

function reducer(state, action) {
   switch (action.type) {

      // ----- LOGIN ACTION ----- // 

      case ACTIONS.LOGIN: {
         if (
            action.value.userName === users.user1.userName &&
            action.value.userSurname === users.user1.userSurname &&
            action.value.userEmail === users.user1.userEmail
         ) {
            return {
               ...state,
               userInfo: action.value,
               isLoggedIn: true
            };
         }
      }


      case ACTIONS.ADDCOLLUMN: {
         const updatedUserBoards = state.userBoards.map((item, index) => {
            if (index !== action.index) {
               return item
            } else {
               console.log(state, ' : State in ADDCOLLUMN 2')
               return { ...item, tasksCollumn: [...item.tasksCollumn, { collumnName: action.collumnName, tasks: [] }] }
            }
         })
         return { ...state, userBoards: updatedUserBoards }
      }

      case ACTIONS.ADDTASK: {
         console.log(action, ' : action')
         const updatedUserBoards = state.userBoards.map((item, index) => {
            if (index !== action.index) {
               return item
            } else {
               // return { ...item, ...item.tasksCollumn, ...item[index].tasksCollumn.tasks: [] }
               const newTask = item.tasksCollumn.map((collumn, collumnIndex) => {
                  if (collumnIndex !== action.collumnIndex) {
                     return collumn
                  } else {
                     return { ...collumn, tasks: [...collumn.tasks, action.task] }
                  }
               })
               return { ...item, tasksCollumn: newTask }
            } 
         })
         return {...state, userBoards: updatedUserBoards}
      }

      // ----- ADD BOARD ----- // 

      case ACTIONS.ADDBOARD: {

         const newBoard = action.value;

         console.log('newBoard :', newBoard, typeof newBoard);
         // console.log('userrBoards', state.userBoards, 'type of' , Array.isArray(state.userBoards)  );
         return { ...state, userBoards: [...state.userBoards, newBoard] }

      }
   }
}

export { ACTIONS, reducer, userDefaultState };
export const State = createContext(userDefaultState)
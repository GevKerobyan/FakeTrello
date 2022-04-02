import { createUseStyles } from 'react-jss'

const collumnStyles = createUseStyles({

   collumnWrap: {
      position:'relative',
      width: '300px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      backgroundColor: 'rgb(240,242,245)',
      minHeight: '60vh',
      height: 'auto',
      overflow: 'hidden',
      borderRadius: '25px',
      padding: '20px',
      margin: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
   },

   collumnTitle: {
      width: '100%',
   },

   taskInputWrap:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid red',
   },

   taskInput:{
      margin: '15px 10px',
      height: '15px',
      padding: '15px 15px',
      border: 'none',
      backgroundColor: 'none',
      borderRadius: '5px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      color: 'rgb(32, 33, 66)',
   },


   taskInputButton:{
      height: '30px',
      width: '30px',
      padding: '5px 5px',
      border: 'none',
      backgroundColor: 'none',
      borderRadius: '5px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      color: 'rgb(32, 33, 66)',
      display: 'flex',
      fontSize: '28px',
      justifyContent: 'center',
      alignItems: 'center',
   },

   taskList: {
      display: 'flex',
      flexDirection:'column',
      width: '100%',
      fontSize: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '15px 10px',
      padding: '10px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      borderRadius: '15px',
   },

   tasksWrap: {
      width: '100%',
      height: 'auto',
      padding: '10px',
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
   },

   singleTask: {
      boxShadow: '1px 1px 2px rgb(32, 33, 66)',
      margin:'10px 0',
      width: '100%',
      borderRadius: '4px',
      padding: '5px 5px',

   }

})

export { collumnStyles }
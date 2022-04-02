import { createUseStyles } from 'react-jss'

const boardItemStyles = createUseStyles({
   collumnPage: {
      padding: '0 100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

   taskWrapper: {
      width: 'calc(100vw - 200px)',
      minHeight: '50vh',
      padding: ' 50px 50px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      backgroundColor: 'rgb(240,242,245)',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      flexWrap: 'wrap',
      borderRadius: '10px',

   },

   boardItemInputWrap: {
      width: '30%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',  
   },

   collumnNameInput: {
      margin: '30px',
      height: '25px',
      padding: '20px 15px',
      border: 'none',
      backgroundColor: 'none',
      borderRadius: '5px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
   },

   collumnNameButton: {
      width: '100px',
      height: '40px',
      border: 'none',
      backgroundColor: 'none',
      borderRadius: '5px',
      transform: 'translateX(-50%)',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      fontSize: '20px',
   }

})

export { boardItemStyles };
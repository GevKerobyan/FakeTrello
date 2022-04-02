import { createUseStyles } from 'react-jss'

const useBoardsStyles = createUseStyles({
   boardsPage: {
      width: '100vw',
      minHeight: '100vh',
      padding: '100px 100px',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'rgb(240,242,245)',
   },

   boardsLeft: {
      minWidth: '300px',
      width: '30%',
      minHeight: '400px',
      height: 'auto',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '10px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)'

   },

   boardsCreateInputWrap: {
      display: 'flex',
      paddingBottom: '40px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderBottom: '1px solid crimson',
   },

   createBoardLabel: {
      textTransform: 'capitalize',
      textShadow: '0.5px 0.5px 0.5px rgb(32, 33, 66)'
   },

   inputLowerWrap: {
      width: '100%',
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'space-between',
   },

   createBoardInput: {
      height: '25px',
      width: '200px',
      borderRadius: '5px',
      border: 'none',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)'
   },

   createBoardButton: {
      width: '25px',
      height:'25px',
      borderRadius: '5px',
      marginLeft: '15px',
      border: 'none',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)'
   },

   profWrapper: {
      width: '90%',
      height: '95%',
      margin: '5%',
      padding: '20px 0',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
   },

   avatarContainer: {
      width: '40%',
      backgroundColor: 'inherit',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20px',
      overflow: 'hidden',
   },

   avatarImg: {
      width: '100%',
      height: 'auto',
   },

   boardsRight: {
      minWidth: '500px',
      width: '65%',
      backgroundColor: 'crimson',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      borderRadius: '10px',
    
   }
})


export { useBoardsStyles };
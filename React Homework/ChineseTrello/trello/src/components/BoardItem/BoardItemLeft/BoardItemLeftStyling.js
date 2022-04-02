import { createUseStyles } from 'react-jss'

const useBoardItemLeftStyles = createUseStyles({
   itemWrapper: {
      width: '90%',
      height: '40px',
      marginLeft: '5%',
      padding: '5px 15px',
      border: 'none',
      margin: '15px 0',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '5px',
   },
   text: {
      maxWidth: '60px',
   },
   profWrapper: {
      width: '90%',
      backgroundColor: 'red',
   },

   avatar: {
      backgroundColor: 'red',
   }
})

export { useBoardItemLeftStyles }
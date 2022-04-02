import { createUseStyles } from 'react-jss'
const useBoardItemRightStyles = createUseStyles({
   boardRightPage: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   itemContainer: {
      width: '200px',
      height: '150px',
      marginLeft: '5%',
      padding: '5px 15px',
      border: 'none',
      margin: '15px 0',
      boxShadow: '1px 2px 5px rgb(32, 33, 66)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      // backgroundColor: 'crimson',
   },

   

   text: {
      maxWidth: '60px',


   }
})

export { useBoardItemRightStyles }

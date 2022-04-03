import { createUseStyles } from 'react-jss'

const taskModal = createUseStyles({

   modalWrap: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '400px',
      padding:'30px 10px',
      backgroundColor: 'crimson',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'stretch',
   },

   modalInputWrap:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '30px',
      width: 'calc(100% - 20px)',
      backgroundColor: 'none',
      padding: '5px 10px',
   },

   modalInput: {
      width: '40%',
      height:'25px',
      border: 'none',
      boxSizing: 'border-box',
   },

   editButton:{
      height: '30px',
      width: '30px',
      boxShadow: '1px 1px 5px rgb(32, 33, 66)',
      },

   editIMG: {
      height: '15px',
      width: '15px',
   }
})

export default taskModal;
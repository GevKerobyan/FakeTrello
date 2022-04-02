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
   },

   modalInput: {
      width: '40%',
      height:'30px',
      border: 'none',
      boxSizing: 'border-box',
   }
})

export default taskModal;

import { createUseStyles } from 'react-jss'

const useHeaderStyles = createUseStyles({
   headerPage: {
      position: 'absolute',
      width: '100vw',
      height: '50px',
      display: 'flex',
      padding: '10px 100px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(32, 33, 66, 0.4)',
      fontSize: '20px',
      fontWeight: 'bold',
   }
})

export { useHeaderStyles };
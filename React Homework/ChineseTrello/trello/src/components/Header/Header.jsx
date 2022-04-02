// import './Header.js'
import { useHeaderStyles } from './HeaderStyling'
import useUserContext from '../../components/Hooks/useUserContext.js'


function Header() {
  const { userState, userDispatch } = useUserContext()
  const HeaderStyles = useHeaderStyles()
  return (
    <div className={HeaderStyles.headerPage}> barev  </div> /* {`Good morning ${userState.userInfo.userName}`} */
    
  )
}

export default Header
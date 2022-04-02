import useUserContext from "../../Hooks/useUserContext"
import { useBoardItemLeftStyles } from "./BoardItemLeftStyling";
import profilePic from '../../../Assets/profilePic.png'

function BoardItemLeft({ item }) {
  const { userState, userDispatch } = useUserContext();
  const boardItemLeftStyle = useBoardItemLeftStyles();
// console.log(userState, 'in BoardItem')
  return (
    <div className={boardItemLeftStyle.profWrapper}>
      <div className={boardItemLeftStyle.avatar}>
        <img src={profilePic} alt="" />
        a de vay
      </div>

    </div>
  )
}

export default BoardItemLeft
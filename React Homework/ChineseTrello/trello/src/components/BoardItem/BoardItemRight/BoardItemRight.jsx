import { Link } from "react-router-dom";
import { useBoardItemRightStyles } from "./BoardItemRightStyling";


function BoardItemRight({item, index}) {

  const boardItemRightStyle = useBoardItemRightStyles()
  
  console.log(item, 'item in')


  return (
    <Link to='/board/js' state={{item, index}} className={boardItemRightStyle.boardRightPage}>
      <div className={boardItemRightStyle.itemContainer}>

        <div className=''>{item.boardName}</div>

      </div>
    </Link>
  )
}

export default BoardItemRight
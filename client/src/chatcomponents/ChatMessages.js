import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/user";
import { setRoomValue } from "../redux/room";

function ChatMessages({message, messageId}) {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);
  // console.log("Current User Message:", currentUser.data.id)
  // console.log("current message", messageId)

  function whichUser () {
    if (parseInt(messageId) === parseInt(currentUser.data.id)) {
        return 'each-message'
    } else {
        return 'other-message'
    }
}

  return (
    <div className="user-message-div">
      <div className={whichUser()}>
          {message}
      </div>
    </div>
  )
}

export default ChatMessages
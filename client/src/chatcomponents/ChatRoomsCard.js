import { React, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/user";
import { setRoomValue } from "../redux/room";

function ChatRoomsCard({room, showRoom, setCurrentRoomMessages, title, setTitle}) {
  
  const dispatch = useDispatch();
  const currentRoomGlobal = useSelector((state => state.room.value))
  // console.log("current room global :", currentRoomGlobal)


  function handleRoom () {
    // console.log(" this room clicked " , room)
        // console.log("Kit was clicked", kit)
    fetch(`/rooms/${room.id}`)
    .then(resp => resp.json())
    .then(roomData => {
        // console.log("room data messages fetched:", roomData.data.attributes.messages);
        // console.log("room data fetched:", roomData.data.attributes)
        // setCurrentRoomMessages(roomData.data.attributes.messages);
        // showRoom(roomData.data);
        dispatch( 
          setRoomValue({
            room: roomData.data,
            users: roomData.data.attributes.users,
            messages: roomData.data.attributes.messages 
       }));
      setTitle(roomData.data.attributes.name)
    })
  }

    return (
    <h6 className="room-name-header" onClick={handleRoom}>
       {room.attributes.name}
    </h6>
  )
}

export default ChatRoomsCard
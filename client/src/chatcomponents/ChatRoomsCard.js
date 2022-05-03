import { React, useEffect, useState, useRef } from "react";

function ChatRoomsCard({room, showRoom, setCurrentRoomMessages}) {
  
  function handleRoom () {
    // console.log(" this room clicked " , room)
        // console.log("Kit was clicked", kit)
    fetch(`/rooms/${room.id}`)
    .then(resp => resp.json())
    .then(roomData => {
        // console.log("room data messages fetched:", roomData.data.attributes.messages);
        // console.log("room data fetched:", roomData.data)
        // // setBeatsInKit();
        setCurrentRoomMessages(roomData.data.attributes.messages);
        showRoom(roomData.data)
    })
  }

    return (
    <h5 className="room-name-header" onClick={handleRoom}>
       {room.attributes.name}
    </h5>
  )
}

export default ChatRoomsCard
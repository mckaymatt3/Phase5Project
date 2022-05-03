import { React, useEffect, useState, useRef } from "react";
import ChatRoomsCard from "./ChatRoomsCard";

function ChatRooms({allRooms, setAllRooms, showRoom, setCurrentRoomMessages}) {

    const mapRooms = allRooms.map((room) => {
        return (
            // console.log("room:", room)
            // console.log("room:", room.attributes.name)
            <ChatRoomsCard room={room} key={room.id} showRoom={showRoom} setCurrentRoomMessages={setCurrentRoomMessages} />
            // <a href="https://www.w3schools.com">{room.attributes.name}</a>
        )
    })
  
    return (
    <div>
        {/* want to be able to search all rooms and click on one to display data above */}
       {mapRooms}
    </div>
  )
}

export default ChatRooms
import { React, useEffect, useState, useRef } from "react";
import ChatRoomsCard from "./ChatRoomsCard";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../redux/user";
import { setRoomValue } from "../redux/room";

function ChatRooms({allRooms, setAllRooms, showRoom, setCurrentRoomMessages, title, setTitle}) {

    const currentUser = useSelector((state) => state.user.value);
    const mapRooms = allRooms.map((room) => {
        return (
            // console.log("room:", room)
            // console.log("room:", room.attributes.name)
            <ChatRoomsCard 
                room={room} 
                key={room.id} 
                showRoom={showRoom} 
                setCurrentRoomMessages={setCurrentRoomMessages} 
                title={title} 
                setTitle={setTitle} 
            />
            // <a href="https://www.w3schools.com">{room.attributes.name}</a>
        )
    })
  
    return (
    <div>
        {/* want to be able to search all rooms and click on one to display data above */}
       {currentUser.data && mapRooms}
    </div>
  )
}

export default ChatRooms
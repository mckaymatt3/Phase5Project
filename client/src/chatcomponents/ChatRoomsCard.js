import { React, useEffect, useState, useRef } from "react";

function ChatRoomsCard({room}) {
  
    return (
    <h5 className="room-name-header">
       {room.attributes.name}
    </h5>
  )
}

export default ChatRoomsCard
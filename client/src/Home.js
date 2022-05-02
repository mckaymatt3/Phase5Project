import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Chat from './chatcomponents/Chat';
import ChatRooms from './chatcomponents/ChatRooms';

function Home({user, setUser}) {
    const [allRooms, setAllRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([])
    const [currentRoomMessages, setCurrentRoomMessages] = useState([])


    useEffect (() => {
        // fetch('/users/{:id}')
        fetch('/rooms')
        .then(resp => resp.json())
        .then(roomsData => {
          console.log("Rooms brought in from backend:", roomsData.data)
            setAllRooms(roomsData.data);
            setCurrentRoom(roomsData.data[0]);
            setCurrentRoomMessages(roomsData.data[0].attributes.messages)
        })
    }, []);
    
    console.log("rooms in state:", allRooms)
    console.log("current room in state:", currentRoom)
    console.log("current messages in state:", currentRoomMessages)
    
    return ( 
        <div className="homepage">
            <div className="header"> 
                Header 
            </div>
            <div className="nav-bar">
                {/* NavBar */}
                <NavBar />
            </div>
            <div className="song-streaming">
                Song Streaming
            </div>
            <div className="chat-area">
                <Chat currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} user={user} setUser={setUser} currentRoomMessages={currentRoomMessages} setCurrentRoomMessages={setCurrentRoomMessages}/>
            </div>
            <div className="rooms-area">
                ChatRooms:
                <ChatRooms allRooms={allRooms} setAllRooms={setAllRooms} setCurrentRoom={setCurrentRoom}/>
            </div>
            {/* can maybe create a hidden area that shows other items like song statistics or something  */}
        </div>
     );
}

export default Home;
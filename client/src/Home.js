import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Chat from './chatcomponents/Chat';
import ChatRooms from './chatcomponents/ChatRooms';
import HouseLogo from './HouseLogo.png'
import MusicSearch from './musiccomponents/MusicSearch';

function Home({
    user, setUser, allRooms, setAllRooms, currentRoom, setCurrentRoom,  
    currentRoomMessages, setCurrentRoomMessages, showRoom}) {

    

    return ( 
        <div className="homepage">
            <div className="header"> 
                Header 
            </div>
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={HouseLogo} alt="logo" className="logo"></img>
                </div>

                <NavBar />

                <div className="rooms-area">
                ChatRooms:
                <ChatRooms 
                    allRooms={allRooms} 
                    setAllRooms={setAllRooms} 
                    setCurrentRoom={setCurrentRoom}
                    setCurrentRoomMessages={setCurrentRoomMessages}
                    showRoom={showRoom}
                />
                </div>
            </div>
            <div className="song-streaming">
                <MusicSearch />
            </div>
            <div className="chat-area">
                <Chat 
                    currentRoom={currentRoom} 
                    setCurrentRoom={setCurrentRoom} 
                    user={user} 
                    setUser={setUser} 
                    currentRoomMessages={currentRoomMessages} 
                    setCurrentRoomMessages={setCurrentRoomMessages}
                    showRoom={showRoom}
                />
            </div>
            {/* <div className="rooms-area">
                ChatRooms:
                <ChatRooms 
                    allRooms={allRooms} 
                    setAllRooms={setAllRooms} 
                    setCurrentRoom={setCurrentRoom}
                    setCurrentRoomMessages={setCurrentRoomMessages}
                    showRoom={showRoom}
                />
            </div> */}
            {/* can maybe create a hidden area that shows other items like song statistics or something  */}
        </div>
     );
}

export default Home;
import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Chat from './chatcomponents/Chat';
import ChatRooms from './chatcomponents/ChatRooms';
import HouseLogo from './HouseLogo.png'
import MusicSearch from './musiccomponents/MusicSearch';

function Home({
    user, setUser, allRooms, setAllRooms, currentRoom, setCurrentRoom,  
    currentRoomMessages, setCurrentRoomMessages, showRoom, cableApp}) {

    const [title, setTitle] = useState("Welcome to Aux chat");
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
      }, [])
    
    return ( 
        <div className="homepage">
            <div className="header"> 
                <div className="welcome-page-header-div">
                    {/* <h2 className="welcome-page-header"> ♯ Local. But HiDef. ♯ </h2>  */}
                    <h1 className="welcome-page-header"> PASS  THE  AUX. </h1> 
                </div>
            </div>
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={HouseLogo} alt="logo" className="logo"></img>
                </div>

                <NavBar user={user} setUser={setUser}/>

                <div className="rooms-area">
                <h5 className="room-header">ChatRooms:</h5>
                <ChatRooms 
                    allRooms={allRooms} 
                    setAllRooms={setAllRooms} 
                    setCurrentRoom={setCurrentRoom}
                    setCurrentRoomMessages={setCurrentRoomMessages}
                    showRoom={showRoom}
                    title={title}
                    setTitle={setTitle}
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
                    cableApp={cableApp}
                    title={title}
                    setTitle={setTitle}
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
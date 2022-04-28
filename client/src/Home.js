import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';

function Home() {
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
                Chat Area
            </div>
            <div className="type-area">
                Type Area
            </div>
            {/* can maybe create a hidden area that shows other items like song statistics or something  */}
        </div>
     );
}

export default Home;
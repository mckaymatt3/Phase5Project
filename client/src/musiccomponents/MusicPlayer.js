import React, { useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback"

function MusicPlayer({accessToken, trackUri}) {

    console.log("access token in player", accessToken)

    if (!accessToken) return null
    return ( 
        <SpotifyPlayer 
            token={accessToken}
            showSaveIcon
            uris={trackUri ? [trackUri] : []}
        /> 
    );
}

export default MusicPlayer;

import React, { useEffect } from 'react';

const CLIENT_ID="aa7545d077a24e4b9ac7a11c57e35045"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:4000/musicplayer";
const SPACE_DELIMITER = "%20";

const SCOPES=
[
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private", 
    "user-read-private", 
    "playlist-modify-private",
    "playlist-modify-public",
    "playlist-read-private",
    "streaming"
]

const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER)

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue);
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
  
    return paramsSplitUp;
};

// likely have to save that data to state/database for user to move around on website 

function MusicLogin () {
    useEffect(() => {
        if (window.location.hash) {
          const { access_token, expires_in, token_type } =
            getReturnedParamsFromSpotifyAuth(window.location.hash);
    
          localStorage.clear();
    
          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("tokenType", token_type);
          localStorage.setItem("expiresIn", expires_in);
        }
      });

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }

    return ( 
        <div className="login_container">
            <h1>Spotify Connect</h1>
            <button onClick={handleLogin}>Login to Spotify</button>
        </div> );
}

export default MusicLogin;
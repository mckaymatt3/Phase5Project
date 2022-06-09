import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import "../App.css"

const CLIENT_ID="aa7545d077a24e4b9ac7a11c57e35045"
const CLIENT_SECRET="05f735ece4ec4ecfb1a9310dd973adde"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
// const REDIRECT_URL_AFTER_LOGIN = "http://localhost:4000/musiclogin";
const REDIRECT_URL_AFTER_LOGIN = "https://chatappmatt.herokuapp.com/musiclogin";
const SPACE_DELIMITER = "%20";

const SCOPES=
[
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-private",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
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




function MusicLogin ({
  accessToken, 
  setAccessToken, 
  expiresIn, 
  setExpiresIn, 
  tokenType, 
  setTokenType}) {
  
  useEffect(() => {
        if (window.location.hash) {
          const { access_token, expires_in, token_type } =
            getReturnedParamsFromSpotifyAuth(window.location.hash);
        
          // setAccessToken(access_token)
          // setTokenType(token_type)
          // setExpiresIn(expires_in)
            
          localStorage.clear();
    
          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("tokenType", token_type);
          localStorage.setItem("expiresIn", expires_in);
        }
      });

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }

    // console.log("Access Token Login:", accessToken)
    // console.log("Token Type Login:", tokenType)
    // console.log("Expires in Login:", expiresIn)

    console.log("local storage access:", localStorage)
    // console.log("local storage access:", localStorage.getItem(access_token))
    // console.log("Expires in Login:", expiresIn)

    return ( 
        <div className="login_container">
            <h1 className="spotify-connect-header">Spotify Connect</h1>
            <div className="spotify-spacing">
              <button onClick={handleLogin}>Login to Spotify</button>
            </div>
            <div className="spotify-spacing">
              {/* <a href="http://localhost:4000/">Get back to the homepage</a> */}
              <NavLink className="logged-in-welcome" to="/">  Get back to 🏠 Home 🏠 </NavLink>
            </div>
        </div> );
}

export default MusicLogin;
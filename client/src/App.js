import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "./redux/user";
import { setRoomValue } from "./redux/room";
import Home from "./Home.js"
import MusicLogin from "./musiccomponents/MusicLogin.js";
import Login from "./user/Login";
import Chat from "./chatcomponents/Chat.js";
import Signup from "./user/Signup"

function App({cableApp}) {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")
  const [login, setLogin] = useState("")
  const [isLoading, setIsLoading ] = useState(true)
  const [allRooms, setAllRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState()
  const [currentRoomMessages, setCurrentRoomMessages] = useState([])
  const [accessToken, setAccessToken] = useState("");
  const [tokenType, setTokenType] = useState("");  
  const [expiresIn, setExpiresIn] = useState(""); 

  // dispatch

  
  // let navigate = useNavigate();

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  
  useEffect (() => {
      // fetch('/users/{:id}')
      fetch('/rooms')
      .then(resp => resp.json())
      .then(roomsData => {
        // console.log("Rooms brought in from backend:", roomsData.data)
          setAllRooms(roomsData.data);
          // setCurrentRoom(roomsData.data[0]);
          // setCurrentRoomMessages(roomsData.data[0].attributes.messages)
      })
  }, []);

  function showRoom (showThisRoom) {
    // create const to check find and not include twice
    // console.log("show this room", showThisRoom)
    const checkMyRooms = allRooms.find(function(room){
      return room.id === showThisRoom.id
    })
    // console.log("check my rooms", checkMyRooms)
    if (checkMyRooms) {
    return setCurrentRoom([showThisRoom])
    }
  }  
  
  // console logs in APP

  // console.log("current room in state:", currentRoom)
  // console.log("current room messages:", currentRoomMessages )  
  // console.log("Access Token App:", accessToken)
  // console.log("Token Type App:", tokenType)
  // console.log("Expires in App:", expiresIn)
  console.log("user:", user)
  // console.log("local storage access:", localStorage)

  if(!user) {
    // console.log("not logged in")
    // console.log("login:", login)
    return <Login setIsLoading={setIsLoading} user={user} setUser={setUser} password={password} setPassword={setPassword} username={username} setUsername={setUsername} login={login} setLogin={setLogin} />
  }

  // const openChat = (room) => {
  //   navigate(`/rooms/${room.id}`);
  // };

  return (
    // <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setIsLoading={setIsLoading} user={user} setUser={setUser} password={password} setPassword={setPassword} username={username} setUsername={setUsername} login={login} setLogin={setLogin} />
          </Route>
          <Route path="/count">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route exact path="/">
            <Home 
              user={user} 
              setUser={setUser} 
              allRooms={allRooms} 
              setAllRooms={setAllRooms} 
              currentRoom={currentRoom} 
              setCurrentRoom={setCurrentRoom} 
              currentRoomMessages={currentRoomMessages} 
              setCurrentRoomMessages={setCurrentRoomMessages}
              showRoom={showRoom} 
              accessToken={accessToken} 
              setAccessToken={setAccessToken} 
              expiresIn={expiresIn} 
              setExpiresIn={setExpiresIn} 
              tokenType={tokenType} 
              setTokenType={setTokenType}
              cableApp={cableApp}
              />
          </Route>
          {/* need to put route below into rooms */}
          <Route
            exact
            path="/rooms/:id"
            // element={user ? <ChatScreen cableApp={cableApp} /> : navigate("/")}
          />
          <Route path="/musiclogin">
            <MusicLogin user={user} setUser={setUser} accessToken={accessToken} setAccessToken={setAccessToken} expiresIn={expiresIn} setExpiresIn={setExpiresIn} tokenType={tokenType} setTokenType={setTokenType}/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;

import { React, useEffect, useState, useRef } from "react";
import InputEmoji from "react-input-emoji";
import ChatMessages from "./ChatMessages";
import ChatWebSocket from "../ChatWebSocket";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/user";
import { setRoomValue } from "../redux/room";



function Chat({currentRoom, setCurrentRoom, user, setUser, currentRoomMessages, setCurrentRoomMessages, cableApp, title, setTitle}) {
    const [newMessage, setNewMessage] = useState("");
    const [currentDiv, setCurrentDiv] = useState("create-chat-hidden");
    const [currentButton, setCurrentButton] = useState("New");
    const [placeholderInput, setPlaceholderInput] = useState("Type in name here...");
    const [newRoom, setNewRoom] = useState("")
    const [messageContainer, setMessageContainer] = useState("first-message-container")

    const dispatch = useDispatch();
    const currentRoomGlobal = useSelector((state => state.room.value))
    // console.log("current room global :", currentRoomGlobal)
    const currentUser = useSelector((state) => state.user.value);
    const roomCheck = currentRoomGlobal.room.attributes ? 
      ""
      : 
      <div className="welcome-parent-div"> 
        <h1 className="welcome-1">Welcome</h1>
        <h1 className="welcome-2">To</h1>
        <h1 className="welcome-3">Aux</h1>
        <h1 className="welcome-4">Chat</h1>
      </div>

      function showDiv () {
        // console.log("currentDiv:", currentDiv)
        if (currentDiv === "create-chat-hidden")
          return setCurrentDiv("create-chat-show")
        else
          return setCurrentDiv("create-chat-hidden") 
      }

      function checkScroll () {
        if (currentRoomGlobal.room.attributes)
          return setMessageContainer("message-container")
        else 
          return setMessageContainer("first-message-container")
      }
    

    const handleSubmit = (event) => {
      event.preventDefault();  
      const message = {
          body: newMessage,
          user_id: parseInt(currentUser.data.id),
          room_id: parseInt(currentRoomGlobal.room.id),
        //   sender_name: currentUser.username
        };
        // console.log("message", message);
        fetch('/messages', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({           
            body: newMessage,
            user_id: parseInt(currentUser.data.id),
            room_id: parseInt(currentRoomGlobal.room.id), 
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            //  alert("done done");
            // update messages on screen - with state

            // start();
          });
          setNewMessage(" ")
    };

    const handleRoomSubmit = (event) => {
      event.preventDefault();  
        console.log("clicked submit")
        console.log("new Room", newRoom);
        console.log("currentUser", currentUser)
        fetch('/rooms', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({           
            name: newRoom,
            user_id: currentUser.data.id
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("result", result)
          });
          setNewRoom(" ")
          window.location.reload()
    };

    function handleChange(event) {
        // console.log(event.target.value)
        setNewMessage(event.target.value);
    }

    function handleChangeTwo(event) {
      // console.log(event.target.value)
      setNewRoom(event.target.value)
    }

    console.log(messageContainer)

    // // map messages
    const myMessages = currentRoomGlobal.messages.map(function(message) {
        // console.log("my messages user: ", message)
        return <ChatMessages key={message.id} message={message.body} messageId={message.user_id} />
    })

  return (
    <div className="chatroom-parent">
      {roomCheck}
        <div>
          <button className="button-show-form" disabled={!user.data} onClick={() => showDiv()}>{currentButton}</button>
           <div className={currentDiv}>
            <div className="create-form-parent-div">
              <label className="form-create-chat-label">Create A New Chat</label>
            </div>
            <div className="create-form-parent-div">
              <input className="form-create-chat-input" onChange={handleChangeTwo} value={newRoom} placeholder={placeholderInput}></input>
            </div>
            <div className="create-form-parent-div">
              <button className="main-button-style" variant="primary" type="submit" onClick={handleRoomSubmit}>
                Submit
              </button>
            </div>
           </div>
        </div>
        <div className={messageContainer}>
            {myMessages}
        </div>
        <form className="add-chat-form" onSubmit={handleSubmit}>
            <label className="chat-label"> Chat: 
                <input type="text" name="name" placeholder="Drop a chat..." value={newMessage} onChange={handleChange} />      
            </label>
            <input className="submit-button" type="submit" />
        </form>
      <ChatWebSocket cableApp={cableApp} currentRoomGlobal={currentRoomGlobal} currentRoomGlobalId={currentRoomGlobal.room.id} />
    </div>

  )
}

export default Chat
import { React, useEffect, useState, useRef } from "react";
import InputEmoji from "react-input-emoji";
import ChatMessages from "./ChatMessages";
import ChatWebSocket from "../ChatWebSocket";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/user";
import { setRoomValue } from "../redux/room";


function Chat({currentRoom, setCurrentRoom, user, setUser, currentRoomMessages, setCurrentRoomMessages, cableApp}) {
    const [newMessage, setNewMessage] = useState("");

    const dispatch = useDispatch();
    const currentRoomGlobal = useSelector((state => state.room.value))
    console.log("current room global :", currentRoomGlobal)

    useEffect(() => {
    //   console.log(currentRoom[0].id)
      const id = currentRoom[0].id
      fetch(`/rooms/${id}`)
        .then((response) => response.json())
        .then((result) => {
          console.log("rooms data", result)
          dispatch(setRoomValue(result.data));
        })
      }, []);
  
    
  // console.log("current room id", currentRoom[0].id)

    const handleSubmit = (event) => {
      event.preventDefault();  
      const message = {
          body: newMessage,
          user_id: parseInt(user.data.id),
          room_id: parseInt(currentRoom[0].id),
        //   sender_name: currentUser.username
        };
        console.log("message", message);
        fetch('/messages', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({           
            body: newMessage,
            user_id: parseInt(user.data.id),
            room_id: parseInt(currentRoom[0].id), 
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            alert("done done");
            // update messages on screen - with state

            // start();
          });
    };

    function handleChange(event) {
        // console.log(event.target.value)
        setNewMessage(event.target.value);
    }

    //if we want to add in sound below and fire off sound in the handle submit above
    // let recieveSound = new Audio("/whatsAppSound.mp3");

    // const start = () => {
    //   recieveSound.play();
    // };


    // console.log(currentRoomMessages)
    function checkTheseMessages() {
      const myMessages = currentRoomMessages.map(function(message) {
        // console.log("my messages: ", message)
        return <ChatMessages key={message.id} message={message.body} />
    }) 
      if (myMessages) {
        return myMessages
      }
      else {
        <p>Hop in one of these chats bruv...</p>
      } 
    }
    // map messages
    const myMessages = currentRoomMessages.map(function(message) {
        // console.log("my messages: ", message)
        return <ChatMessages key={message.id} message={message.body} />
    })

    // make ternary for first display
    // console.log("currentRoom:", currentRoom.attributes.name)

    function checkThisChat () {
        if (currentRoom)
            return <h2 className="chat-header-name">{currentRoom[0].attributes.name}</h2>
        else {
            return <h3 className="intro-message"> Fire up that chat. </h3>
        }
    }

  // console.log(currentRoom[0].attributes.name)

  return (
    <div className="chat-area">
        <div className="chat-header">
            {checkThisChat()}
        </div>
        <div className="message-container">
            {/* {myMessages} */}
            {checkTheseMessages()}
        </div>
        <form className="add-chat-form" onSubmit={handleSubmit}>
            <label className="chat-label"> Chat: 
                <input type="text" name="name" placeholder="Drop a chat..." onChange={handleChange} />      
            </label>
            <input className="submit-button" type="submit" />
        </form>
      {/* <ChatWebSocket cableApp={cableApp} /> */}
    </div>

  )
}

export default Chat
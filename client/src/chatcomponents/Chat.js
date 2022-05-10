import { React, useEffect, useState, useRef } from "react";
import InputEmoji from "react-input-emoji";
import ChatMessages from "./ChatMessages";
import ChatWebSocket from "../ChatWebSocket";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/user";
import { setRoomValue } from "../redux/room";


function Chat({currentRoom, setCurrentRoom, user, setUser, currentRoomMessages, setCurrentRoomMessages, cableApp, title, setTitle}) {
    const [newMessage, setNewMessage] = useState("");

    const dispatch = useDispatch();
    const currentRoomGlobal = useSelector((state => state.room.value))
    // console.log("current room global :", currentRoomGlobal)
    const currentUser = useSelector((state) => state.user.value);
    // console.log("currentUser", currentUser)
    // console.log("current room global :", currentRoomGlobal)
    // console.log("current room global messages: ", currentRoomGlobal.attributes.messages)

    // useEffect(() => {
    // //   console.log(currentRoom[0].id)
    //   const id = currentRoom[0].id
    //   fetch(`/rooms/${id}`)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log("rooms data", result)
    //       dispatch(setRoomValue(result.data));
    //     })
    //   }, []);
  
    
    
  // console.log("current room id", currentRoom[0].id)

    const handleSubmit = (event) => {
      event.preventDefault();  
      const message = {
          body: newMessage,
          user_id: parseInt(currentUser.data.id),
          room_id: parseInt(currentRoomGlobal.room.id),
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
            user_id: parseInt(currentUser.data.id),
            room_id: parseInt(currentRoomGlobal.room.id), 
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            alert("done done");
            // update messages on screen - with state

            // start();
          });
          setNewMessage(" ")
    };

    function handleChange(event) {
        console.log(event.target.value)
        setNewMessage(event.target.value);
    }

    //if we want to add in sound below and fire off sound in the handle submit above
    // let recieveSound = new Audio("/whatsAppSound.mp3");

    // const start = () => {
    //   recieveSound.play();
    // };


    // // console.log(currentRoomMessages)
    // const myMessages = currentRoomGlobal.attributes.messages.map(function(message) {
    //     return  <ChatMessages key={message.id} message={message.body} />
    // })
    
    // function checkTheseMessages() {
    //   if (myMessages) {
    //      return myMessages
    //   }
    //   else {
    //     <p>Hop in one of these chats...</p>
    //   } 
    // }


    //   if (myMessages) {
    //     return myMessages
    //   }
    //   else {
    //     <p>Hop in one of these chats bruv...</p>
    //   } 
    // }
    // // map messages
    const myMessages = currentRoomGlobal.messages.map(function(message) {
        // console.log("my messages: ", message)
        return <ChatMessages key={message.id} message={message.body} />
    })

    // // // make ternary for first display
    // // // console.log("currentRoom:", currentRoom.attributes.name)

    // function checkThisChat () {
    //     if (currentRoomGlobal.attributes.name)
    //         // console.log(currentRoom)
    //         return <h2 className="chat-header-name">{currentRoomGlobal.attributes.name}</h2>
    //     else {
    //       // console.log(currentRoom)
    //         return <h3 className="intro-message"> Fire up that chat. </h3>
    //     }
    // }

  // console.log(currentRoom[0].attributes.name)

  return (
    <div className="chat-area">
        <div className="chat-header">
          <h2 className="chat-header-name">
            {title}
          </h2>
        </div>
        <div className="message-container">
            {myMessages}
            {/* {checkTheseMessages()} */}
            {/* {currentRoomMessages} */}
        </div>
        <form className="add-chat-form" onSubmit={handleSubmit}>
            <label className="chat-label"> Chat: 
                <input type="text" name="name" placeholder="Drop a chat..." value={newMessage} onChange={handleChange} />      
            </label>
            <input className="submit-button" type="submit" />
        </form>
      {/* <ChatWebSocket cableApp={cableApp} /> */}
    </div>

  )
}

export default Chat
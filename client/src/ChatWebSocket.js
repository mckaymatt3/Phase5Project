import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomValue } from "./redux/room";
import { setValue } from "./redux/user";
import { useLocation } from "react-router-dom";


function ChatWebSocket({ cableApp, currentRoomGlobal, currentRoomGlobalId }) {

  const dispatch = useDispatch();
  console.log("global", currentRoomGlobal)
  // console.log("id", currentRoomGlobalId)
//   const currentRoomGlobal = useSelector((state => state.room.value))
//   const currentRoomGlobalId = currentRoomGlobal.room.id
//   console.log("current room global id :", currentRoomGlobalId)
//   const currentUser = useSelector((state) => state.user.value);
  // console.log("currentUser", currentUser)

  const location = useLocation();

  function updateRoom (currentRoomGlobalId) {
    // console.log(" this room clicked " , room)
        // console.log("Kit was clicked", kit)
    fetch(`/rooms/${currentRoomGlobalId}`)
    .then(resp => resp.json())
    .then(roomData => {
        // console.log("room data messages fetched:", roomData.data.attributes.messages);
        // console.log("room data fetched:", roomData.data.attributes)
        // setCurrentRoomMessages(roomData.data.attributes.messages);
        // showRoom(roomData.data);
        dispatch( 
          setRoomValue({
            room: roomData.data,
            users: roomData.data.attributes.users,
            messages: roomData.data.attributes.messages 
       }));
    })
  }

//   const updateApp = (newRoom) => {
//     dispatch(setRoomValue(newRoom.room.data));
//   };

//   console.log("cableApp :", cableApp)

  useEffect(() => {
    // console.log(location);
    // getRoomData(window.location.href.match(/\d+$/)[0]);
    cableApp.room = cableApp.cable.subscriptions.create(
      {
        channel: "RoomsChannel",
        room: currentRoomGlobalId
      },
      {
        received: (updatedRoom) => {
          // console.log("updatedRoom", updatedRoom);
          updateRoom(currentRoomGlobalId);
        },
      }
    );
    //cableApp.room.perform("appear");
  }, []);

  return <div></div>;
}

export default ChatWebSocket;
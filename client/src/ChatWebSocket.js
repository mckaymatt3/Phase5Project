import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomValue } from "./redux/room";
import { setValue } from "./redux/user";
import { useLocation } from "react-router-dom";


function ChatWebSocket({ cableApp }) {

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.value);

  const location = useLocation();

//   const getRoomData = (id) => {
//     fetch(`http://localhost:3000/rooms/${id}`)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log("rooms data", result)
//         dispatch(setRoomValue(result.data));
//       });
//   };

  const getRoomData =  useEffect((currentRoom) => {
//   console.log(currentRoom[0].id)
        const id = currentRoom[0].id
        fetch(`/rooms/${id}`)
        .then((response) => response.json())
        .then((result) => {
            console.log("rooms data", result)
            dispatch(setRoomValue(result.data));
        })
    }, []);

  const updateApp = (newRoom) => {
    dispatch(setRoomValue(newRoom.room.data));
  };

  useEffect(() => {
    console.log(location);
    getRoomData(window.location.href.match(/\d+$/)[0]);
    cableApp.room = cableApp.cable.subscriptions.create(
      {
        channel: "RoomsChannel",
        room: window.location.href.match(/\d+$/)[0]
      },
      {
        received: (updatedRoom) => {
          console.log("updatedRoom", updatedRoom);
          updateApp(updatedRoom);
        },
      }
    );
    //cableApp.room.perform("appear");
  }, [location]);

  return <div></div>;
}

export default ChatWebSocket;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomValue } from "../redux/room";
import { useLocation } from "react-router-dom";


function RoomWebSocket({ cableApp }) {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);
  const location = useLocation();
  const getRoomData = (id) => {
    fetch(`http://localhost:3000/rooms/${id}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setRoomValue(result.data));
      });
  };
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

export default RoomWebSocket;
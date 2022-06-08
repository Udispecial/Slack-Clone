import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { doc, onSnapshot, collection } from "firebase/firestore";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      onSnapshot(doc(db, "rooms", roomId), (doc) => {
        setRoomDetails(doc.data());
      });
    }
    const q = collection(db, "rooms", roomId, "messages");
    onSnapshot(q, (snapshot) => {
      setRoomMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarOutlineIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map((message) => (
          <Message
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            userImage={message.userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;

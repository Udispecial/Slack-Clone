import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState(null);
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      const docRef = doc(db, "rooms", channelId);
      const colRef = collection(docRef, "messages");
      addDoc(colRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput("");
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName?.toLowerCase()}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;

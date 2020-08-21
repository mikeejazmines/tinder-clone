import React from "react";
import "./Chats.css";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="Labrador"
      message="Wuff" 
      timestamp="6 mins ago" 
      profilePic="https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
      />
      <Chat
      name="Shiba Inu"
      message="Bork" 
      timestamp="1 hr ago" 
      profilePic="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg"/>
      <Chat
      name="Corgi"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"/>
  </div>;
};

export default Chats;

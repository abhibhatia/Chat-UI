import logo from './logo.svg';
import './App.css';
import FilterText from './FilterText';
import React from 'react';
import OpenChat from './OpenChat';


const fetchChats = async () => {
    const response = await fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats");
    const data = await response.json();
    return data;
};

function App() {
  const [chatData, setChatData] = React.useState([]);
  const [openIndiChat, setOpenIndiChat] = React.useState(false);
  const [indiChatDetails, setIndiChatDetails] = React.useState({});
  fetchChats().then((data) => {
    setChatData(data);
  });
  return (
    <div>
      <FilterText entireChatData={chatData} setOpenIndiChat={setOpenIndiChat} setIndiChatDetails={setIndiChatDetails} />
      {openIndiChat && <OpenChat chatDetails = {indiChatDetails}/>}
    </div>
  );
}

export default App;

import React from 'react'
import './styles/chatPlaceholder.css';
import OpenChat from './OpenChat';

function ChatPlaceholder({ individualChatData, setStyle, setOpenIndiChat, setIndiChatDetails }) {
    const [chatBoxOpen, setChatBoxOpen] = React.useState(false);
    const boxOpenClickHandler = () => {
        setChatBoxOpen(true);
        setStyle('chat-half');
        setOpenIndiChat(true);
        setIndiChatDetails(individualChatData)
    }
    return (
        <div class={"chat-box"} onClick={boxOpenClickHandler} >
            <div className="line" />
            <div className="chat-details">
                <img className="product-image" src={individualChatData.imageURL} />
                <div className="placeholder-text-details">
                    <h4 className="product-heading" >
                        {individualChatData.title}
                    </h4>
                    <h5 className="product-orderId"> orderId : {individualChatData.orderId} </h5>
                </div>
                {individualChatData.latestMessageTimestamp}
            </div>
        </div>
    )
}

export default ChatPlaceholder

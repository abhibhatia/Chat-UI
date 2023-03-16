import React from 'react'
import ChatPlaceholder from './ChatPlaceholder';
import './styles/chatPlaceholder.css'

function DisplayChatList({ chatData, setOpenIndiChat, setIndiChatDetails }) {
    const [style, setStyle] = React.useState("chat-full");
    return (
        <div class={style}>
            {
                chatData.map((eachChat) => {
                    return (
                        <ChatPlaceholder individualChatData={eachChat} setStyle={setStyle} setOpenIndiChat={setOpenIndiChat} setIndiChatDetails={setIndiChatDetails} />
                    )
                })
            }
            <div class="line" />
        </div>

    )
}

export default DisplayChatList

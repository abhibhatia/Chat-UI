import React from 'react'
import './styles/indiChat.css'

function OpenChat({ chatDetails }) {

    console.log(chatDetails);
    return (
        <div class="indi-chat-box">
            <div class="header"> 

            </div>
            <div class="header-line"></div>
            <div class="message-box">

                <div class="no-msg-text">

                    <p>
                        Send a message to start chatting
                    </p>
                </div>
            </div>
            <div class="footer">
                <div class="header-line"></div>
            </div>
        </div>
    )
}

export default OpenChat

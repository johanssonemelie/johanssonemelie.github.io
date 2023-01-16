import React from 'react'
import '../chatBubble.css'

function ChatBubble({ text, last }) {
    return (
        <div>
            <div class="mine">
                {!last ? <div class="message">
                    {text}
                </div> : <div class="message last relative">
                {text}
                </div>}
            </div>
        </div>
    )
}

export default ChatBubble;
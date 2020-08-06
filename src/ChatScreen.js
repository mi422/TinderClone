import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar, Button } from '@material-ui/core';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Elon Musk",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
            message: "Hello",
        },
        {
            name: "Elon Musk",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
            message: "How you doing oumaima??",
        },
        {
            message: "Hi how are you",
        },
    ]);

     const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <h4>YOU MATCHED WITH ELON ON 05/08/2020</h4>
             {messages.map((message) => message.name ? (
                 <div className="chatScreen__message">
                     <Avatar className="chatScreen__image" 
                     alt={message.name} 
                     src={message.image} />
                     <p className="chatScreen__text">{message.message}</p>
                 </div>

             ) : (
                 <div className="chatScreen__message">
                 <p className="chatScreen__texty">{message.message}</p>
                 </div>
             ))}

            <form className="chatScreen__input">
                <input 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 className="chatScreen__inputFields"
                 placeholder="Type a message..."
                 type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__button"><h3>Send</h3></button>
            </form>
        </div>
    );
}

export default ChatScreen

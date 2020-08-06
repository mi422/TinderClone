import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
             name="Elon Musk"
             message="Hello"
             timestamp="20 minutes ago"
             profilePic="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
             />
            <Chat
             name="Jeff Bezos"
             message="Hii! how are you"
             timestamp="26 minutes ago"
             profilePic="https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
             />           
        </div>
    )
}

export default Chats

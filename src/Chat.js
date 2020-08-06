import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';
import { Link } from 'react-router-dom';

function Chat({ name, message, timestamp, profilePic }) {
    return (
    <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat__image" src={profilePic} />
            <div className="chat__detail">
                 <h3>{name}</h3>
                 <p>{message}</p>
            </div>
                  <p className="chat__time">{timestamp}</p>
        </div>
        </Link>
    );
}

export default Chat

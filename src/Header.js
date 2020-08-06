import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/Chat';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ BackButton }) {
  const history = useHistory();
    return (
        // BEM PS: learn naming classes later 
        <div className="header">
          { BackButton ? (
            <IconButton onClick={() => history.replace(BackButton)}>
              <ArrowBackIosIcon fontSize="large" className="header__icon" />
            </IconButton>
          ) : (
            <IconButton>
            <FaceIcon className="header__icon" fontSize="large" />
          </IconButton>
          )}          
            <img className="header__logo"
             src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
             alt="tinder logo" />
             <Link to="/chat">
           <IconButton>
             <ChatIcon className="header__icon" fontSize="large" />
           </IconButton>
             </Link>
        </div>
    )
}

export default Header

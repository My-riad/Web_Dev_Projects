import React from "react"
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail'; 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton} from "@mui/material";
import {Link, useHistory} from "react-router-dom";

const Header = ({ backButton }) =>
{
    const history = useHistory();
    return  (
    <div className = "header">
        {backButton? (
            <IconButton onClick={() => history.replace(backButton)}>
                 <ArrowBackIosNewIcon className="header__icon" fontSize="large"/>
            </IconButton>
        ):(
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
        )}
        <Link to="/">
            <img
            className="header__logo"
            src="https://penmenpress.com/wp-content/uploads/2018/04/Tinder-Logo.png"
            alt = "Comradery Logo"/>
        </Link>
        <Link to="/chat">
            <IconButton>
                <MailIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </Link>
        
    </div>
    );
}

export default Header;
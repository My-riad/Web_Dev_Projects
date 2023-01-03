import React from "react";
import Chat from './Chat';
import './Chats.css'

function Chats()
{
    return(
        <div className="chats">
            <Chat
                name="Angela Basset"
                message= "How are you doing, young man?"
                timeStamp="2 hours ago"
                profilePic="https://media.glamour.com/photos/6351ed32c5b942e226a4f673/master/w_1920,c_limit/220824_S03_0053_220824_S03_0142_V1_RGBv2.jpg"
            />
            <Chat
                name="Keke Palmer"
                message= "Want to be in my next show??"
                timeStamp="12 minutes ago"
                profilePic="https://deadline.com/wp-content/uploads/2017/09/keke-palmer.jpg?w=681&h=383&crop=1"
            />
            <Chat
                name="Chloe Bailey"
                message= "All I want for christmas is you"
                timeStamp="1 minute ago"
                profilePic="https://www.aceshowbiz.com/display/images/photo/2021/11/13/00180087.jpg"
            />
            <Chat
                name="Salma Hayek"
                message= "How'd you like my movie?"
                timeStamp="3 hours ago"
                profilePic="https://www.stellaadler.com/wp-content/uploads/2015/08/salma-hayek-2-1.jpg"
            />
        </div>
        
    );
}

export default Chats;
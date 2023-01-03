import React, {useState} from 'react'
import './ChatScreen.css'
import Avatar from "@mui/material/Avatar"


function ChatScreen()
{
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:'Angela',
            image: 'https://media.glamour.com/photos/6351ed32c5b942e226a4f673/master/w_1920,c_limit/220824_S03_0053_220824_S03_0142_V1_RGBv2.jpg',
            message: "Hi"
        },
        {
            name:'Angela',
            image: 'https://media.glamour.com/photos/6351ed32c5b942e226a4f673/master/w_1920,c_limit/220824_S03_0053_220824_S03_0142_V1_RGBv2.jpg',
            message: "How's it going young man?"
        },
        {
            message: "Heyyy Auntie"
        }
    ]);

    const handleSend = e => 
    {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className='chatScreen__timestamp'>YOU MATCHED WITH ANGELA ON 12/31/22</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar
                    className='chatScreen__image'
                    alt={message.name}
                    src={message.image}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )
            ))}

            <form className='chatScreen__input'>
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className='chatScreen__inputField' 
                placeholder='Type a message...' 
                type="text"/>
                <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>

    );
}

export default ChatScreen;
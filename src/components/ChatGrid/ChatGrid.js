import React from 'react';
import { Button, Input } from 'semantic-ui-react'
import MessageList from "../MessageList/MessageList"
import './ChatGrid.css';

export default function ChatGrid() {
    const time = new Date()
    const messageList = [
        { id: 1, type: 'bot', time: time.toLocaleTimeString(), text: "What are you doing?"},
        { id: 2, type: 'user', time: time.toLocaleTimeString(), text: "I`m going to my home!"},
        { id: 1, type: 'bot', time: time.toLocaleTimeString(), text: "Oh, will you have a vacation?"},
        { id: 2, type: 'user', time: time.toLocaleTimeString(), text: "Yes! I was really looking forward to this vacation."},
    ]

    // scrollToBottom = () => {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    // }

    return (
        <div className="chatOuterBox">
            <div className="chatInnerBox">
                <main className="chatRoom">
                    <div className="dateSection">
                        <span>{time.toLocaleTimeString()}</span>
                    </div>
                    <MessageList messageList={messageList}/>
                    {/* <div style={{float:'left', clear:'both', height:'80px'}} ref={(el) => { this.messagesEnd = el; }}></div> */}
                </main>
                <div className="textInputBox">
                    <div className="textInputBoxInput">
                        <Input fluid type='text' placeholder='Type...' action>
                            <input style={{marginLeft:'3px'}} />
                            <Button type='submit' size='big' style={{width:'10%', paddingLeft:'3%', fontSize:'20px'}}>Send</Button>
                        </Input>
                    </div>
                </div>
            </div>
        </div>
    );
}
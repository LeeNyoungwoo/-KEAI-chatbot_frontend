import React, { Component } from 'react';
import Message from "./Message"

export default class MessageList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { messageList } = this.props;
        
        // render whole messages during conversation
        const messages = messageList.map(
            ({id, type, time, text}, i) => (
                <div key={i}>
                    <Message
                        id={id}
                        type={type}
                        time={time}
                        text={text}
                    />
                </div>
            )
        );

        return (
            <div>
                {messages}
            </div>
        );
    }
}
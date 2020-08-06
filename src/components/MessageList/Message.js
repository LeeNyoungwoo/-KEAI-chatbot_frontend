import React, { Component } from 'react';
import loading from './loading.gif'
import './Message.css';

export default class Message extends Component {
    render() {
        const { type, time, text } = this.props;
            return (
            <div>
                {
                    (() => {
                        if (type === 'system') 
                            return (<div className="messageSectionSystem">
                                        <span style={{fontWeight: "bold", whiteSpace: 'pre-wrap'}}>{text}</span>
                                    </div>);
                        if (type === 'bot')
                            return  (<div className="messageSection messageSectionBot">
                                        <span className="messageSectionBody">{text}</span>
                                        <span className="messageSectionTime">{time}</span>
                                    </div>);
                        if (type === 'user')
                            return (<div className="messageSection messageSectionUser">
                                        <span className="messageSectionTime">{time}</span>
                                        <div className="messageSectionCenter">
                                            <span className="messageSectionBody">{text}</span>
                                        </div>
                                    </div>);
                        if (type === 'loading')
                            return (<div className="messageSection messageSectionUser">
                                        <div className="messageSectionCenter">
                                            <span className="messageSectionBody"><img src={loading} alt="Bot"/></span>
                                        </div>
                                    </div>);
                    })()
                }
            </div>
        );
    }
}
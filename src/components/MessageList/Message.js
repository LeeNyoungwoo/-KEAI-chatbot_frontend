import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import './Message.css';

export default class Message extends Component {
    render() {
        const { type, time, text, img, src } = this.props;
        console.log(img)
        return (
            <div>
                {
                    (() => {
                        if (type === true)
                            return  (<div className="messageSection messageSectionBot">
                                        <span className="messageSectionBody">{text}</span>
                                        <span className="messageSectionTime">{time}</span>
                                    </div>);
                        if (type === false && img === true)
                            return (<div className="messageSection messageSectionUser">
                                        <span className="messageSectionTime">{time}</span>
                                        <div className="messageSectionCenter">
                                            <Image style={{width: '40vh', height: 'auto', paddingLeft:'1vw', paddingRight: '2vw'}} src={src}/>
                                        </div>
                                    </div>);
                        if (type === false && img === false)
                            console.log(img)
                            return (<div className="messageSection messageSectionUser">
                                        <span className="messageSectionTime">{time}</span>
                                        <div className="messageSectionCenter">
                                            <span className="messageSectionBody">{text}</span>
                                        </div>
                                    </div>);
                    })()
                }
            </div>
        );
    }
}
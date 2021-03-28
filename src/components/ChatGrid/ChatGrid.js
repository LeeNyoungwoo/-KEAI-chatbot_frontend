import React, { useEffect, useRef } from 'react'
import { Button, Input } from 'semantic-ui-react'
import MessageListContainer from "../../containers/MessageListContainer"
import ImgModal from "./ImgModal";
import './ChatGrid.css';

let bot_turn = 0;

export default function ChatGrid(props) {
    const bot_utterances = [
        {
            type: true,
            text: "잘했어 . 아이들이랑 뭐하고 놀아 ?",
        },
        {
            type: true,
            text: "재밌겠다 . 그들이 좋아하니 ?",
        },
        {
            type: true,
            text: "나도 한 번 해 볼게",
        },
        {
            type: true,
            text: "응 그래 .",
        }
    ]

    const bot_emotions = [
        {
            text: "잘했어 . 아이들이랑 뭐하고 놀아 ?",
            happiness: 9,
            sadness: 12,
            neutral: 79,
        },
        {
            text: "재밌겠다 . 그들이 좋아하니 ?",
            happiness: 72,
            sadness: 3,
            neutral: 25,
        },
        {
            text: "나도 한 번 해 볼게",
            happiness: 11,
            sadness: 11,
            neutral: 78,
        },
        {
            text: "응 그래 .",
            happiness: 2,
            sadness: 0,
            neutral: 98,
        }
    ]


    const time = new Date()
    const [input, setInput] = React.useState('');
    const messagesEnd = useRef(null)

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleChangeText = (e) => {
        setInput(e.target.value)
    }

    const handleCreate = () => {
        const utterance = {
            type: props.turn,
            time: time.toLocaleTimeString(),
            text: input,
            img: false,
        }

        if (props.turn === true){
            props.conv_addBotInfo(bot_emotions[bot_turn])
            props.conv_chatAdd(bot_utterances[bot_turn])
            bot_turn += 1
        } else{
            props.conv_chatAdd(utterance)
        }

        props.conv_changeTurn()
        setInput('')
        scrollToBottom()
    }

    const handleKeyPress = (e) => {
        if(input !== '' && e.key === 'Enter') {
            handleCreate();
        }
    }

    useEffect(scrollToBottom, [props.chatList]);

    return (
        <div className="chatOuterBox">
            <div className="chatInnerBox">
                <main className="chatRoom">
                    <div className="dateSection">
                        <span>{time.toLocaleTimeString()}</span>
                    </div>
                    <MessageListContainer />
                    <div style={{height:'2vh'}}></div>
                    <div ref={messagesEnd} />
                </main>
                <div className="textInputBox">
                    <div className="textInputBoxInput">
                        <Input fluid type='text' placeholder='Type...' action>
                            <input style={{marginLeft:'3px'}} value={input} onChange={handleChangeText} onKeyPress={handleKeyPress}/>
                            <Button onClick={handleCreate} type='submit' size='big' style={{width:'12%', paddingLeft:'4%', fontSize:'2vh'}}>
                                Send
                            </Button>
                            <ImgModal 
                                conv_chatAdd={props.conv_chatAdd}
                                conv_changeTurn={props.conv_changeTurn}
                            />
                        </Input>
                    </div>
                </div>
            </div>
        </div>
    );
}
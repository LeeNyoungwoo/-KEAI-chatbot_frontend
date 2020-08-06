import { createAction, handleActions } from 'redux-actions'

const TURN = 'chat/TURN' // 대화 턴 변경
const BOT_UT = 'chat/BOT_UT' // 봇 발화 추가
const USER_UT = 'chat/USER_UT' // 유저 발화 추가
const RESET_DATA = 'result/RESET' // 데이터 초기화

let bot_id = 0
let user_id = 0

export const changeTurn= createAction(TURN)
export const botAdd = createAction(BOT_UT, object => ({ object, bot_id: bot_id++ }))
export const userAdd = createAction(USER_UT, object => ({ object, user_id: user_id++ }))
export const resetData = createAction(RESET_DATA)


const initialState = {
    // bot=true, user=false
    turn: true,
    userList: [
        // Example DataType
        // {
        //     id: 0, 
        //     text: 'Hi, I'm chatbot',
        // },
    ],
    botList: [],
}

export default handleActions(
    {
        [TURN]: (state) => ({
            ...state,
            turn: !state.turn
        }),
        [BOT_UT]: (state, action) => ({
            ...state,
            botList: state.botList.concat({
                id: action.payload.bot_id,
                text: action.payload.object.text,
            })
        }),
        [USER_UT]: (state, action) => ({
            ...state,
            userList: state.botList.concat({
                id: action.payload.bot_id,
                text: action.payload.object.text,
            })
        }),
        [RESET_DATA]: (state) => ({
            ...state,
            turn: true,
            userList: initialState.userList,
            botList: initialState.botList,
        }),
    },
    initialState
)
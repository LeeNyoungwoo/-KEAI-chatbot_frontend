import React from 'react'

import LeftGrid from "../components/LeftGrid/LeftGrid"
import ChatGrid from "../components/ChatGrid/ChatGrid"
import RightGrid from "../components/RightGrid/RightGrid"
// import ChatGridContainer from "../containers/ChatGridContainer.js"
// import RightGridContainer from "../containers/RightGridContainer.js"

export default function ChatRoom() {
    return (
      <div>
        <LeftGrid />
        <ChatGrid />
        <RightGrid />
      </div>
    );
}
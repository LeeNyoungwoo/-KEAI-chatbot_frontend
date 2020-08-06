import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatGrid from '../components/ChatGrid/ChatGrid';

export default function ChatGridContainer() {
    const dispatch = useDispatch();

    return (
        <ChatGrid
        />
    );
}
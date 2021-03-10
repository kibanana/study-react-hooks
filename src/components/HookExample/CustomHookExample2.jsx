import React from 'react';
import useFriendStatus from './CustomHook';
import './gradientText.scss';

export default function CustomHookExample1() {
    const friendId = 'A';
    const isOnline = useFriendStatus(friendId);

    return (
        <p className="instagram">
            <span>

            friend {friendId}: {isOnline ? '온라인' : '오프라인'}이다.
            </span>
        </p>
    )
}
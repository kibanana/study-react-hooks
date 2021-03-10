import React from 'react';
import useFriendStatus from './useFriendStatus';

export default function CustomHookExample1() {
    const friendId = 'A';
    const isOnline = useFriendStatus(friendId);

    return (
        <h3>
            friend {friendId}: {isOnline ? '온라인' : '오프라인'}
        </h3>
    )
}
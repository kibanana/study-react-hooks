import react, { useState, useEffect } from 'react';

const friends = {
    'A': {
        isOnline: true
    },
    'B': {
        isOnline: false
    },
    'C': {
        isOnline: false
    }
}

export default function useFriendStatus(friendId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        setIsOnline(friends[friendId].isOnline);
    });

    return isOnline;
}
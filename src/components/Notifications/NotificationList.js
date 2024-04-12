import React from 'react';

function NotificationList({ notifications }) {
    return (
        <ul>
            {notifications.map((notification, index) => (
                <li key={index}>{notification.message}</li>
            ))}
        </ul>
    );
}

export default NotificationList;
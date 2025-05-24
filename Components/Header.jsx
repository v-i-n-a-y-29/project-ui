import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="right">
            <button className="icon-button" title="Notifications">Notification🔔</button>
            <button className="icon-button" title="Profile">profile👤</button>
            <button className="icon-button" title="Logout">logout🚪</button>
        </div>
    </header>
);

export default Header;
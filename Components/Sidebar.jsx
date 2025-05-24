import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ items }) => (
    <aside className="sidebar">
        <div className="sidebar-header">Dashboard</div>
        <nav>
            {items.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.to}
                    className="sidebar-item"
                    activeclassname="active"
                >
                    <span className="icon">{item.icon}</span>
                    {item.label}
                </NavLink>
            ))}
        </nav>
        <div className="logout">Logout</div>
    </aside>
);

export default Sidebar;
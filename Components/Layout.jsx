import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css';

const Layout = ({ children, userType }) => {
    const sidebarItems = userType === 'student' ? [
    { label: 'Home', icon: '🏠', to: '/dashboard' },
    { label: 'View Reports', icon: '📑', to: '/reports' },
    { label: 'View Feedback', icon: '💬', to: '/feedback' },
    { label: 'Profile Settings', icon: '⚙️', to: '/settings' },
] : [
    { label: 'Home', icon: '🏠', to: '/dashboard' },
    { label: 'Create Test', icon: '📝', to: '/create-test' },
    { label: 'Check Submission', icon: '✅', to: '/submissions' },
    { label: 'Evaluate Results', icon: '📊', to: '/results' },
    { label: 'Student Reports', icon: '📁', to: '/student-reports' },
    { label: 'Profile Settings', icon: '⚙️', to: '/settings' },
];

    return (
        <div className="dashboard">
            <Sidebar items={sidebarItems} />
            <main className="main">
                <Header />
                <div className="content">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
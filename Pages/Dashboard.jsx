import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import Card from '../Components/Card';
import './Dashboard.css';

const Dashboard = ({ userType }) => {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        if (title === "Create Test") {
            navigate("/create-test");
        } else {
            alert(`Clicked on card: ${title}`);
        }
    };

    return (
        <Layout userType={userType}>
            <h2>Hello, {userType === 'student' ? 'Student' : 'Faculty'}</h2>
            <div className="cards">
                {userType === 'student' ? (
                    <>
                        <Card 
                            title="Summary Of Latest Reports" 
                            content="Detailed report summary..." 
                            onClick={() => handleCardClick('Summary Of Latest Reports')} 
                        />
                        <Card 
                            title="Feedbacks" 
                            content="All feedback listed here..." 
                            onClick={() => handleCardClick('Feedbacks')} 
                        />
                    </>
                ) : (
                    <>
                        <Card 
                            title="Summary Of Created Tests" 
                            content="Overview of created tests..." 
                            onClick={() => handleCardClick('Summary Of Created Tests')} 
                        />
                        <Card 
                            title="Latest Student Activity" 
                            content="Recent student actions..." 
                            onClick={() => handleCardClick('Latest Student Activity')} 
                        />
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Dashboard;
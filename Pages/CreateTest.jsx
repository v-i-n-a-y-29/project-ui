import React from 'react';
import Layout from '../Components/Layout';

const CreateTest = ({ userType }) => {
    return (
        <Layout userType={userType}>
            <h2>Create a New Test</h2>
            {/* Your form or content for creating a test goes here */}
            <form>
                <label>Test Name:</label>
                <input type="text" placeholder="Enter test name" />
                {/* Add more fields as needed */}
                <button type="submit">Create Test</button>
            </form>
        </Layout>
    );
};

export default CreateTest;
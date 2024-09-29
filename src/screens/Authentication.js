import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Authentication = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        console.log(isAuthenticated);
        if (!isAuthenticated) {
            navigate('/login'); // Navigate to login if not authenticated
        } else {
            navigate('/home'); // Navigate to dashboard or desired page if authenticated
        }
    }, [isAuthenticated, navigate]); // Dependency array ensures this runs when isAuthenticated or navigate changes


    return (
        <div>
            <p>Hello</p>
        </div>
    );
};

export default Authentication
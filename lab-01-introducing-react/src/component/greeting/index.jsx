import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import '../../css/lab-01.css'

const greeting = ({ name }) => {
    return (
        <Jumbotron>
            <header>
                    <h1>Welcome to the website,{name}. This Website is under Construction!!</h1>
            </header>
        </Jumbotron>
    );
};
export default greeting;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './component/greeting';
import './css/lab-01.css';


const App = () => {
    const [name, setName] = useState();
    return(
    <>
        <input
            onChange={({ target: { value } }) => setName(value)}
            placeholder="Enter your name"
        />
        <Greeting name={name} />
        <img src = "https://image.freepik.com/free-vector/web-construction-background_1167-212.jpg"/>
    </>
    );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';


import {Body , Footer, Header} from './sections';

import './sections/header.css'






const App = () => {
    return (
        < React.Fragment >
            
            <Header />
            <Body />
            <Footer />

        </React.Fragment >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
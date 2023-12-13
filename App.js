import React from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';

import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';

import {Body , Footer, Header, AboutUs, ErrorPage} from './sections';
import './sections/header.css'







const App = () => {
    return (
        < React.Fragment >
            
            <Header />
            <Outlet />
            <Footer />

        </React.Fragment >
    )
}

const configurationDom = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage />,
        children :[
            {
                path : "/",
                element: <Body />

            },
            {

                path : "/aboutus",
                element : <AboutUs />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={configurationDom}/>)
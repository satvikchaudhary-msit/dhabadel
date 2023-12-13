import React from "react";
import { useRouteError } from "react-router-dom";




const ErrorPage = () => {
    
    var errorDetails = useRouteError();
   
    return (<div>
        <h1>Error Page</h1>
        <div>
            <p>{errorDetails.status}</p>
            <p>{errorDetails.statusText}</p>
        </div>
    </div>)
}

export default ErrorPage;
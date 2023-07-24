import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import SignUp from '../Shared/Registration/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/registration',
                element: <SignUp/>
            },
        ]
    }
]) 

export default router;
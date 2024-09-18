import React, {useContext, useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar.tsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { Navigate } from "react-router-dom";
import WhatIs from "../WhatIs/WhatIs.tsx";
import { BodySite } from "../../Global.tsx";
import { HomeGrid } from "./style.tsx";


const Home = () => {
    const { currentUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem('accessToken')) {
            setRedirect(true);
        }
    }, []);

    if (redirect) {
        return <Navigate to="/login" />;
    }
    
    return (
        <>
            <SideBar />
            <BodySite>
                <HomeGrid>
                    <WhatIs />
                    
                </HomeGrid>
            </BodySite>
        </>
    );
};

export default Home;
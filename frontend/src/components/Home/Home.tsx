import React, {useContext} from "react";
import SideBar from "../SideBar/SideBar.tsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { Navigate } from "react-router-dom";
import WhatIs from "../WhatIs/WhatIs.tsx";
import { BodySite } from "../../Global.tsx";
import CardExp from "../Card_exp/CardExp.tsx";


const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            {!currentUser && <Navigate to="/login" />}
            <SideBar />
            <CardExp />
            <WhatIs />
        </>
    );
};

export default Home;
import React, {useContext} from "react";
import SideBar from "../SideBar/SideBar.tsx";
import { signOut } from "../../Firebase/auth.js";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { Navigate } from "react-router-dom";

const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            {!currentUser && <Navigate to="/login" />}
            <SideBar />
        </>
    );
};

export default Home;
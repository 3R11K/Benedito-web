import React, { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar.tsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { Navigate } from "react-router-dom";
import WhatIs from "../WhatIs/WhatIs.tsx";
import EventList from "../EventList/EventList.tsx";
import NextEvent from "../NextEvent/NextEvent.tsx";
import Members from "../Members/Members.tsx"
import EventForm from "../EventForm/EventForm.tsx";
import { BodySite } from "../../Global.tsx";
import { HomeGrid, LeftColumn, RightColumn, SiteTitle } from "./style.tsx";
import { getEvents } from "../../services/EventService.js"


const Home = () => {
    const { currentUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const data = await getEvents();
        setEvents(data);
    }

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            setRedirect(true);
        }
        fetchEvents();
    }, []);

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <SideBar />
            <BodySite>
                <SiteTitle>BENEDITO CARAVELAS</SiteTitle>
                <HomeGrid>
                    <LeftColumn>
                        <EventList events={events} />
                        <Members />
                    </LeftColumn>
                    <RightColumn>
                        <NextEvent />
                        <EventForm />
                    </RightColumn>
                </HomeGrid>
            </BodySite>
        </>
    );
};

export default Home;

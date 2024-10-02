import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar.tsx";
import { BodySite } from "../../Global.tsx";
import { getEvent } from "../../services/EventService.js";
import { use } from "../../../../backend/routes/events.js";

interface Event {
    id: string;
    titulo: string;
    data_inicio: string;
    data_fim: string;
    duracao: number;
    local: string;
    palestrante: string;
    sobre: string;
    img: string;
}

const EventPage = () => {
    const { id } = useParams(); 
    const [event, setEvent] = useState<Event>({
        id: "",
        titulo: "",
        data_inicio: "",
        data_fim: "",
        duracao: 0,
        local: "",
        palestrante: "",
        sobre: "",
        img: "",
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await getEvent(id);
                setEvent(event);
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        }
        fetchEvent();
    }, [id]);
    return (
        <>
            <SideBar />
            <BodySite>
                <h1>Event Page</h1>
                <p>{event.titulo}</p>
                <p>{event.data_inicio}</p>
                <p>{event.data_fim}</p>
                <p>{event.duracao}</p>
                <p>{event.local}</p>
                <p>{event.palestrante}</p>
                <p>{event.sobre}</p>
               <img src={event.img} alt="" />

            </BodySite>
        </>
    );
}

export default EventPage;
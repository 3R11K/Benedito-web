import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../SideBar/SideBar.tsx";
import { BodySite } from "../../Global.tsx";
import { getEvent } from "../../services/EventService.js";
import { EventContainer, EventTitle, EventDetail, EventImage, IconWrapper, ToggleButton, ParticipationButton } from "./styles.tsx";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Loading from "../Loading/Loading.tsx";

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
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const charLimit = 150;

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await getEvent(id);
                setEvent(event[0]);
            } catch (error) {
                console.error("Error fetching event:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [id]);

    const isEventEnded = (event: Event) => {
        const now = new Date();
        const eventEndDate = new Date(event.data_fim);
        return now > eventEndDate;
    };

    if (loading) {
        return (
            <>
                <SideBar />
                <BodySite>
                    <Loading />
                </BodySite>
            </>
        );
    }

    const toggleExpand = () => setExpanded(!expanded);

    return (
        <>
            <SideBar />
            <BodySite>
                {event && (
                    <EventContainer>
                        <EventImage src={event.img} alt={event.titulo} />
                        <EventTitle>{event.titulo}</EventTitle>

                        <EventDetail>
                            <IconWrapper>
                                <FaCalendarAlt />
                            </IconWrapper>
                            {new Date(event.data_inicio).toLocaleString('pt-BR', {
                                day: 'numeric',
                                month: 'long',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </EventDetail>

                        <EventDetail>
                            <IconWrapper>
                                <FaMapMarkerAlt />
                            </IconWrapper>
                            {event.local}
                        </EventDetail>

                        <EventDetail>
                            <IconWrapper>
                                <FaUser />
                            </IconWrapper>
                            {event.palestrante}
                        </EventDetail>

                        <EventDetail>
                            <strong>Descrição:</strong>{" "}
                            {expanded || event.sobre.length <= charLimit
                                ? event.sobre
                                : `${event.sobre.slice(0, charLimit)}...`}{" "}
                            {event.sobre.length > charLimit && (
                                <ToggleButton onClick={toggleExpand}>
                                    {expanded ? "Ver menos ↑" : "Ver mais ↓"}
                                </ToggleButton>
                            )}
                        </EventDetail>

                        {isEventEnded(event) ? (
                            <ParticipationButton disabled style={{ backgroundColor: 'gray' }}>
                                Evento encerrado
                            </ParticipationButton>
                        ) : (
                            <ParticipationButton>Participar</ParticipationButton>
                        )}
                    </EventContainer>
                )}
            </BodySite>
        </>
    );
};

export default EventPage;

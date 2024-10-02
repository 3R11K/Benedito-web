import React, { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar.tsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { Navigate } from "react-router-dom";
import { CalendarContainer, TabButtons, TabButton, TabContent, EventCalendar, EventDate } from "./style.tsx";
import { getEvents } from "../../services/EventService";
import { EventCard, EventImage, EventTitle } from "../EventList/style.tsx";
import CheckAdmin from "../../services/CheckAdmin.js";
import { BodySite } from "../../Global.tsx";
import AddEvent from "../AddEvent/AddEvent.tsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const CalendarPage = () => {
    const { currentUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);
    const [selectedTab, setSelectedTab] = useState("próximos");
    const [events, setEvents] = useState<{ upcoming: Event[], past: Event[] }>({
        upcoming: [],
        past: [],
    });
    const [isAdmin, setIsAdmin] = useState(false);

    const handleAddEventError = (error) => {
        toast.error(error);
    }

    const handleAddEventSuccess = (message) => {
        toast.success(message);
    }

    const handleEventClick = (eventId) => {
        return async () => {
            try {
                console.log("Fetching event with id:", eventId);
                return window.location.href = `/event/${eventId}`;
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        }       
    }

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            console.log("No token found");
            setRedirect(true);
        }
        const checkAdminStatus = async () => {
            try {
                const isAdmin = await CheckAdmin();  // Aguarda o retorno de CheckAdmin
                setIsAdmin(isAdmin);  // Atualiza o estado com o valor correto
            } catch (error) {
                console.error("Error checking admin status:", error);
            }
        };
    
        checkAdminStatus();

        

        checkAdminStatus();
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                if (Array.isArray(response)) {
                    const upcoming = response.filter(event => new Date(event.data_inicio) >= new Date());
                    const past = response.filter(event => new Date(event.data_inicio) < new Date());
                    setEvents({ upcoming, past });
                } else {
                    console.error("Error fetching events: Response is not an array");
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <SideBar />
            <BodySite>
                <CalendarContainer>
                    <TabButtons>
                        <TabButton 
                            active={selectedTab === 'próximos'} 
                            onClick={() => setSelectedTab("próximos")}
                        >
                            PRÓXIMOS
                        </TabButton>
                        <TabButton 
                            active={selectedTab === 'passados'} 
                            onClick={() => setSelectedTab("passados")}
                        >
                            PASSADOS
                        </TabButton>
                    </TabButtons>

                    <TabContent>
                        <EventCalendar>
                        {selectedTab === "próximos" ? (
                            events.upcoming.length > 0 ? (
                                events.upcoming.map(event => (
                                    <EventCard key={event.id} onClick={handleEventClick(event.id)}>
                                        <EventImage src={event.img} alt={event.titulo} />
                                        <EventTitle>{event.titulo}</EventTitle>
                                        <EventDate>{new Date(event.data_inicio).toLocaleDateString('pt-BR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</EventDate>
                                    </EventCard>
                                ))
                            ) : (
                                <div>
                                    <h2>Sem eventos próximos</h2>
                                    <p>Que tal criar um novo evento?</p>
                                </div>
                            )
                        ) : (
                            events.past.length > 0 ? (
                                events.past.map(event => (
                                    <EventCard key={event.id} onClick={handleEventClick(event.id)}>
                                        <EventImage src={event.img} alt={event.titulo} />
                                        <EventTitle>{event.titulo}</EventTitle>
                                        <EventDate>{new Date(event.data_inicio).toLocaleDateString('pt-BR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</EventDate>
                                    </EventCard>
                                ))
                            ) : (
                                <div>
                                    <h2>Sem eventos passados</h2>
                                    <p>Não há eventos anteriores.</p>
                                </div>
                            )
                        )}
                        </EventCalendar>
                    </TabContent>
                </CalendarContainer>
                {
                    isAdmin && (
                        <AddEvent onError={handleAddEventError} onSuccess={handleAddEventSuccess} />
                    )
                }
            </BodySite>
            <ToastContainer />
        </>
    );
};

export default CalendarPage;

import React from "react";
import { EventListContainer, EventCard, EventTitle, EventLocation, EventImage, ScrollableContainer } from "./style.tsx";

const EventList = ({ events }) => {
    return (
        <EventListContainer>
            <h2>Eventos Próximos</h2>
            <ScrollableContainer>
                {events.map(event => (
                    <EventCard key={event.id}>
                        <EventImage src={event.img} alt={event.title} />
                        <EventTitle>{event.titulo}</EventTitle>
                        <EventLocation>{event.local}</EventLocation>
                    </EventCard>
                ))}
            </ScrollableContainer>
        </EventListContainer>
    );
};

export default EventList;

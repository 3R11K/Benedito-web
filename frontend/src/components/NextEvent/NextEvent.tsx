import React from "react";
import { EventContainer, EventTitle, EventButton } from "./style.tsx";

const NextEvent = () => {
    return (
        <EventContainer>
            <img src="image_url" alt="Próximo evento" style={{ width: "100%", borderRadius: "10px" }} />
            <EventTitle>Faltam 2 dias</EventTitle>
            <p>Letramento Racial: Pertencimento e identidade</p>
            <EventButton>Inscreva-se</EventButton>
        </EventContainer>
    );
};

export default NextEvent;

import styled from "styled-components";

// Contêiner principal da lista de eventos
export const EventListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;

    h2{
        font-size: 1.2rem;
        color: #3D1C03;
        margin-bottom: 15px;
        margin-top: 0;
        font-family: "Poppins", sans-serif;
    }
`;

// Contêiner com rolagem horizontal
export const ScrollableContainer = styled.div`
    display: flex;
    overflow-x: scroll;  /* Ativa rolagem horizontal */
    gap: 15px;
    
    /* Oculta a barra de rolagem */
    &::-webkit-scrollbar {
        display: none;
    }
`;

// Cartão de cada evento
export const EventCard = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    overflow: hidden;

    //mouse pointer muda para pointer quando passa por cima do card
    //hover aumenta um pouco o tamanho do card
    &:hover{
        transform: scale(1.05);
        transition: transform 0.2s;
        cursor: pointer;
    }
`;

// Imagem do evento
export const EventImage = styled.img`
    position: relative;
    top: 0;
    width: 100%;
    height: 84px;  /* Altura fixa para manter o layout */
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
`;

// Título do evento
export const EventTitle = styled.h3`
    font-size: 0.7rem;
    color: #3D1C03;
    margin-bottom: 2px;
    font-family: "Poppins", sans-serif;
`;

// Localização do evento
export const EventLocation = styled.p`
    font-size: 0.6rem;
    color: #8A8A8A;
    font-family: "Poppins", sans-serif;
`;

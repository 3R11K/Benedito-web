import styled from "styled-components";


// Definindo os componentes estilizados
export const CalendarContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TabButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px 0px;
    background-color: #acacac;
    border-radius: 40px;
`;

interface TabButtonProps {
    active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
    padding: 10px 20px;
    margin: 0 50px;
    height: 2rem;
    border: none;
    border-radius: 40px;
    background-color: ${(props) => (props.active ? "#4b382a" : "#acacac")};
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => (props.active ? "#3a2d22" : "#969594")};
    }
`;

export const TabContent = styled.div`
    text-align: center;

    h2 {
        margin: 0;
        font-size: 24px;
    }

    p {
        font-size: 18px;
        color: #666;
    }
`;

export const EventCalendar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const EventDate = styled.h6`
    color: #666;
    font-family: "Poppins", sans-serif;
`;



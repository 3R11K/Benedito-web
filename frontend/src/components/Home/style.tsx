import styled from "styled-components";

export const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    height: 100vh;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Em telas menores, a sidebar pode ocupar toda a largura */
    }
`;


export const SiteTitle = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #3D1C03;
    margin-top: 0;
    margin-left: 1rem;
    font-size: 1.5rem;
`;

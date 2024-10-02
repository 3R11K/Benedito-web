import styled from "styled-components";

export const HomeGrid = styled.div`
    display: flex;
    justify-content: start;
    height: 100vh;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Em telas menores, as colunas se tornam uma única coluna */
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 65%;
`;

export const RightColumn = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SiteTitle = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    padding: 20px 0 20px 0;
`;
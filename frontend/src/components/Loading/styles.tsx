import styled from "styled-components";
//loading de carregamento bolinha girando com fundo borrado e transparente e bolinha centralizada na tela com borda #3D1C03

export const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    height: 97%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    border-radius: 0.4rem;
`;

export const Spinner = styled.div`
    border: 5px solid #3D1C03;
    border-top: 5px solid #EDD62E;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
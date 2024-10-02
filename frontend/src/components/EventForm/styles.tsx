import styled from "styled-components";

// Contêiner principal do formulário
export const FormContainer = styled.form`
    background-color: #FFF;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 75%;
`;

// Título do formulário
export const FormTitle = styled.h2`
    font-family: "Poppins", sans-serif;
    color: #3D1C03;
    font-size: 1.2rem;
    margin-top: 0px;
    margin-bottom: 0px
`;

// Estilos para os campos de entrada
export const InputField = styled.input`
    padding: 5px;
    font-size: 0.8rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-family: "Poppins", sans-serif;
    width: 100%;
    box-sizing: border-box;
    color: #3D1C03;
`;

// Contêiner dos botões
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 0px;
`;

// Estilo para o botão de "Confirmar"
export const ConfirmButton = styled.button`
    background-color: #F0A500;
    height: 40px;
    width: 40%;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size:0.9rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;

    &:hover {
        background-color: #d18c00;
    }
`;

// Estilo para o botão de "Cancelar"
export const CancelButton = styled.button`
    background-color: #ccc;
    height: 40px;
    width: 40%;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;

    &:hover {
        background-color: #aaa;
    }
`;

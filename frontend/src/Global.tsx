import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #E1E1E1;
        margin: 0.5rem;
        display: flex;
    }

    button {
        background-color: #EDD62E;
        border: none;
        border-radius: 0.4rem;
        width: 70%;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 1rem;
        color: #3D1C03;
        height: 3rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer; /* Added this line */
    }

    button:hover {
        transform: scale(1.032);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    input {
        border: none;
        height: 3rem;
        border-radius: 0.4rem;
        background-color: #FFFFFF;
        color: #747688;
        font-family: "Baloo 2", sans-serif;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        color: #3D1C03;
    }
`;


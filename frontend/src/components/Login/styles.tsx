import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0.5rem;
    align-items: center;
    height: 97vh;
    width: 40vw;
    background-color: ${props => props.color};
    flex-direction: column;
    overflow: hidden;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48vw;
    height: 97vh;
    position: absolute;
    left: 0.5rem;
`;

export const LoginInput = styled.input`
    margin: 1rem;
    width: 85%;
    padding-left: 15px;
`;

export const LoginButton = styled.button<{ color: string }>`
    margin: 0.5rem;
    width: 85%;
    background-color: ${props => props.color};
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AContainer = styled.div`
    margin: 0.5rem;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RegContainer = styled.div`
    margin:0;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`;

export const PLink = styled.p`
    color: #ffff;
    font-size: 0.7rem;
    font-family: "Poppins", serif;
    margin: 0;
`;

export const Link = styled.a<{ color: string }>`
    color: ${props => props.color};
    font-size: 0.7rem;
    text-decoration: none;
    font-family: "Poppins", serif;
    margin-left:4px;
`;

export const Hello = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    font-family: "Poppins", serif;
    margin-bottom: 2rem;
`;

export const HelloPhrase = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    color: #ffff;
    font-weight:lighter;
`;

export const Name = styled.h1`
    font-size: 1.8rem;
    margin: 0;
    color: #EDD62E;
    font-weight:bold;
`;

export const GoogleImage = styled.img`
    width:2rem;
    z-index: 12;
    margin-right: 1rem;
`;

export const OrSeparator = styled.div<{ backgroundColor: string }>`
    display: flex;
    align-items: center;
    width: 88%;
    text-align: center;
    margin: 1rem;
    position: relative;

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #EDD62E;
    }

    &::before {
        margin-right: 10px;
    }

    &::after {
        margin-left: 10px;
    }

    span {
        color: #EDD62E;
        background-color: ${props => props.backgroundColor};
        padding: 0 10px;
        position: relative;
    }
`;

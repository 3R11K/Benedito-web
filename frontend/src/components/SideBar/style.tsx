import styled from "styled-components";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #3D1C03;
    width: 13%;
    
`;

export const ProfileName = styled.h1`
    color: white;
    font-size: 125%;
    margin-top: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: flex-start;
    width: 100%;
`;

const ButtonBase = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1em;
    margin-top: 15px;
    font-family: "Abel", sans-serif;
    font-weight: lighter;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 10%;
`;

export const SideBarButton = styled(ButtonBase)``;
export const LogOutButton = styled(ButtonBase)``;
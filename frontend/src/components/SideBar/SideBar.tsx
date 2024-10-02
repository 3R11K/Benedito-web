import React, { useContext } from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto.tsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { ProfileName, SideBarContainer, ProfileContainer, ButtonsContainer, SideBarButton, LogOutButton, IconWrapper } from "./style.tsx";
import { User, Calendar, LogOut } from 'react-feather';
import { signOut } from "../../Firebase/auth.js";

function SideBar() {
    const { currentUser } = useContext(AuthContext);

    const calendarClick = () => {
        window.location.href = "/calendar";
    }

    return (
        <SideBarContainer>
            <ProfileContainer>
                <ProfilePhoto radius="5" src={currentUser?.photoURL ?? ""}/>
                <ProfileName>{currentUser?.displayName || "Usuário"}</ProfileName>
            </ProfileContainer>
            <ButtonsContainer>
                <SideBarButton>
                    <IconWrapper><User /></IconWrapper>
                    Perfil
                </SideBarButton>
                <SideBarButton onClick={calendarClick}>
                    <IconWrapper><Calendar /></IconWrapper>
                    Calendário
                </SideBarButton>
            </ButtonsContainer>
            <ButtonsContainer style={{ position: "absolute", left: "20px", bottom: "30px" }}>
                <LogOutButton onClick={signOut}>
                    <IconWrapper><LogOut /></IconWrapper>
                    Sair
                </LogOutButton>
            </ButtonsContainer>
        </SideBarContainer>
    );
}

export default SideBar;
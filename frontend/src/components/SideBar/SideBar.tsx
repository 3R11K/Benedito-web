import React, {useContext} from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto.tsx";
import { AuthContext } from "../../context/AuthContext/AuthContext.tsx";
import { ProfileName, SideBarContainer, ProfileContainer, ButtonsContainer, SideBarButton, LogOutButton } from "./style.tsx";
import { User, Calendar, LogOut } from 'react-feather';
import { signOut } from "../../Firebase/auth.js";

function SideBar() {
    const { currentUser } = useContext(AuthContext);
    return (
        <SideBarContainer>
            <ProfileContainer>
                <ProfilePhoto radius="5" src={currentUser?.photoURL ?? ""}/>
                <ProfileName>{currentUser && currentUser.displayName}</ProfileName>
            </ProfileContainer>
            <ButtonsContainer>
                <SideBarButton><User size={25} color="white" style={{marginRight: "10px"}} />Perfil</SideBarButton>
                <SideBarButton><Calendar size={25} color="white" style={{marginRight: "10px"}} />Calendário</SideBarButton>
            </ButtonsContainer>
            <ButtonsContainer style={{position:"absolute",left:"20px",bottom:"30px"}}>
                <LogOutButton onClick={signOut}><LogOut size={25} color="white" style={{marginRight: "10px"}}/>Sair</LogOutButton>
            </ButtonsContainer>
        </SideBarContainer>
    );
}

export default SideBar;
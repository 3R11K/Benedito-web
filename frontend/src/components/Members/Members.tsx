import React from "react";
import { MembersContainer, ScrollableContainer, MemberCard, MemberAvatar, MemberName, MemberRole } from "./style.tsx";

const MembersList = () => {
    const members = [
        { id: 1, name: "Thainá de Deus", role: "Sistemas de Info...", avatarUrl: "member_avatar_url_1" },
        { id: 2, name: "Matheus Rafael", role: "Sistemas de Info...", avatarUrl: "member_avatar_url_2" },
        { id: 3, name: "Vinícius Fernandes", role: "Sistemas de Info...", avatarUrl: "member_avatar_url_3" },
        { id: 4, name: "Daylan Alho", role: "Sistemas de Info...", avatarUrl: "member_avatar_url_4" },
        { id: 5, name: "Pessoa ale...", role: "Sistemas de Info...", avatarUrl: "member_avatar_url_5" }
    ];

    return (
        <MembersContainer>
            <h2>Membros</h2>
            <ScrollableContainer>
                {members.map(member => (
                    <MemberCard key={member.id}>
                        <MemberAvatar src={member.avatarUrl} alt={member.name} />
                        <MemberName>{member.name}</MemberName>
                        <MemberRole>{member.role}</MemberRole>
                    </MemberCard>
                ))}
            </ScrollableContainer>
        </MembersContainer>
    );
};

export default MembersList;

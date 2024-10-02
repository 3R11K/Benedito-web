import styled from "styled-components";

// Contêiner principal dos membros
export const MembersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;

    h2{
        font-size: 1.2rem;
        color: #3D1C03;
        margin-bottom: 15px;
        margin-top: 30px;
        font-family: "Poppins", sans-serif;
    }
`;

// Contêiner com rolagem horizontal
export const ScrollableContainer = styled.div`
    display: flex;
    overflow-x: auto;  /* Ativa a rolagem horizontal */
    gap: 20px;
    
    /* Oculta a barra de rolagem */
    &::-webkit-scrollbar {
        display: none;
    }
`;

// Cartão de cada membro
export const MemberCard = styled.div`
    min-width: 120px;  /* Largura mínima para os cartões de membro */
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`;

// Avatar do membro
export const MemberAvatar = styled.img`
    width: 80px;  /* Tamanho fixo do avatar */
    height: 80px;
    border-radius: 50%;  /* Faz com que a imagem seja circular */
    object-fit: cover;
    margin-bottom: 10px;
`;

// Nome do membro
export const MemberName = styled.h3`
    font-size: 0.8rem;
    color: #3D1C03;
    margin-bottom: 1px;
    font-family: "Poppins", sans-serif;
`;

// Cargo ou descrição do membro
export const MemberRole = styled.p`
    font-size: 0.6rem;
    color: #8A8A8A;
    font-family: "Poppins", sans-serif;
`;

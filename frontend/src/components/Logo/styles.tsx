import styled from "styled-components";

export const LogoImg = styled.img<{ radius: string }>`
    border-radius: 50%;
    width: ${props => props.radius}rem;
    height: ${props => props.radius}rem;
`;

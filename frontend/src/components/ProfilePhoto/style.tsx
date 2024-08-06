import styled from "styled-components";

export const ProfilePhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const ProfilePhotoImage = styled.img<{ radius: string }>`
    border-radius: 50%;
    width: ${props => props.radius}rem;
    height: ${props => props.radius}rem;
`;
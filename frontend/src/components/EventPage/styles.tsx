import styled from 'styled-components';

export const EventContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

export const EventTitle = styled.h2`
  font-size: 1.8em;
  margin: 10px 0;
  text-align: center;
  font-weight: bold;
`;

export const EventDetail = styled.p`
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-size: 1.1em;
`;

export const EventImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 20px auto;
  max-height: 300px;
    object-fit: cover;
  display: block;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
  color: #555;
`;

export const ToggleButton = styled.button`
  border: none;
  background: transparent;
  color: #007bff;
  cursor: pointer;
  font-size: 1em;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ParticipationButton = styled.button`
  background-color: #f4c542;
  border: none;
  color: white;
  padding: 12px 20px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f39c12;
  }
`;

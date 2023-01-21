import styled, { keyframes } from "styled-components";

export const ModalContainer = styled.form`
    display: inline-block;
   background: black;
   color: #fff;
    width: 50%;
    border-radius: 15px;
    padding: 1%;
`;

export const ModalHeader = styled.div`
    background: transparent;
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 95%;
    padding: 2%;
    `;

export const ModalBody = styled.div`
    background: transparent;
    width: 59%;
    padding: 2%;
    `;



const slidebg = keyframes`
  to {
    background-position:40vw;
  };
`;


export const ModalButton = styled.input`
    background-color: #343A40;
    width: 160%;
    text-align: center;
    padding: 5px;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 120%;
    font-weight: 500;
    justify-content: center;
    &:hover{
        background-image: linear-gradient(to right, darkblue, gray, darkred, darkred, gray, darkblue);
        animation-name: ${slidebg};
        animation-duration: 20s;
        animation-iteration-count: infinite;
    }
`;

export const ModalText = styled.textarea`
  background: #2f2f2f;
  color: #fff;
  font-size: 17px;
  width: 156%;
  height: 50%;
  padding: 2%;
  margin: 1%;
  border: none;
  border-radius: 10px;
`;

export const ModalQuit = styled.button`
    border: none;
    color: white;
    padding: 0.6em 1.2em;
    text-align: center;
    font-size: 16px;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
`;
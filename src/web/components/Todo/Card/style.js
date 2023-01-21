import styled from 'styled-components'


export const CardContainer = styled.div`    
    display: flex;
    gap: 5px;
    width: 500px;
    margin: 1px;
    height: 30px;
    background-color: black;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 5px;
    align-items: center;
`;

export const CardButton = styled.button`
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


export const CardText = styled.h3`
    color: white;
    background-color: transparent;
`;

import React from "react";
import ReactDOM from "react-dom";
import { StyledModal } from "./style";


export default function Modal({ children }){
    return ReactDOM.createPortal(
       <StyledModal>{children}</StyledModal>,
        document.getElementById("modal")
    )
};


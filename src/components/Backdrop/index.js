import React from "react";
import "./style.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => (
    createPortal(
        <div className="backdrop" onClick={props.onConfirm}>
            {props.children}
        </div>,
        document.getElementById("backdrop")
    )    
)

export default Backdrop;
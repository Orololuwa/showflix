import React from "react";
import "./style.css";
import Backdrop from "../Backdrop";

export default function Loading() {
  return (
    <Backdrop>
      <div className="loader" />
    </Backdrop>
  );
}

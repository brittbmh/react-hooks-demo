import React, { useContext } from "react";

import "./App.css";

import UserContext from "./UserContext";

function Navigation() {
    const nameValue = useContext(UserContext);
    return <div>{nameValue}</div>;
}

export default Navigation;

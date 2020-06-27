import React from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";

import "./styles/main.scss";
export const App = () => {
    return (
        <div className="App">
            <Form />
            <List />
        </div>
    );
};

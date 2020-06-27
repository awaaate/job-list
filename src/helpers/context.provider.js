import React from "react";
const { createContext, useState, useContext } = require("react");

const Context = createContext({
    jobs: [],
    setJobs: () => {},
});

export const ContextProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    return (
        <Context.Provider value={{ jobs, setJobs }}>
            {children}
        </Context.Provider>
    );
};

export const useAppContext = () => useContext(Context);

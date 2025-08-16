import { useState, createContext } from "react";

const CursorTextContext = createContext();

const CursorProvider = ({ children }) => {
    const [text, setText] = useState("");

    return (
        <CursorTextContext.Provider value={{ text, setText }}>
            {children}
        </CursorTextContext.Provider>
    );
};

export { CursorTextContext, CursorProvider };
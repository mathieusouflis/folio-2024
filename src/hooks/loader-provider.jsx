import { useState } from "react";
import { createContext } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
    const [navigateStatus, setNavigateStatus] = useState(false);

    return (
        <LoaderContext.Provider value={{ navigateStatus, setNavigateStatus }}>
            {children}
        </LoaderContext.Provider>
    );
};

export { LoaderContext, LoaderProvider };

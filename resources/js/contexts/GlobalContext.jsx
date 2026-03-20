import { createContext, useState, useEffect, useContext } from 'react';

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
    const [navbarLight, setNavbarLight] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <GlobalContext.Provider value={{
            navbarLight,
            setNavbarLight,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobal = () => useContext(GlobalContext);
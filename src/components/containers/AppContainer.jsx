import { useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import { MainLayout } from "../"
import PortfolioContext from "../../context/PortfolioContext"

const AppContainer = ({ children }) => {

    const [mode, setMode] = useState()
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme : dark)')
    
    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light")
    }, [])

    const handleChangeMode = () => {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark")
    }

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        console.log("newValue: ", newValue); // value is 0 to 5 baseon tabs of clicked
        setValue(newValue)
    }

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <MainLayout mode={mode}>
            <PortfolioContext.Provider value={{
                value,
                setValue,
                mobileOpen,
                setMobileOpen,

                mode,
                setMode,
                handleChangeMode,

                handleChange,
                handleDrawerToggle,

            }}>
                {children} {/* App.js content */}
            </PortfolioContext.Provider>
        </MainLayout>
    );
}

export default AppContainer;

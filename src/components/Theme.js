import {createTheme} from "@mui/material"

//todo : Create Custom Theme for ThemeProvider
export const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "tanha, Vazir, roboto"
    },
    palette:{
        mode:"light", 
        primary:{
            main: "#1976d2",
        },
        secondary:{
            main:"#9c27b0"
        }
    }

})
export const darkTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "tanha, Vazir, roboto"
    },
    palette:{
        mode:"dark", 
        primary:{
            main: "#90caf9",

        },
        secondary:{
            main:"#ce93d8"
        }
    }

})
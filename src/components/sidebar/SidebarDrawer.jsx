import { useContext, useEffect } from "react";
import { Box, Drawer, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles"
import { grey} from "@mui/material/colors";

import PortfolioContext from "../../context/PortfolioContext";
import {Sidebar} from "../"

const drawerWidth = 220

const SidebarDrawer = () => {
    const { mobileOpen, setMobileOpen, handleDrawerToggle} = useContext(PortfolioContext)

    const theme = useTheme()
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

    useEffect(() => {
        if (isMdUp) {
            setMobileOpen(false)
        }
    }, [isMdUp] )

    return (
        <Box sx={{ textAlign: "center" }} >
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: "none" },
                    textAlign: "center",
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: grey[900], color: '#fff' },
                    zIndex: 99999
                }}
            >
                <Sidebar />
            </Drawer>
        </Box>
    );
}

export default SidebarDrawer;

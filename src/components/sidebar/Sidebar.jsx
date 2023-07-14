import { Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import { SidebarHeader, SidebarTabs, SidebarFooter } from "../"

import "./Sidebar.css"

const Sidebar = () => {
const theme = useTheme()
    return (
        <>
            <div className={theme.palette.mode === "dark" ? "sidbar dark" : "sidbar"}>
                <SidebarHeader />
                <Divider variant="middle" color="text.primary" sx={{ mt: 2 }} />
                <SidebarTabs />
                <Divider variant="middle" color="text.primary" />
                <SidebarFooter />
            </div>
        </>
    );
}

export default Sidebar;
import { useContext } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PortfolioContext from "../../context/PortfolioContext";
import { tabsData } from "../../constants/tabsData"
import { useTheme } from '@mui/material/styles';


const SidebarTabs = () => {
    const { value, handleChange } = useContext(PortfolioContext)
    const data = tabsData()
    const theme = useTheme()

    return (
        <Box sx={{ p: 2 }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
                indicatorColor= "secondary"
                sx={{ borderLeft: 1, borderColor: 'divider',  }}
               
            >
                {
                    data.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            icon={tab.icon}
                            iconPosition="start"
                            sx={{ }}
                            {...tab}
                            className={theme.palette.mode === "dark" ? "MuiTab-root dark" : "MuiTab-root light"}
                        />
                    ))
                }


            </Tabs>
        </Box>
    );
}

export default SidebarTabs;

import { Box,  } from "@mui/material"

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`} //aria-labelledby is id of sidebar Tabs
            {...other}
            
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}
export default TabPanel;
import {useContext} from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import { Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarFab = () => {
    const {handleDrawerToggle} = useContext(PortfolioContext)

    return (
        <div>
            <Fab
                size="small"
                onClick={handleDrawerToggle}
                sx={{
                    mr: 2, display: { md: "none" },
                    position: "absolute", top: 10, right: 0,
                    backgroundColor: "#4a148c"
                }}
            >
                <MenuIcon  sx={{color:"white"}}/>
            </Fab>
        </div>
    );
}

export default SidebarFab;

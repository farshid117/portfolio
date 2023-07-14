import {useEffect, useState} from 'react';
import { socialLinksInfo } from "../constants/socialLinksInfo"
import { Box, IconButton } from '@mui/material';
import { Slide } from "@mui/material";


const SocialMedia = () => {
    const { instagram, github, whatsapp, telegram } = socialLinksInfo
    const [mounting, setMounting] = useState(false)

    useEffect(() => {
        setMounting(true)

        return () => {
            setMounting(false)
        }
    }, [])
    return (
        <Slide direction="up" in={mounting} style={{ transitionDelay: mounting ? "300ms" : "0ms" }} >
            <Box component="div" sx={{ display: "flex", mt: 2 }}>
                <IconButton component="div" >
                    <a href={github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {github.icon}
                    </a>
                </IconButton>

                <IconButton component="div" >
                    <a href={instagram.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {instagram.icon}
                    </a>
                </IconButton>

                <IconButton component="div" >
                    <a href={whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {whatsapp.icon}
                    </a>
                </IconButton>
                <IconButton component="div" >
                    <a href={telegram.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {telegram.icon}
                    </a>
                </IconButton>

            </Box>

        </Slide>
    );
}

export default SocialMedia;

import { useState, useEffect } from 'react';
import { Badge, Box, LinearProgress, Typography } from "@mui/material"

const Progressbar = ({ color, skillPercent }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, skillPercent);
            });
        }, 300);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" color={color} value={progress} sx={{ height: 10, borderRadius: 15, direction: "ltr" }} />
                </Box>
                <Box sx={{ minWidth: 35, ml:2, }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <Badge color={color} badgeContent={`${Math.round(progress)}%`}  />
                    </Typography> 
                </Box>
            </Box>
        </>
    );
}

export default Progressbar;

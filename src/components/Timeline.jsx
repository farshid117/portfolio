import { useState, useEffect } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';

import { Typography, Slide } from '@mui/material';
import { devEdu } from "../constants/rezumeDetails"


const RezumeTimeline = () => {
    const [mounting, setMounting] = useState(false);

    useEffect(() => {
        setMounting(true)
        return () => {
            setMounting(false)
        }
    }, [])
    return (
        <Timeline position="alternate" >
            {
                devEdu.map((item, index) => {
                    return (
                        <Slide direction='up' in={mounting} style={{transitionDelay:mounting? `${index+3}00ms` : "0ms"}}>
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color={item.colorDot} variant={item.variantDot}>
                                        {item.icon}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '12px', }}>
                                    <Typography variant='h6'>{item.cert}</Typography>
                                    <Typography variant='body1' component="p">{item.major}</Typography>
                                    <Typography variant="caption" component="p">
                                        {item.year}
                                    </Typography>
                                    <Typography variant='caption' component="p">{item.place}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Slide>
                    )
                })
            }
        </Timeline>

    );
}

export default RezumeTimeline;

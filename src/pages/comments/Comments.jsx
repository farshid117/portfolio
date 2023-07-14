import { Avatar, Slide, Typography, Box, Card, CardContent } from '@mui/material';
import {useTheme} from '@mui/material/styles'
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AccountCircleRounded } from '@mui/icons-material';
import Slider from "react-slick";

import { userComments } from "../../constants/useComments"
import { DividerChip } from '../../components';
import myImg from "../../assets/img/khodam.png"
import "./Comments.css"

const Comments = () => {
    const theme = useTheme()
    const [mounting, setMounting] = useState(false)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: mounting ? true : false,
        autoplaySpeed: 2000, //ms -> 4 seconds
        pauseOnHover: true,
        cssEase:"linear",
        arrows:false
    }

    useEffect(() => {
        setMounting(true)

        return () => {
            setMounting(false)
        }
    }, [])


    return (
        <div className={theme.palette.mode === "dark" ? 'Comments dark' : "Comments"}>
            <Helmet>
                <title>سایت علیرضا خیاط‌پور | نظرات</title>
            </Helmet>
            <div className="container mt-3">
                <div className="row">
                    <Slide direction='down' in={mounting} style={{ transitionDelay: mounting ? "200ms" : "0ms" }}>
                        <div className="col-12">
                            <DividerChip borderColor="green"
                                label="نظرات"
                                color="success"
                                icon={<AccountCircleRounded />}
                                avatar={
                                    <Avatar alt="myRezume"
                                        src={myImg}
                                    />
                                }
                            />
                        </div>
                    </Slide>
                </div>
                <div className="row" style={{marginTop:15 }}>
                    <Slider {...settings}>
                        {
                            userComments.map((userComment, index) => (
                                <div key={index}>
                                    <div className="col-12">
                                        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
                                            <Avatar src={userComment.avatar} variant='circular' sx={{ height: 100, width: 100, mb:1, border: "2px solid #fff" }} />
                                        </Box>
                                    </div>
                                    <div className="col-12">
                                        <Typography variant='body1' color="whitesmoke" textAlign="center">
                                            {userComment.fullname}
                                        </Typography>
                                        <Typography variant='body2' color="whitesmoke" textAlign="center" sx={{ mb: 2 }}>
                                            {userComment.jobTitle}
                                        </Typography>
                                    </div>
                                    <div className="col-12">
                                        <Card sx={{ width: { md: 1 / 2 }, m: "0 auto", borderRadius: 5,  }}  >
                                            <CardContent>
                                                <Typography variant='body1' color="text.primary" textAlign="center" sx={{py:4}}>
                                                    {userComment.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>

                                </div>
                            ))
                        }

                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Comments;

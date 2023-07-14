import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async"
import { Avatar, Slide} from '@mui/material';
import { AccountCircleRounded } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles"

import { DividerChip, CoursesCard } from '../../components';
import myImg from "../../assets/img/khodam.png"
import { courses } from "../../constants/courses"

import "./Courses.css"


const Courses = () => {
    const theme = useTheme()

    const [mounting, setMounting] = useState(false);

    useEffect(() => {
        setMounting(true)
        return () => {
            setMounting(false)
        }
    }, [])

    return (
        <div className={theme.palette.mode === "dark" ? "Courses dark" : 'Courses'}>
            <Helmet>
                <title>سایت علیرضا خیاط‌پور | دوره‌‌های من</title>
            </Helmet>
            <div className="container mt-5 mt-md-3 px-5">
                <div className="row">
                    <Slide direction='down' in={mounting} style={{ transitionDelay: mounting ? "200ms" : "0ms" }}>
                        <div className="col-12">
                            <DividerChip borderColor="green"
                                label="دوره‌های گذرانده شده"
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
                <div className="row">
                    {
                        courses.map((item, index) => (
                            <Slide direction='up' in={mounting} style={{ transitionDelay: mounting ? `${index + 1}00ms` : "0ms" }}>
                                <div className="col-12 col-md-6 col-xl-4 mb-3 mt-2">
                                    {/* CoursesCard */}
                                    <CoursesCard index={index} item={item} />
                                </div>
                            </Slide>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Courses;
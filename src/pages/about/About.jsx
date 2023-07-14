import { useEffect, useState } from "react";
import { Avatar } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { AccountCircleRounded, } from '@mui/icons-material';
import { Helmet } from "react-helmet-async";
import { Fade } from "@mui/material";

import { DividerChip, Accardion, SocialMedia, AboutPersonalInfo } from "../../components"
import avatar from "../../assets/background/bg11.png"
import myImg from "../../assets/img/khodam.png"

import "./About.css"

const About = () => {
    const theme = useTheme()
    const [mounting, setMounting] = useState(false)

    useEffect(() => {
        setMounting(true)

        return () => {
            setMounting(false)
        }
    }, [])

    return (
        <div id='AboutMe'>
            <Helmet>
                <title>سایت علیرضا خیاط‌پور | درباره من</title>
            </Helmet>
            {/* todo: personalInfo Section */}
            <section id="personalInfo" className={theme.palette.mode === "dark" ? 'dark' : ''} >
                <div className="container  py-3 w-100">
                    {/* todo: Divider with Chip */}
                    <div className="row  ">
                        <div className="col-12">
                            <DividerChip borderColor="green"
                                label="درباره خودم"
                                color="success"
                                icon={<AccountCircleRounded />}
                                avatar={<Avatar alt="SkillChip"
                                    src={myImg}
                                />}
                            />
                        </div>
                    </div>

                    <div className="row mx-0 w-100 justify-content-center align-items-center ">
                        {/* todo: RightSide avatar */}
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center  ">
                            <Fade in={mounting} style={{ transitionDelay: mounting ? "200ms" : "0ms" }}>
                                <Avatar
                                    alt="ali khayat"
                                    src={avatar}
                                    sx={{ width: 280, height: 280, border: "3px solid #fff", mt: { xs: 3, md: 0 } }}
                                    variant='rounded'
                                    className='img-fluid'
                                />
                            </Fade>
                            <SocialMedia />
                        </div>
                        <Fade in={mounting} style={{ transitionDelay: mounting ? "300ms" : "0ms" }}>
                            <div className="col-12 col-md-8 ">
                                {/* todo: LeftSide PersonslInfo */}
                                <AboutPersonalInfo mounting={mounting} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            {/* todo: Skill Section */}
            <section id="skills" className={theme.palette.mode === "dark" ? 'dark' : ''}>
                <div className="container  py-3 w-100">
                    {/* //! Divider-Chip */}
                    <div className="row ">
                        <div className="col-12">
                            <DividerChip color="warning"
                                borderColor="#ef6c00"
                                label="مهارت‌های من"
                                avatar={<Avatar alt="SkillChip"
                                    src={myImg}
                                />}
                            />
                        </div>
                    </div>
                    <div className="row mt-1" >
                        {/* //! ChipLabel progressbar */}
                        <div className="col-12 col-md-10 mx-md-auto">
                            <Accardion />
                        </div>
                    </div>



                </div>
            </section>
        </div>
    );
}

export default About;

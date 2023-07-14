import { useState, useEffect } from 'react';
import { Avatar, Button, useMediaQuery, Slide } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { AccountCircleRounded } from '@mui/icons-material';
import { Helmet } from "react-helmet-async"

import { DividerChip } from '../../components';
import myImg from "../../assets/img/khodam.png"
import { RezumeTimeline, RezumeModal } from '../../components';

import "./Rezume.css"


const Rezume = () => {
    const theme = useTheme()

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [mounting, setMounting] = useState(false);

    const isMdUp = useMediaQuery("(min-width:768px)");
    console.log("isMdUp: ", isMdUp);

    const handleShowModal = () => {
        setShow(prev => !prev)
    }

    const handleShowModal2 = () => {
        setShow2(prev => !prev)
    }

    useEffect(() => {
        setMounting(true)
        return () => {
            setMounting(false)
        }
    }, [])

    useEffect(() => {
        if (isMdUp) {
            setShow(false)
            setShow2(false)
        }
    }, [isMdUp])

    return (
        <div className={theme.palette.mode === "dark" ? "Rezume dark" : 'Rezume'}>
            <Helmet>
                <title>سایت علیرضا خیاط‌پور | رزومه‌من</title>
            </Helmet>
            <div className="container mt-5">
                <div className="row">
                    <Slide direction='down' in={mounting} style={{ transitionDelay: mounting ? "200ms" : "0ms" }}>
                        <div className="col-12">
                            <DividerChip borderColor="green"
                                label="رزومه من"
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
                {/* todo: Breakpoint labtap and pc */}

                {/* todo: تحصیلات */}
                <div className="row d-none d-md-flex flex-md-column flex-lg-row align-items-md-center" >
                    <div className="col-12 col-md-10 col-lg-6 mt-md-3">
                        <div className="card">
                            <div className="card-body" >
                                <DividerChip borderColor="#4dabf5"
                                    label="تحصیلات"
                                    color="info"
                                    icon={<AccountCircleRounded />}
                                    avatar={
                                        <Avatar alt="MyEdu"
                                            src={myImg}
                                        />
                                    }
                                />
                                <div className='d-none d-md-block'>
                                    <RezumeTimeline />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* todo: تجربیات */}
                    <div className="col-12 col-md-10 col-lg-6 mt-md-3">
                        <div className="card">
                            <div className="card-body">
                                <DividerChip borderColor="#ef6c00"
                                    label="تجربیات"
                                    color="warning"
                                    icon={<AccountCircleRounded />}
                                    avatar={
                                        <Avatar alt="SkillChip"
                                            src={myImg}
                                        />
                                    }
                                />
                                <div className='d-none d-md-block'>
                                    <RezumeTimeline />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* todo: Breakpoint Mobile and Tablet width Modal */}
                <div className="row d-md-none  justify-content-center mt-3">
                    <div className="col-4 ">
                        <div className='d-flex justify-content-center  '>
                            <Button variant='contained' sx={{ mr: 1 }} onClick={handleShowModal}>تحصیلات</Button>
                            <Button variant='contained' color='warning' onClick={handleShowModal2}>تجربیات</Button>
                        </div>

                        <div>
                            <RezumeModal show={show} fullscreen={true}
                                handleShowModal={handleShowModal}
                                setShow={setShow}
                                headerColor="#4dabf5"
                                bodyColor="#000"
                                title= "تحصیلات"
                            >
                              <RezumeTimeline />
                            </RezumeModal>

                            <RezumeModal show={show2} fullscreen={true}
                                handleShowModal={handleShowModal2}
                                setShow={setShow2}
                                headerColor="#ef6c00"
                                bodyColor="#000"
                                title= "تجربیات"
                            >
                              <RezumeTimeline />
                            </RezumeModal>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rezume;

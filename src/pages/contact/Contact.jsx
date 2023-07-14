import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import { Avatar, IconButton, InputAdornment, TextField, Button, Card, CardContent, Slide } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import {
    AccountCircleRounded,
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
} from "@mui/icons-material";
import {DividerChip} from '../../components';
import myImg from "../../assets/img/khodam.png"
import worldMap from "../../assets/background/map.svg";
import { contactSchema } from "../../validations/contactvalidation"

import "./Contact.css"

const Contact = () => {
    const theme = useTheme()


    /* formik */
const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
}
const formik = useFormik({
    initialValues : contactInputNames,
    validationSchema: contactSchema,
    onSubmit: (values) => {
        console.log("Form values is: ", values)
    }
})
    return (
        <section className={theme.palette.mode === "dark" ? "Contact dark" : "Contact"}>

            <Helmet>
                <title>سایت علیرضا خیاط‌پور |  ارتباط بامن</title>
            </Helmet>
            {/* todo: contact DividerChip Section */}
            <div className="contactcontainer " >
                <div className="container  py-3 w-100">
                    {/* todo: Divider with Chip */}
                    <div className="row">
                        <div className="col-12">
                            <DividerChip borderColor="#8e24aa"
                                label="ارتباط با‌من"
                                color="secondary"
                                icon={<AccountCircleRounded />}
                                avatar={<Avatar alt="SkillChip" src={myImg} />}
                            />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 text-center d-flex justify-content-center ">
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Card className='' sx={{
                                    backgroundImage: `url(${worldMap})`,
                                    backgroundColor: theme.palette.mode === "dark" ? "#212121" : "",
                                    py: { md: 5 }, width: { md: "75%" }
                                }}>
                                    <CardContent>
                                        <from autoComplete="off" onSubmit={formik.handleSubmit} >
                                            <div className="row justify-content-center">
                                                <div id="formEle" className="col-12 col-md-12">
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 ">
                                                            <TextField
                                                                margin="normal"
                                                                variant='outlined' //default value
                                                                label="نام و نام‌خانوادگی"
                                                                name="fullname"
                                                                id="fullname"
                                                                type="text"
                                                                autoComplete="off"
                                                                size='small'
                                                                color='secondary'
                                                                fullWidth
                                                                focused
                                                                helperText={
                                                                    formik.touched.fullname ?
                                                                    formik.errors.fullname : " "
                                                                }
                                                                error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                                                value={formik.values?.fullname}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                               
                                                                                edge="end"
                                                                            >
                                                                                <Face6Rounded />
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="col-12 col-md-6 ">
                                                            <TextField
                                                                margin="normal"
                                                                variant='outlined' //default value
                                                                label={"ایمیل را وارد کنید"}
                                                                name="email"
                                                                id="email"
                                                                type="text"
                                                                autoComplete="off"
                                                                size='small'
                                                                color='secondary'
                                                                fullWidth
                                                                focused
                                                                helperText={
                                                                    formik.touched.email ?
                                                                        formik.errors.email : " "
                                                                }
                                                                error={Boolean(formik.touched.email && formik.errors.email)}
                                                                value={formik.values?.email}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                               
                                                                                edge="end"
                                                                            >
                                                                                <EmailRounded />
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-md-12">
                                                            <TextField
                                                                margin="normal"
                                                                variant='outlined' //default value
                                                                label={"موضوع را وارد کنید"}
                                                                name="subject"
                                                                id="subject"
                                                                type="text"
                                                                autoComplete="off"
                                                                size='medium'
                                                                color='secondary'
                                                                fullWidth
                                                                focused
                                                                helperText={
                                                                    formik.touched.subject ?
                                                                        formik.errors.subject : " "
                                                                }
                                                                error={Boolean(formik.touched.subject && formik.errors.subject)}
                                                                value={formik.values?.subject}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                               
                                                                                edge="end"
                                                                            >
                                                                                <SubjectRounded />
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <TextField
                                                                margin="normal"
                                                                variant='outlined' //default value
                                                                label="متن پیام"
                                                                name="message"
                                                                id="message"
                                                                type="text"
                                                                autoComplete="off"
                                                                multiline
                                                                rows={6}
                                                                fullWidth
                                                                color='secondary'
                                                                helperText={
                                                                    formik.touched.message ?
                                                                        formik.errors.message : " "
                                                                }
                                                                error={Boolean(formik.touched.message && formik.errors.message)}
                                                                value={formik.values?.message}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-12 d-flex justify-content-center">
                                                            <Button variant='contained' color='secondary'  >ارسال</Button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </from>
                                    </CardContent>
                                </Card>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

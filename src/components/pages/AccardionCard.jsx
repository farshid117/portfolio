import { Avatar, Chip, Divider } from "@mui/material"
import { Box } from "@mui/system"

import { ChipArray, DividerChip, Progressbar } from ".."
import { backEndPackage, frontPackage } from "../../constants/npmPackages"

import { htmlImg, cssImg, jsImg, reactImg, nodeImg } from "../../assets/icons"


export const AccardionCardFrontend = () => {
    return (
        <div className="card" >
            <div className="card-header d-flex justify-content-center align-items-center bg-primary-subtle " style={{ height: 70, background: "" }} >
                <Chip
                    sx={{ p: { xs: 2, md: 3 }, fontWeight: "bold", fontSize: 20, direction: "rtl" }}
                    label="FrontEnd Skills"
                    color='info'
                    avatar={<Avatar alt="reduxAvatar"
                        src={require("../../assets/img/khodam.png")}
                    />}
                />
            </div>
            {/* todo: Card-Body */}
            <div className="card-body " >
                <div className="col-12 mb-4 ">
                    <Chip

                        label="Html"
                        color='success'
                        icon={<Box component="img" src={htmlImg} sx={{ height: 25, width: 25, display: "flex", alignItems: "center", borderRadius: "50%" }} />}
                    />
                    <Progressbar color="success" skillPercent={95} />
                </div>

                <Divider variant="middle" />

                <div className="col-11 mb-2 ">
                    <Chip

                        label="Css"
                        color='primary'
                        icon={<Box component="img" src={cssImg} sx={{ height: 25, display: "flex", alignItems: "center", borderRadius: "50%" }} />}
                    />
                    <Progressbar color="primary" skillPercent={90} />
                </div>
                <div className="col-11 mb-2 ">
                    <Chip

                        label="BootStrap"
                        color='primary'
                        avatar={<Avatar alt="cssAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="primary" skillPercent={85} />
                </div>
                <div className="col-11 mb-4 ">
                    <Chip

                        label="Tailwind"
                        color='primary'
                        avatar={<Avatar alt="cssAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="primary" skillPercent={40} />
                </div>

                <Divider variant="middle" />

                <div className="col-10 mb-4 ">
                    <Chip

                        label="JavaScript"
                        color='secondary'
                        icon={<Box component="img" src={jsImg} sx={{ height: 20, display: "flex", alignItems: "center", borderRadius: "50%" }} />}
                    />
                    <Progressbar color="secondary" skillPercent={85} />
                </div>

                <Divider variant="middle" />

                <div className="col-9 mb-2 ">
                    <Chip

                        label="ReactJs"
                        color='warning'
                        icon={<Box component="img" src={reactImg} sx={{ height: 25, display: "flex", alignItems: "center" }} />}
                    />
                    <Progressbar color="warning" skillPercent={75} />
                </div>
                <div className="col-9 mb-2 ">
                    <Chip

                        label="React-Bootstrap"
                        color='warning'
                        avatar={<Avatar alt="RbAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="warning" skillPercent={90} />
                </div>
                <div className="col-9 mb-4 ">
                    <Chip

                        label="Material Ui"
                        color='warning'
                        avatar={<Avatar alt="MuiAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="warning" skillPercent={65} />
                </div>

                <Divider variant="middle" />

                <div className="col-8 mb-4 ">
                    <Chip

                        label="redux"
                        color='info'
                        avatar={<Avatar alt="reduxAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="info" skillPercent={10} />
                </div>

                <div className="col-8 mb-4 ">
                    <Chip

                        label="PWA"
                        color='success'
                        avatar={<Avatar alt="reduxAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="success" skillPercent={5} />
                </div>

                <div className="col-8 mb-4 ">
                    <Chip

                        label="NextJs"
                        color='error'
                        avatar={<Avatar alt="nextAvatar"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="error" skillPercent={5} />
                </div>

            </div>
            {/* todo: Card-footer */}
            <div className="card-footer">
                <div className="col-12">
                    <DividerChip color="info"
                        borderColor="#007aff"
                        label="پکیچ‌های یادگیری شده فرانت ‌اند"
                        avatar={<Avatar alt="SkillChip"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                </div>
                <ChipArray data={frontPackage} />
            </div>
        </div>

    )

}

export const AccardionCardBackend = () => {
    return (
        <div className="card pb-md-3" >
            <div className="card-header d-flex justify-content-center align-items-center bg-primary-subtle " style={{ height: 70, background: "" }} >
                <Chip
                    sx={{ p: { xs: 2, md: 3 }, fontWeight: "bold", fontSize: 20, direction: "rtl" }}
                    label="BackEnd Skills"
                    color='info'
                    avatar={<Avatar alt="reduxAvatar"
                        src={require("../../assets/img/khodam.png")}
                    />}
                />
            </div>
            {/* todo: Card-Body */}
            <div className="card-body " >
                <div className="col-12 mb-4 ">
                    <Chip

                        label="NodeJs"
                        color='success'
                        icon={<Box component="img" src={nodeImg} sx={{ height: 25, width: 25, display: "flex", alignItems: "center", borderRadius: "50%" }} />}
                    />
                    <Progressbar color="success" skillPercent={70} />
                </div>
                <div className="col-12 mb-4 ">
                    <Chip

                        label="Express"
                        color='warning'
                        avatar={<Avatar alt="JavaScript"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="warning" skillPercent={75} />
                </div>
                <Divider variant="middle" />

                <div className="col-11 mb-4 ">
                    <Chip

                        label="MongoDB"
                        color='secondary'
                        avatar={<Avatar alt="JavaScript"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="secondary" skillPercent={60} />
                </div>
                <div className="col-11 mb-4 ">
                    <Chip

                        label="Mongoose"
                        color='info'
                        avatar={<Avatar alt="JavaScript"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                    <Progressbar color="info" skillPercent={78} />
                </div>
            </div>
            {/* todo: Card-footer */}
            <div className="card-footer">
                <div className="col-12">
                    <DividerChip color="info"
                        borderColor="#007aff"
                        label="پکیچ‌های یادگیری شده بک‌اند"
                        avatar={<Avatar alt="SkillChip"
                            src={require("../../assets/img/khodam.png")}
                        />}
                    />
                </div>
                <ChipArray data={backEndPackage} />
            </div>
        </div>

    )

}
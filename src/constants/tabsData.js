
import { FavoriteOutlined, HomeRounded, FaceRounded, TextSnippetRounded, TerminalRounded, MessageRounded } from '@mui/icons-material';
import { purple } from "@mui/material/colors";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}` //one string became prop writen into ""
        //aria-controls is id of Tabpanels
        //aria-contols ~ data-bs-toggle in Bootstrap
    }
}
export const tabsData = () =>{
 
    const  tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded sx={{ color: purple["A200"], mr: 1 }} />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded sx={{ color: purple["A200"], mr: 1 }} />, ...tabProps(1) },
        { label: "رزومه من", icon: <TextSnippetRounded sx={{ color: purple["A200"], mr: 1 }} />, ...tabProps(2) },
        { label: "دوره‌های گذرانده شده", icon: <TerminalRounded sx={{ color: purple["A200"], mr: 1 }} />, ...tabProps(3) },
        { label: "نظرات دانشجویان", icon: <MessageRounded sx={{ color: purple["A200"], mr: 1 }} />, ...tabProps(4) },
        { label: "ارتباط بامن", icon: <FavoriteOutlined sx={{ color: "red", mr: 1 }} />, ...tabProps(5) },
    ]
    return tabs
}

import { Avatar, Typography, Box} from "@mui/material";



const SidebarHeader = () => {
   
    return (


        <Box sx={{ mt: 2 }}>
          
            <Avatar
                alt="alireza khayatpour"
                src={require("../../assets/img/khodam.png")}
                sx={{ width: 120, height: 120, margin: "0 auto", border: "3px solid #fff" }}
            />
            <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: "bold", color: "whitesmoke" }}>مهندس{"  "} علیرضا خیاط‌پور</Typography>
            <Typography variant="caption" sx={{ marginTop: 1, color: "whitesmoke" }}>برنامه نویس فول‌استک MERN</Typography>
        </Box>

    );
}

export default SidebarHeader;

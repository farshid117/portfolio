
import { ToastContainer } from "react-toastify"
import { grey } from "@mui/material/colors";
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from "@mui/material";


import { Sidebar, SidebarFab, SidebarDrawer, AppContainer,
   ContentContainer, ContentsTabList } from "./components"



const App = () => {

  return (
    <AppContainer>
      <div className="App" >
        <Grid container sx={{ height: "100vh", overflow: "hidden" }}>
          {/* todo: Sidebar */}
          <Grid xs md={3} lg={2} sx={{ bgcolor: grey[900], textAlign: "center", height:"100%" }}>
            <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky",zIndex:10000  }} >
              <Sidebar />
            </Box>
            <SidebarFab />
            <SidebarDrawer />
          </Grid>

          {/* todo: Content */}
          <ContentContainer>
            <ContentsTabList style={{height:"100%"}} />
          </ContentContainer>

        </Grid>

        <ToastContainer rtl={true} />
      </div>
    </AppContainer>


  );
}
export default App;

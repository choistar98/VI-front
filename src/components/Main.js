import { Grid } from "@mui/material";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Routes,Route } from "react-router-dom";





function Main() {
    return (
      <Grid container style={{ flexGrow: 1, width: '100%', height: '100vh', overflow: 'auto' }}>
        <Grid item xs={2} style={{ borderRight: "1px solid black" }}>
          <SideBar></SideBar>
        </Grid>
        <Grid item xs={10} style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
          <Routes>
            <Route path='/abc' element={<MainContainer selectedSubMenu="abc"/>} />
          </Routes>
        </Grid>
      </Grid>
    )
  }





export default Main;
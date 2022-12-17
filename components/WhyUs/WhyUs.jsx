import React, { useEffect } from "react";
import axios from "axios";
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import {Typography, styled, Grid, Container, Button, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { getStrapiMedia } from "../../lib/media";


const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const WhyUs = ({whyUs}) => {
  
  const classes = useStyles();

  return (
    <div className={classes.root} sx={{ background: "black" }}>

      <Grid spacing={4} container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: "5rem" }}>
        <Grid 
          item 
          sx={{
            mt: "4rem", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column" 
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontWeight: {lg: "600", md: "500", sm: "500", xs: "500"},
              color: "#3D5467",
              fontSize: {lg: "3.5rem", md: "3rem", sm: "3rem", xs: "2.2rem"},
              zIndex: 1 
            }}
          >
            {whyUs.header}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"} }}>
          {whyUs.KeyPoints.map((keypoint, index) => {
            return (
             <Grid sx={{ m: 4 }}>
             <Box
               sx={{
                 width: {
                   lg:300,
                   md: 280,
                   sm: 270,
                   xs: 250
                 },
                 height: {
                   lg: 300,
                   md: 280,
                   sm: 270,
                   xs: 250
                 },
                 display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row",
                 backgroundColor: '#F1EDEE',
                 border: "1px solid #afc2d154",
                 boxShadow: "1px 10px 47px -34px rgba(0,0,0,0.79), 1px 10px 23px -43px rgba(0,0,0,0.79) inset"
               }}
             >
               <Grid
                 sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}
               >
                 <Image
                  src={getStrapiMedia(keypoint.icon)}
                  // layout="fill"
                  width="32"
                  height="32"
                  objectFit="cover"
                  alt="some image"
                />
                 <Typography
                   variant="h4"
                   sx={{
                     fontWeight: "500",
                     color: "#3D5467",
                     fontSize: "1.5rem",
                     zIndex: 1, 
                     mt: "2rem"
                   }}
                 >
                   {keypoint.boxHeader}
                 </Typography>
                 <Typography
                   variant="h4"
                   sx={{
                     fontWeight: "300",
                     color: "#3D5467",
                     fontSize: "1.1rem",
                     zIndex: 1, 
                     mt: "2rem",
                     maxWidth: "10rem"
                   }}
                 >
                   {keypoint.boxSubHeader}
                 </Typography>
               </Grid>
             </Box>
           </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyUs;
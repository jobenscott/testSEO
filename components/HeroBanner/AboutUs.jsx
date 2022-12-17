import React, { useEffect } from "react";
import axios from "axios";
import Image from 'next/image';
import {Typography, styled, Grid, Container, Button, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { getStrapiMedia } from "../../lib/media";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff"
  }
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#F2EFEA",
  backgroundColor: "#DB5461",
  '&:hover': {
    backgroundColor: "#ce858c",
  },
}));


const HeroBanner = ({banner}) => {
  const classes = useStyles();
  return (
    <Container disableGutters maxWidth={false}>
       {banner.Hero &&
      <Grid sx={{ background: "black", left: 0, position: "absolute", height:{ lg: "500px", md: "600px", sm: "450px", xs: "300px"}, width: "100%", zIndex: "-1" }}>
        <Grid sx={{ left: 0, position: "absolute",  height:{ lg: "500px", md: "600px", sm: "450px", xs: "300px"}, width: "100%", overflow: "hidden", opacity: ".35" }}>
        <Image
              src={getStrapiMedia(banner.Hero)}
              layout="fill"
              objectFit="cover"
              alt="some image"
            />
        </Grid>
      </Grid>
      }
      <Grid 
        spacing={{
          xl: 20,
          lg: 15,
          md: 8,
          sm: 8,
          xs: 0
        }} 
        container 
        sx={{ 
          display: "flex", 
          justifyContent: "center",
          height:{ lg: "500px", md: "600px", sm: "450px", xs: "300px"},
          alignItems: "center", 
          flexDirection: "column" 
        }}
      >
        <Grid
          item 
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            flexDirection: "column" 
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ 
                zIndex: 1, 
                color: "#F2EFEA",
                fontWeight: {lg: "800", md: "600", sm: "600", xs: "600"},
                fontSize: {lg: "4rem", md: "3rem", sm: "2.5rem", xs: "1.7rem"},
                mt: {lg: 0, md: 0, sm: "3rem", xs: 0}
              }}
            >
              {banner.Header}
            </Typography>
          </Grid>
          <Grid item>
            <Typography 
              sx={{ 
                zIndex: 1, 
                color: "#F2EFEA", 
                fontWeight: "300", 
                fontSize: {lg: "2.5rem", md: "2rem", sm: "1.5rem", xs: "1.2rem"} 
              }} 
              variant="subtitle1" 
              gutterBottom
            >
              {banner.subHeader}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroBanner;
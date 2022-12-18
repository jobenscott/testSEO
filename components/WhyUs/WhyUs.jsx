import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const whyUsBoxes = [
  {
    id: "1",
    boxHeader: "Clean Websites",
    boxSubHeader: "Clean, responsive, and accessible websites."
  },
  {
    id: "2",
    boxHeader: "SEO is our priority",
    boxSubHeader: "Your online presence matters. We know that."
  },
  {
    id: "3",
    boxHeader: "Catered to you",
    boxSubHeader: "One size does not fit all. We get it."
  }
];

const WhyUs = () => {

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
              fontWeight: { lg: "600", md: "500", sm: "500", xs: "500" },
              color: "#3D5467",
              fontSize: { lg: "3.5rem", md: "3rem", sm: "3rem", xs: "2.2rem" },
              zIndex: 1
            }}
          >
            Why Choose Us?
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" } }}>
          {whyUsBoxes.map((keypoint, index) => {
            return (
              <Grid sx={{ m: 4 }} key={keypoint.id}>
                <Box
                  sx={{
                    width: {
                      lg: 300,
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
                      src="/home.png"
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
          <Link color="#3D5467" href="/about">
            <Typography
            variant="h6"
            sx={{
              color: "black",
              textDecoration: "underline",
              fontSize: { lg: "1rem", md: "1rem", sm: "1.2rem", xs: "1em" },
            }}
          >
            See more
          </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyUs;
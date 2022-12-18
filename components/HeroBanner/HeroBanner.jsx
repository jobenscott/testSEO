import { Button, Container, Grid, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import Link from 'next/link';


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


const HeroBanner = () => {
  const classes = useStyles();
  return (
    <Container disableGutters maxWidth={false}>
      <Grid sx={{ background: "black", left: 0, position: "absolute", height: { lg: "680px", md: "600px", sm: "450px", xs: "300px" }, width: "100%", zIndex: "-1" }}>
        <Grid sx={{ left: 0, position: "absolute", height: { lg: "680px", md: "600px", sm: "450px", xs: "300px" }, width: "100%", overflow: "hidden", opacity: ".15" }}>
          <Image
            src="/hero_main.png"
            layout="fill"
            objectFit="cover"
            alt="some image"
            priority={true}
          />
        </Grid>
      </Grid>
      <Grid
        spacing={{
          xl: 50,
          lg: 30,
          md: 15,
          sm: 15,
          xs: 0
        }}
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: { lg: "680px", md: "600px", sm: "450px", xs: "300px" },
          alignItems: "center",
          flexDirection: "row"
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
              variant="h1"
              gutterBottom
              sx={{
                zIndex: 1,
                color: "white",
                fontWeight: { lg: "800", md: "600", sm: "600", xs: "600" },
                fontSize: { lg: "4rem", md: "3rem", sm: "2.5rem", xs: "1.7rem" },
                mt: { lg: 0, md: 0, sm: "3rem", xs: 0 }
              }}
            >
              Great Sites, Better SEO
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                zIndex: 1,
                color: "white",
                fontWeight: "300",
                fontSize: { lg: "2.5rem", md: "2rem", sm: "1.5rem", xs: "1.2rem" }
              }}
              variant="h2"
              gutterBottom
            >
              Lets us help you grow!
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Link href="/contact" passHref>
            <ColorButton sx={{ width: { lg: "18rem", md: "18rem", sm: "17rem", xs: "15rem" }, height: { lg: "3.5rem", md: "3.5rem", sm: "3.2rem", xs: "3rem" }, borderRadius: 10, fontSize: { lg: "1.25rem", md: "1.25rem", sm: "1.2rem", xs: "1rem" }, mt: { lg: 0, md: 0, sm: "-8rem", xs: "-4rem" } }} variant="contained">
              Learn More
            </ColorButton>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroBanner;
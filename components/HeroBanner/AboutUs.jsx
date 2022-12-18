import { Button, Container, Grid, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


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
      <Grid 
        spacing={{
          xl: 10,
          lg: 8,
          md: 5,
          sm: 5,
          xs: 0
        }} 
        container 
        sx={{ 
          display: "flex", 
          justifyContent: "center",
          height:{ lg: "400px", md: "400px", sm: "300px", xs: "200px"},
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
              variant="h1"
              gutterBottom
              sx={{ 
                zIndex: 1, 
                color: "white",
                fontWeight: {lg: "800", md: "600", sm: "600", xs: "600"},
                fontSize: {lg: "3.5rem", md: "3.5rem", sm: "3rem", xs: "1.5rem"},
              }}
            >
              Focus on your business
            </Typography>
          </Grid>
          <Grid item>
            <Typography 
              sx={{ 
                zIndex: 1, 
                color: "white", 
                fontWeight: "300", 
                fontSize: {lg: "2rem", md: "2rem", sm: "1.5rem", xs: "1rem"} 
              }} 
              variant="h2" 
              gutterBottom
            >
              We'll take care of your online presence
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroBanner;
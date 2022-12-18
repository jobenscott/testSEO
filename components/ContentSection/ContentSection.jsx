import { Button, Grid, styled, Typography } from "@mui/material";
import { classes, Root } from "./styles";
import Link from "next/link";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#F2EFEA",
    backgroundColor: "#DB5461",
    '&:hover': {
        backgroundColor: "#ce858c",
    },
}));


const ContentSection = ({ content }) => {
    return (
        <Root>
            <Grid
                container
                spacing={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mb: "5rem",
                    fontWeight: "200"
                }}
            >
                <Grid item>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                zIndex: 1,
                color: "white",
                fontWeight: { lg: "500", md: "500", sm: "500", xs: "400" },
                fontSize: { lg: "3rem", md: "2.5rem", sm: "2rem", xs: "1.7rem" },
                mt: { lg: 7, md: 7, sm: 5, xs: 5 }
              }}
            >
              Why Choose Us?
            </Typography>
          </Grid>
                <Grid
                    item
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        maxWidth: {lg: "55%", md: "55%", sm: "75%", xs: "75%"},
                        mb: 2
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{fontSize: { lg: "1.2", md: "1.2", sm: "1.2rem", xs: "1rem" }}}
                        className={classes.title}
                    >
                        We understand that running a business can be overwhelming, and the last thing you want to worry about is the technicalities of your website. That's where we come in. Our team of experts specializes in building clean, concise websites that adhere to the latest SEO standards.
                    </Typography>
                </Grid>
                <Grid item sx={{padding: 0}}>
                    <Link href="/contact" passHref>
                        <ColorButton sx={{ width: { lg: "15rem", md: "15rem", sm: "12rem", xs: "10rem" }, height: { lg: "3rem", md: "3rem", sm: "2.7rem", xs: "2.5rem" }, borderRadius: 10, fontSize: { lg: "1.25rem", md: "1.25rem", sm: "1.2rem", xs: "1rem" } }} variant="contained">
                            Learn More
                        </ColorButton>
                    </Link>
                </Grid>
            </Grid>
        </Root>
    );
};

export default ContentSection;
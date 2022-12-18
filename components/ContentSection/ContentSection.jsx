import { Button, Grid, styled, Typography } from "@mui/material";
import { classes, Root } from "./styles";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#F2EFEA",
    backgroundColor: "#DB5461",
    '&:hover': {
        backgroundColor: "#ce858c",
    },
}));


const ContentSection = ({content}) => {
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
                    mb: "3rem",
                    }}
            >
                <Grid 
                    item 
                    sx={{ 
                        mt: "4rem", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        flexDirection: "column",
                        maxWidth: "80%"
                        }}
                    >
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum egestas nisl, vel laoreet tortor molestie sagittis. Cras pharetra, magna at mollis pulvinar, quam sem lobortis dui, eu venenatis urna elit tincidunt elit. Praesent sodales ipsum in tortor bibendum porta. Praesent lacinia scelerisque dapibus. Sed volutpat imperdiet elit, nec tristique sapien tristique id. Quisque convallis lacinia bibendum. Vestibulum nec aliquam tellus, sit amet tristique tortor. Integer feugiat, eros in mattis fermentum, lectus arcu aliquam ex, quis eleifend enim mi iaculis erat. Suspendisse id feugiat mi. Aliquam egestas eros nec rhoncus sodales. In rhoncus justo nisl. Duis feugiat, orci ut molestie imperdiet, arcu lorem facilisis urna, vel placerat nisi elit ut enim. Aenean nisl arcu, suscipit vel malesuada vel, tempus eu nulla. Aliquam egestas eros nec rhoncus sodales. In rhoncus justo nisl.
                    </Typography>
                </Grid>
            </Grid>
        </Root>
    );
};

export default ContentSection;
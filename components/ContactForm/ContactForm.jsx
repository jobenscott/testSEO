import { Button, Grid, styled, Typography, TextField } from "@mui/material";
import { classes, Root } from "./styles";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#F2EFEA",
    backgroundColor: "#DB5461",
    '&:hover': {
        backgroundColor: "#ce858c",
    },
}));

const CssTextField = styled(TextField)({
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#F2EFEA',
        },
        '&:hover fieldset': {
            borderColor: '#F2EFEA',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#F2EFEA',
        },
    },
});



const ContactForm = ({saveEmail, setEmail, inTouch, email }) => {

    useEffect(() => {
        
    }, [inTouch]);

    return (
        <Root>
            <Grid
                container
                // spacing={{lg: 4, md: 4, sm: 10, xs: 10}}
                spacing={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mb: "3rem"
                }}
            >
                <Grid
                    item
                    sx={{
                        mt: "8rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        maxWidth: "80%"
                    }}
                >
                    <Typography
                        variant="h4"
                        className={classes.title}
                        sx={{
                            zIndex: 1,
                            color: "white",
                            fontWeight: "500",
                            fontSize: { lg: "3.5rem", md: "3.5rem", sm: "2.5rem", xs: "2rem" }
                        }}
                    >
                        Still interested?
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{
                            zIndex: 1,
                            color: "white",
                            fontWeight: "500",
                            fontSize: { lg: "1.7rem", md: "1.7rem", sm: "1.2rem", xs: "1rem" }
                        }}
                        variant="h2"
                        gutterBottom
                    >
                       We'll reach out when we're ready!
                    </Typography>
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
                    <CssTextField
                        value={inTouch ? "" : email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ width: {lg: "20rem", md: "20rem", sm: "15rem", xs: "15rem"} }}
                        id="email"
                        label="Email"
                        inputProps={{ style: { color: "white" } }}
                        maxRows={4}
                    />
                </Grid>
                <Grid item>
                    <ColorButton onClick={(e) => saveEmail()} sx={{ width: { lg: "14rem", md: "14rem", sm: "12rem", xs: "12rem" }, height: { lg: "3rem", md: "3rem", sm: "2.5rem", xs: "2rem" }, borderRadius: 10, fontSize: { lg: "1.25rem", md: "1.25rem", sm: "1.2rem", xs: "1rem" } }} variant="contained">
                        Submit
                    </ColorButton>
                </Grid>
            </Grid>
        </Root>
    );
};

export default ContactForm;
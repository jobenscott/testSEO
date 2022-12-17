import React, { useEffect } from "react";
import axios from "axios";
import { Typography, styled, Grid, Container, Button, Box, TextField} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import { Root, classes } from "./styles";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#F2EFEA",
    backgroundColor: "#DB5461",
    '&:hover': {
        backgroundColor: "#ce858c",
    },
}));


const ContactForm = () => {
    return (
        <Root>
            <Grid
                container
                spacing={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    mb: "3rem"
                }}
            >
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
                    <TextField
                        id="multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                    />
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
                        variant="h4"
                        className={classes.title}
                    >
                        Interested in learning more?
                    </Typography>
                </Grid>
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
                        Let us know a little about your business and provide your email and we will reach out as soon as possible.
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        </Root>
    );
};

export default ContactForm;
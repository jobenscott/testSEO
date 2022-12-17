import React, { useEffect } from "react";
import axios from "axios";
import {Typography, styled, Grid, Container, Button, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Image from 'next/image';
import { Root, classes } from "./styles";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#F2EFEA",
    backgroundColor: "#DB5461",
    '&:hover': {
        backgroundColor: "#ce858c",
    },
}));


const Contact = () => {
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
                    <Typography
                        variant="h4"
                        className={classes.title}
                    >
                        Let us know!
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    sx={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        flexDirection: "row" 
                        }}
                >
                    <Grid sx={{ m: 4 }}>
                        <ColorButton 
                            // requires inline, look at work example for non-inline example, especially if this impacts performance
                            sx={{ 
                                width: {lg:"18rem", md: "18rem", sm: "18rem", xs: "15rem"}, 
                                height: {lg: "3.5rem", md: "3.5rem", sm: "3.5rem", xs: "3rem"}, 
                                borderRadius: 10, 
                                fontSize: {lg: "1.25rem", md: "1.25rem", sm: "1.25rem", xs: "1rem"} 
                            }} 
                        >
                            Learn More
                        </ColorButton>
                    </Grid>
                </Grid>
            </Grid>
        </Root>
    );
};

export default Contact;
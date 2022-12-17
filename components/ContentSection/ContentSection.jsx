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
                        {content}
                    </Typography>
                </Grid>
            </Grid>
        </Root>
    );
};

export default ContentSection;
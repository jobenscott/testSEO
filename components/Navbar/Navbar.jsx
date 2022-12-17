import React, { useEffect, useState } from "react";
import Head from 'next/head'  
import {Typography, styled, Grid, Container, Button, Box, AppBar, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { useRouter } from 'next/router'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    background: "#F1EDEE",
    color: "#3D5467",
    minHeight: "5rem"
  }
}))

function Navbar() {
  const classes = useStyles()
  const router = useRouter()

  const onHomeClick = () => {
    router.push('/')
  }

  const [strapiData, setStrapiData] = useState(null)

  async function getStrapiData() {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/navbar/?populate[navlinks][populate]=*`
      );
      setStrapiData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStrapiData();
  }, []);
  return (
    <div>
      <Head>
        <title>My Navbar</title>
      </Head>
      {strapiData ? (
        <AppBar className={classes.nav} position="static">
          <Toolbar>
            <Typography onClick={onHomeClick} variant="h6" className={classes.title} sx={{mt: 1}}>
              {"Xpand"}
            </Typography>
            {strapiData.data && strapiData.data?.attributes.navlinks.map(link => (
              <Button 
                key={link.id}
                color="inherit"
                onClick={() => router.push(link.path)}
                width={200}
                sx={{mt: 1}}
              >
                {link.path}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      ) : null}
    </div>
  )
}

export default Navbar;
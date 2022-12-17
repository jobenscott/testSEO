import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Navbar from '../components/Navbar/Navbar'
import WhyUs from '../components/WhyUs/WhyUs'
import Contact from '../components/ContactUs/ContactUs'
import { Typography, styled, Grid, Container, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import App from "next/app";
import { fetchAPI } from "../lib/api";

export default function Index({
  banner,
  whyUs,
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%" }}>
          <HeroBanner banner={banner} />
        </Grid>
        <Grid item sx={{ background: "#F1EDEE", width: "100%" }}>
          <Container maxWidth="sm" sx={{}}>
            <WhyUs whyUs={whyUs} />
          </Container>
        </Grid>
        <Grid item sx={{ background: "#3D5467", width: "100%" }}>
          <Container maxWidth="sm" sx={{}}>
            <Contact />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}


export async function getStaticProps() {
  // Run API calls in parallel
  const home = await fetchAPI("/home", {
    populate: {
      banner: {
        populate: {
          Hero: "*"
        }
      },
      WhyUs: {
        populate: {
          KeyPoints: {
            populate: {
              icon: "*"
            }
          }
        }
      }
    }
  })

  return {
    props: {
      banner: home.data.attributes.banner,
      whyUs: home.data.attributes.WhyUs,
    },
    revalidate: 1,
  };
}
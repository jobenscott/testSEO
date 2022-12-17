import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroBanner from '../components/HeroBanner/AboutUs';
import Navbar from '../components/Navbar/Navbar'
import WhyUs from '../components/WhyUs/WhyUs'
import Contact from '../components/ContactUs/ContactUs'
import { Typography, styled, Grid, Container, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import App from "next/app";
import { fetchAPI } from "../lib/api";
import ContentSection from '../components/ContentSection/ContentSection';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Index({
  banner,
  whyUs,
  content,
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%", background: "#8AA29E" }}>
            <ContactForm />
        </Grid>
      </Grid>
    </Container>
  )
}


export async function getStaticProps() {
  // Run API calls in parallel
  const about = await fetchAPI("/why-us", {
    populate: "*"
  })
  return {
    props: {
      banner: {
        Header: about.data.attributes.Header,
        subHeader: about.data.attributes.subHeader,
      },
      content: about.data.attributes.content,
    },
    revalidate: 1,
  };
}
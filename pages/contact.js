import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import ContactForm from '../components/ContactForm/ContactForm';
import React, { useState } from 'react';

export default function Index({
}) {

  const [email, setEmail] = useState("");



  const saveEmail = (e) => {
      console.log(email);
          const postData = async () => {
            const data = {
              email: email,
            };
      
            const response = await fetch("/api/emails", {
              method: "POST",
              body: JSON.stringify(data),
            }).then((response) => response.json())
          };
          postData().then((data) => {
            console.log(data);
          });
      }

  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%", background: "#3D5467", minHeight: "100vh" }}>
            <ContactForm setEmail={setEmail} saveEmail={saveEmail} />
        </Grid>
      </Grid>
    </Container>
  )
}


// export async function getStaticProps() {
//   // Run API calls in parallel
//   const about = await fetchAPI("/why-us", {
//     populate: "*"
//   })
//   return {
//     props: {
//       banner: {
//         Header: about.data.attributes.Header,
//         subHeader: about.data.attributes.subHeader,
//       },
//       content: about.data.attributes.content,
//     },
//     revalidate: 1,
//   };
// }
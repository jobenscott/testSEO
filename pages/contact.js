import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Index({
}) {
  return (
    <Container disableGutters maxWidth={false}>
      <Head>
      </Head>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ width: "100%", background: "#3D5467", minHeight: "100vh" }}>
            <ContactForm />
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
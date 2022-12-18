import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import ContentSection from '../components/ContentSection/ContentSection';
import HeroBanner from '../components/HeroBanner/AboutUs';

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
        <Grid item sx={{ width: "100%", background: "#395467" }}>
          <HeroBanner />
        </Grid>
        <Grid item sx={{ background: "#686963", width: "100%" }}>
          <ContentSection />
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
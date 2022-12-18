import { Container, Grid } from "@mui/material";
import Head from 'next/head';
import Contact from '../components/ContactUs/ContactUs';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import WhyUs from '../components/WhyUs/WhyUs';

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
          <HeroBanner />
        </Grid>
        <Grid item sx={{ background: "#F1EDEE", width: "100%" }}>
          <Container maxWidth="sm" sx={{}}>
            <WhyUs />
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


// export async function getStaticProps() {
//   // Run API calls in parallel
//   const home = await fetchAPI("/home", {
//     populate: {
//       banner: "*",
//       WhyUs: {
//         populate: {
//           KeyPoints: {
//             populate: {
//               icon: "*"
//             }
//           }
//         }
//       }
//     }
//   })

//   return {
//     props: {
//       banner: home.data.attributes.banner,
//       whyUs: home.data.attributes.WhyUs,
//     },
//     revalidate: 1,
//   };
// }
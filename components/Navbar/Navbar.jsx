import { AppBar, Button, Toolbar, Typography, useMediaQuery} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

  const matches = useMediaQuery('(max-width:600px)');

  const navLinks = [
    {
      id: "1",
      path: "about"
    },
    {
      id: "2",
      path: "contact"
    }
  ]

  return (
    <div>
      <Head>
        <title>CommunityBuilt</title>
      </Head>
        <AppBar className={classes.nav} position="sticky">
          <Toolbar className={classes.nav}>
            <Typography onClick={onHomeClick} variant="h6" className={classes.title} sx={{ mt: 1 }}>
              {"CommunityBuilt"}
            </Typography>
            {navLinks.map(link => (
              <Button
                key={link.id}
                color="inherit"
                onClick={() => router.push(link.path)}
                width={200}
                sx={{ mt: 1 }}
              >
                {link.path}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;
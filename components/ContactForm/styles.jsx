import { styled } from "@mui/material/styles";

const component = "contactUs";

const classes = {
    title: `${component}-title`,
};

const Root = styled("div")(({ theme, ...props }) => ({
    [`& .${classes.title}`]: {
        fontWeight: { lg: "600", md: "600", sm: "600", xs: "400" },
        color: "#3D5467",
        fontSize: { lg: "3.5rem", md: "3rem", sm: "2rem", xs: "2rem" },
        zIndex: 1,
    },
}));

export { Root, classes };
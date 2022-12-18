import { styled } from "@mui/material/styles";

const component = "contactUs";

const classes = {
    title: `${component}-title`,
};

const Root = styled("div")(({ theme, ...props }) => ({
    [`& .${classes.title}`]: {
        fontWeight: { lg: "600", md: "600", sm: "600", xs: "400" },
        color: "white",
        fontSize: { lg: "6rem", md: "6rem", sm: "3rem", xs: "2.5rem" },
        zIndex: 1,
    },
}));

export { Root, classes };
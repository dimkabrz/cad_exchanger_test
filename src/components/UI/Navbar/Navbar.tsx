import {AppBar, styled, Toolbar, Typography} from "@mui/material";
import {companyName} from "../../../constants/const.ts";
import {ContactUsBtn} from "../ContactUsBtn";
import {Link} from "react-router";

const LinkButtonRoot = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    WebkitTapHighlightColor: 'transparent',
    '&:active': {
        backgroundColor: 'transparent',
    },
}));

export const Navbar = () => {

    return (
        <AppBar position="fixed" color={"inherit"}>
            <Toolbar  sx={{justifyContent: "space-between"}}>
                <LinkButtonRoot to="/">
                    <Typography variant="h6" component="article">
                        {companyName}
                    </Typography>
                </LinkButtonRoot>

                <ContactUsBtn>Contact us</ContactUsBtn>
            </Toolbar>
        </AppBar>
    );
};


import {styled} from "@mui/material";
import {Link} from "react-router";
import {ReactNode} from "react";

interface ContactUsBtnProps {
    children: ReactNode;
}

const LinkButtonRoot = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    padding: '15px',
    borderRadius: '15px',
    background: theme.palette.primary.main,
    color: 'white',
    fontFamily: theme.typography.button.fontFamily,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: theme.shadows[4],
    },
}));

export const ContactUsBtn = ({children}: ContactUsBtnProps) => {
    return (
        <LinkButtonRoot to={'/contact_us'}>{children}</LinkButtonRoot>
    );
};


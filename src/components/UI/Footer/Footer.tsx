import {styled, Typography} from "@mui/material";
import {companyName} from "../../../constants/const.ts";

const FooterRoot  = styled('footer')`
    min-height: 60px;
    height: 200px;
    border-top: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    font-size: 16px;
    margin-top: auto;
    background: white;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
`

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <FooterRoot>
            <Typography variant="body1" component="small">
                {companyName} {currentYear}
            </Typography>
        </FooterRoot>
    );
};


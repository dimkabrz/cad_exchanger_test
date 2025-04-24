import {styled, Typography} from "@mui/material";
import {ContactUsBtn} from "../ContactUsBtn";


const BottomInfoRoot = styled('section')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    padding: '40px 30px',
    backgroundColor: theme.palette.background.default,
}));

export const BottomInfo = () => {
    return (
        <BottomInfoRoot>
            <Typography variant="h3" component="h3" sx={{fontSize: '48px', fontWeight: 'bold'}}>Less important title</Typography>
            <ContactUsBtn>Contact us</ContactUsBtn>
        </BottomInfoRoot>
    );
};

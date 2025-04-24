import {ContactForm} from "../UI/ContactForm";
import {styled, Typography} from "@mui/material";
import {useState} from "react";


const ContentRoot = styled('main')(({theme}) => ({
    background: theme.palette.background.default,
    margin: '60px 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    flex: 1,
    minWidth: '320px',
    maxWidth: '1440px'
}));


export const ContactUsPage = () => {

    const [isSent, setIsSent] = useState(false);

    return (
        <ContentRoot>
            {isSent
                ? <Typography variant="h2" component="h1" sx={{
                    fontSize: {
                        xs: '36px',
                        md: '72px'
                    },
                    padding: '20px 20px 0',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    maxWidth: {
                        xs: '100%',
                        md: '50%'
                    }
                }}>Message generated on the server</Typography>
                : <>
                    <Typography variant="h2" component="h1" gutterBottom
                                sx={{
                                    padding: '20px 20px 0',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: {
                                        xs: '36px',
                                        md: '72px'
                                    }
                                }}
                    >
                        Only CTA on the page
                    </Typography>
                    <ContactForm setIsSent={setIsSent}/>
                </>}

        </ContentRoot>
    );
};


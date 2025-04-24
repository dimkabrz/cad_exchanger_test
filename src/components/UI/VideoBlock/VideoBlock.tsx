import { Box, styled, Typography } from "@mui/material";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const VideoBlockRoot = styled('section')(({ theme }) => ({
    background: theme.palette.background.default,
    padding: '30px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },

}));

const ResponsiveYouTubeWrapper = styled('article')(({theme}) => ({
    padding: theme.spacing(1),
    '& .yt-lite': {
        top: 0,
        right: 0,
        width: '100%',
        height: '300px',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        '& > .lty-playbtn': {
            opacity: 1,
            transition: 'opacity 0.3s ease',
        },
        '&.activated > .lty-playbtn, &.activated:hover > .lty-playbtn': {
            opacity: 0,
            pointerEvents: 'none',
        }
    },
    [theme.breakpoints.down('lg')]: {
        '& .yt-lite': {
            backgroundSize: 'contain',
        }
    },

}));

export const VideoBlock = () => {
    const videoId = "dQw4w9WgXcQ";

    return (
        <VideoBlockRoot aria-labelledby="video-section-title">
            <Box width={'60%'}>
                <Typography id="video-section-title" variant="h1" component="h1" sx={{fontSize: '48px', fontWeight: 'bold'}}>
                    Most important title on the page
                </Typography>
                <Typography variant="subtitle1" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
                    leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                </Typography>
            </Box>

            <ResponsiveYouTubeWrapper aria-label="YouTube video player">
                <LiteYouTubeEmbed
                    id={videoId}
                    title="YouTube video player"
                    wrapperClass="yt-lite"
                    playerClass="lty-playbtn"
                    activatedClass="activated"
                    adNetwork={false}
                    params="autoplay=1"
                />
            </ResponsiveYouTubeWrapper>



        </VideoBlockRoot>
    );
};
import {Route, Routes} from "react-router";
import {MainPage} from "./components/MainPage";
import {ContactUsPage} from "./components/ContactUsPage";
import {Footer} from "./components/UI/Footer";
import {Navbar} from "./components/UI/Navbar";
import {Box, createTheme, styled, ThemeProvider} from "@mui/material";


const AppRoot = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`

function App() {

    const theme = createTheme({
        palette: {
            background: {
                default: 'rgb(245,245,245)',
            },
        },

        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        components: {
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        '@media (min-width:0px)': {
                            minHeight: '60px',
                            paddingLeft: '16px',
                            paddingRight: '15px',
                        },
                        '@media (min-width:768px)': {
                            paddingLeft: '24px',
                            paddingRight: '24px',
                        },
                    },
                },
            },
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        '@media (max-width:768px)': {
                            padding: 0
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <AppRoot>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/contact_us" element={<ContactUsPage/>}/>
                </Routes>
            </AppRoot>
            <Footer/>
        </ThemeProvider>

    )
}

export default App

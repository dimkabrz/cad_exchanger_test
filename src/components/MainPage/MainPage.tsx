import {styled} from "@mui/material";
import {VideoBlock} from "../UI/VideoBlock";
import {CardsContainer} from "../UI/CardsContainer";
import {BottomInfo} from "../UI/BottomInfo";


const ContentRoot = styled('main')`
    margin: 60px 0 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-width: 320px;
    max-width: 1440px;
`

export const MainPage = () => {
    return (
        <ContentRoot>
            <VideoBlock />
            <CardsContainer/>
            <BottomInfo/>
        </ContentRoot>
    );
};


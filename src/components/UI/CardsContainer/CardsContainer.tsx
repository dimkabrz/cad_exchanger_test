import {Card, CardContent, Grid, styled, Typography} from "@mui/material";
import {cardsList} from "../../../constants/const.ts";
import {ContactUsBtn} from "../ContactUsBtn";


const CardsContainerRoot = styled('section')(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "0 30px",
}));

export const CardsContainer = () => {
    return (
        <CardsContainerRoot>
            <Typography variant="h2" component="h2" sx={{fontSize: '48px', fontWeight: 'bold'}}>Also very important title</Typography>
            <Grid container spacing={2} sx={{ margin: 0, width: '100%' }}>
                {cardsList.map((card) => (
                    <Grid size={{xs: 12, md: 6}} key={card.id}>
                        <Card sx={{
                            height: '100%',
                            boxShadow: 'none', // Если не нужны тени
                        }}>
                            <CardContent>
                                <Typography variant="h4" component="h4">
                                    {card.title}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <ContactUsBtn>Contact us</ContactUsBtn>
        </CardsContainerRoot>

    );
};


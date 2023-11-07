import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import orangeDaruma from "../static/daruma/daruma_orange.png";

function Genki() {
    return (
        <div>
            <Box>
                <Toolbar />
                <Typography paragraph sx={{ marginTop: 3, marginLeft: 2, marginRight: 5 }}>
                    Let's study Genki! These Genki study pages are not meant to replace the Genki textbooks but to be
                    used in conjunction with them. The chapter sections will contain shorter summaries and different
                    examples than what are found in the textbooks. If you would like to purchase them, you can easily
                    find the textbooks on the web, both physical and digital copies.
                </Typography>
                <img src={orangeDaruma} alt="neko logo" width={150} height={150} />
            </Box>
            <Grid container component="main" spacing={2} sx={{ justifyContent: "center" }}>
                <Grid item>
                    <Button variant="contained" size="large" href="genki/1">
                        Genki 1
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" size="large" href="genki/2">
                        Genki 2
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Genki;

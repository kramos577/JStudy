import { Box, Card, CardContent, Grid, Toolbar, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

// TODO: Make a new type for these that include name, path, summary
const GAME_NAMES = ["Flash Cards", "Crosswords", "Scrabble", "Hangman", "Matching", "Bingo"];

function Games() {
    return (
        <div>
            <Box>
                <Toolbar />
                <Typography paragraph sx={{ marginTop: 3, marginLeft: 2, marginRight: 5 }}>
                    Let's study Japanese through games!
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                {GAME_NAMES.map((gameName) => (
                    <Grid item>
                        {/* Add card actions once a game is working */}
                        <Card sx={{ width: 350, backgroundColor: "#f8fdff", border: 1.5 }} variant="outlined">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {gameName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This game is under construction. Thank you for waiting.
                                </Typography>
                                <ConstructionIcon
                                    sx={{
                                        color: "#f57c00",
                                        width: 50,
                                        height: 50,
                                        mt: 1,
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Games;

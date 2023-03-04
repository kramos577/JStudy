import { Box, Card, CardContent, Grid, Toolbar, Typography } from "@mui/material";
import contentCh1 from "../content/genki/genki1/ch1";
import contentCh2 from "../content/genki/genki1/ch2";

const contentGenki1 = [contentCh1, contentCh2];

function Genki1Study() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {contentGenki1.map((x) => (
                    <Box ml={25}>
                        <Typography variant="h3" align="left" sx={{ color: "#534D8A" }}>
                            {x.chapter}
                        </Typography>
                        <Typography variant="h4" align="left" sx={{ color: "#AC80AF" }}>
                            {x.title.japanese} - {x.title.english}
                        </Typography>
                        <Box mt={3}>
                            <Typography variant="h5" align="left" sx={{ color: "#534D8A" }}>
                                Vocabulary
                            </Typography>
                            <Grid container spacing={2}>
                                {x.vocabulary.map((y) => (
                                    <Grid item>
                                        <Card sx={{ width: 220 }}>
                                            <CardContent>
                                                <Typography>{y.english}</Typography>
                                                <Typography>{y.kana}</Typography>
                                                {/* <Typography>{y?.kanji}</Typography> */}
                                                <Typography>{y?.romaji}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box mt={8}>
                            <Typography variant="h5" align="left" mb={1} sx={{ color: "#534D8A" }}>
                                Grammar
                            </Typography>
                            <Grid container spacing={2}>
                                {x.grammar.map((y) => (
                                    <Grid item sx={{ width: "95%" }}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6" align="left">
                                                    {y.title}
                                                    <Typography variant="subtitle1" align="left" mt={0.5}>
                                                        Meanings:{"\n"}
                                                    </Typography>

                                                    {y.meanings.map((z) => (
                                                        <Typography variant="subtitle1" align="left">
                                                            {z.japanese} - {z.english}
                                                        </Typography>
                                                    ))}

                                                    <Typography variant="subtitle1" align="left" mt={1.5}>
                                                        How to Use:{"\n"}
                                                    </Typography>

                                                    {y.usages.map((z) => (
                                                        <Typography variant="subtitle1" align="left">
                                                            {z}
                                                        </Typography>
                                                    ))}

                                                    <Typography variant="subtitle1" align="left" mt={1.5}>
                                                        Notes:{"\n"}
                                                    </Typography>

                                                    {y.notes.map((z) => (
                                                        <Typography variant="subtitle1" align="left">
                                                            {z}
                                                        </Typography>
                                                    ))}

                                                    <Typography variant="subtitle1" align="left" mt={1.5}>
                                                        Examples:{"\n"}
                                                    </Typography>

                                                    {y.examples.map((z) => (
                                                        <Typography variant="subtitle1" align="left">
                                                            {z}
                                                        </Typography>
                                                    ))}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography align="center" variant="h5" mt={5} mb={5}>
                                れんしゅうしましょう！
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Genki1Study;
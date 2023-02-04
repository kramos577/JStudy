import { Box, Card, CardContent, Grid, Toolbar, Typography } from "@mui/material";
import genki1_content from "../content/genki/genki1";

function Genki1Study() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {genki1_content.map((x) => (
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
                                        <Card sx={{ width: 200 }}>
                                            <CardContent>
                                                <Typography>{y.english}</Typography>
                                                <Typography>{y.kana}</Typography>
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
                            {x.grammar.map((y) => (
                                <Typography variant="h6" align="left" mb={4}>
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
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Genki1Study;

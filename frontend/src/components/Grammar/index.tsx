import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { GrammarContent } from "../../content/genki/types";

function Grammar({ grammarContent }: { grammarContent: GrammarContent[] }) {
    return (
        <Box mt={8}>
            <Typography variant="h5" align="left" mb={1} sx={{ color: "#534D8A" }}>
                Grammar
            </Typography>
            <Grid container spacing={2}>
                {grammarContent.map((y) => (
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
                                            {z.japanese.japanese || z.japanese.kana} - {z.english}
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
    );
}
export default Grammar;

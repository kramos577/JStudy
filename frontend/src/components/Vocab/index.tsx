import * as React from "react";
import { Box, Card, CardContent, Grid, Typography, Switch, FormControlLabel, FormGroup } from "@mui/material";
import type { VocabContent } from "../../content/genki/types";

function Vocab({ vocabList }: { vocabList: VocabContent[] }) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        console.log("checked is " + event.target.checked);
    };
    return (
        <Box mt={3}>
            <Typography variant="h5" align="left" sx={{ color: "#534D8A" }}>
                Vocabulary
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={<Switch color="warning" checked={checked} onChange={handleChange} />}
                    label="Study Mode"
                />
            </FormGroup>

            <Grid container spacing={2}>
                {vocabList.map((y) => (
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
    );
}

export default Vocab;

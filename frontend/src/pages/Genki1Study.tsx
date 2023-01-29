import { Box, Toolbar, Typography } from "@mui/material";
import genki1_content from "../content/genki/genki1";

function Genki1Study() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>Genki I Study Page!</Typography>

                {genki1_content.map((x) => (
                    <Typography paragraph>
                        {x.chapter} {x.title.english} {x.title.japanese}
                        {x.vocabulary.map((y) => (
                            <Typography paragraph>
                                {y.english} {y.romaji} {y.kana}
                            </Typography>
                        ))}
                    </Typography>
                ))}
            </Box>
        </div>
    );
}

export default Genki1Study;

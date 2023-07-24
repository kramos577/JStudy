import { Box, Toolbar, Typography } from "@mui/material";
import contentCh1 from "../content/genki/genki1/ch1";
import contentCh2 from "../content/genki/genki1/ch2";
import contentCh3 from "../content/genki/genki1/ch3";
import Vocab from "../components/Vocab";
import Grammar from "../components/Grammar";

const contentGenki1 = [contentCh1, contentCh2, contentCh3];

function Genki1Study() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {contentGenki1.map((x) => (
                    <section id={x.chapter.toLowerCase().replaceAll(" ", "")}>
                        <Box ml={25}>
                            <Typography variant="h3" align="left" sx={{ color: "#534D8A" }}>
                                {x.chapter}
                            </Typography>
                            <Typography variant="h4" align="left" sx={{ color: "#AC80AF" }}>
                                {x.title.japanese.japanese || x.title.japanese.kana} - {x.title.english}
                            </Typography>
                            <Vocab chapterContent={x} />
                            <Grammar grammarContent={x.grammar} />
                        </Box>
                    </section>
                ))}
            </Box>
        </div>
    );
}

export default Genki1Study;

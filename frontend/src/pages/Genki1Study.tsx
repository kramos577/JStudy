import { Box, Toolbar, Typography } from "@mui/material";
import contentCh1 from "../content/genki/genki1/ch1";
import contentCh2 from "../content/genki/genki1/ch2";
import contentCh3 from "../content/genki/genki1/ch3";
import contentCh4 from "../content/genki/genki1/ch4";
import contentCh5 from "../content/genki/genki1/ch5";
import contentCh6 from "../content/genki/genki1/ch6";
import Vocab from "../components/Vocab";
import Grammar from "../components/Grammar";
import { Link } from "react-router-dom";

const contentGenki1 = [contentCh1, contentCh2, contentCh3, contentCh4, contentCh5, contentCh6];

function Genki1Study() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, ml: 6, mt: 2 }}>
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
                            <Link to="/games">
                                <Typography align="center" variant="h5" mt={5} mb={5}>
                                    れんしゅうしましょう！
                                </Typography>
                            </Link>
                        </Box>
                    </section>
                ))}
            </Box>
        </div>
    );
}

export default Genki1Study;

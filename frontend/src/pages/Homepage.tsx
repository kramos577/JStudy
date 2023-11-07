import { Box, Link, Toolbar, Typography } from "@mui/material";
import blueNeko from "../static/neko/neko_blue.png";

function Homepage() {
    return (
        <div>
            <Box component="main">
                <Toolbar />
                <Typography variant="h2" sx={{ marginTop: 3, fontWeight: "bold" }}>
                    ようこそ！
                </Typography>
                <img src={blueNeko} alt="neko logo" width={300} height={375} />
                <Typography paragraph sx={{ marginTop: 3, marginLeft: 2, marginRight: 5 }}>
                    Most of the work on this site has been on the Genki 1 chapter study section. Please follow the link
                    <Link href="/genki/1/study"> here</Link> or click through the navigation menu to get there. Thank
                    you for your patience as this site is being built out.
                </Typography>
            </Box>
        </div>
    );
}

export default Homepage;

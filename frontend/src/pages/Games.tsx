import { Box, Toolbar, Typography } from "@mui/material";

function Games() {
    return (
        <div>
            <Box component="main" sx={{ width: "85%", float: "right" }}>
                <Toolbar />
                <Typography paragraph sx={{ marginTop: 3, marginLeft: 2, marginRight: 5 }}>
                    Let's study Japanese through games!
                </Typography>
            </Box>
        </div>
    );
}

export default Games;

import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";

function Homepage() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>This is where really cool daily things will appear!</Typography>
                <Typography paragraph>Honestly, this is where they will probably go :)</Typography>
            </Box>
            Home Page!
        </div>
    );
}

export default Homepage;

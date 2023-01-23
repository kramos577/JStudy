import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";

function Genki() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>This is where all the learning will go!</Typography>
            </Box>
            Genki Base Page!
        </div>
    );
}

export default Genki;

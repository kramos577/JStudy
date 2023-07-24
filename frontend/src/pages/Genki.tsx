import { Box, Toolbar, Typography } from "@mui/material";

function Genki() {
    return (
        <div>
            <Box component="main" sx={{ width: "85%", float: "right" }}>
                <Toolbar />
                <Typography paragraph sx={{ marginTop: 3, marginLeft: 2, marginRight: 5 }}>
                    Let's study Genki! These Genki study pages are not meant to replace the Genki textbooks but to be
                    used in conjunction with them. The chapter sections will contain shorter summaries and different
                    examples than what are found in the textbooks. If you would like to purchase them, you can easily
                    find the textbooks on the web, both physical and digital copies.
                </Typography>
            </Box>
        </div>
    );
}

export default Genki;

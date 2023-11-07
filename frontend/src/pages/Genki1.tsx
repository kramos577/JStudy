import { Box, Toolbar, Typography } from "@mui/material";

function Genki1() {
    return (
        <div>
            <Box>
                <Toolbar />
                <Typography paragraph sx={{ marginTop: 3, marginLeft: 2, marginRight: 5 }}>
                    Let's study Genki I! The Genki I study page is not meant to replace the textbook but to be used in
                    conjunction with it. The chapter sections will contain shorter summaries and different examples than
                    what are found in the textbooks. However, a lot of the language is the same. If you would like to
                    purchase it, you can easily find the textbook on the web, both physical and digital copies.
                </Typography>
            </Box>
        </div>
    );
}

export default Genki1;

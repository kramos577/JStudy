import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const style = {
    background: "#02142B",
};

function Header() {
    return (
        <AppBar position="fixed" sx={{ ...style, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    JStudy
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

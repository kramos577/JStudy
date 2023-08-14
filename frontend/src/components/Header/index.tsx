import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import redDaruma from "../../static/daruma/daruma_red.png";

const style = {
    background: "#02142B",
};

function Header() {
    return (
        <AppBar position="fixed" sx={{ ...style, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <img src={redDaruma} alt="daruma logo" width={40} height={40} />
                <Typography variant="h6" noWrap component="div" sx={{ ml: 1 }}>
                    JStudy
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

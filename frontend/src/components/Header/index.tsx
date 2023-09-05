import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import redDaruma from "../../static/daruma/daruma_red.png";
import { Link } from "react-router-dom";

const style = {
    background: "#02142B",
};

function Header() {
    return (
        <AppBar position="fixed" sx={{ ...style, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Link to="/">
                    <img src={redDaruma} alt="daruma logo" width={40} height={40} />
                </Link>

                <Typography variant="h6" noWrap component="div" sx={{ ml: 1 }}>
                    JStudy
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

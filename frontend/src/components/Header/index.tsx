import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import redDaruma from "../../static/daruma/daruma_red.png";
import BugReportIcon from "@mui/icons-material/BugReport";
import DrawIcon from "@mui/icons-material/Draw";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const style = {
    background: "#02142B",
};

function Header() {
    return (
        <AppBar position="static" sx={{ ...style, zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex" }}>
            <Toolbar>
                <Link to="/">
                    <img src={redDaruma} alt="daruma logo" width={40} height={40} />
                </Link>

                {/* flexGrow 1 will fill in all the space between the components it's in */}
                <Typography variant="h6" noWrap component="div" sx={{ ml: 1, flexGrow: 1, textAlign: "left" }}>
                    JStudy
                </Typography>

                <Tooltip title="Checkout the artist who creates all the artwork you see here!" placement="bottom">
                    <a rel="noopener noreferrer" href="https://kiwikiwi.carrd.co/" target="_blank">
                        <DrawIcon
                            sx={{
                                color: "#ce93d8",
                                width: 28,
                                height: 28,
                                mr: 1,
                            }}
                        />
                    </a>
                </Tooltip>

                {/* From StackOverflow: Use the rel=”noopener” or rel=”noreferrer” link attributes for every link. 
                The rel=”noreferrer” link attribute also functions the same as the “noopener” link attribute in that it prevents 
                the linked site from taking control of the linking site. */}
                <Tooltip title="Found a bug or typo? Open an issue to get it fixed!" placement="bottom">
                    <a rel="noopener noreferrer" href="https://github.com/kramos577/JStudy/issues" target="_blank">
                        <BugReportIcon
                            sx={{
                                color: "#388e3c",
                                width: 30,
                                height: 30,
                            }}
                        />
                    </a>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

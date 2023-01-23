import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import AppBar from "@mui/material/AppBar";
import BookIcon from "@mui/icons-material/Book";
import Box from "@mui/material/Box";
import { Collapse } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const style = {
    background: "#02142B",
};
const drawerWidth = 200;

function Navbar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="fixed" sx={{ ...style, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Temp Header
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: "#4EBFD4",
                    },
                }}>
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem key="home" disablePadding>
                            <ListItemButton component={Link} to="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key="genki" disablePadding onClick={handleClick}>
                            <ListItemButton component={Link} to="/genki">
                                <ListItemIcon>
                                    <TagFacesIcon />
                                </ListItemIcon>
                                <ListItemText primary="Genki" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <BookIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Genki I" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <BookIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Genki II" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Navbar;

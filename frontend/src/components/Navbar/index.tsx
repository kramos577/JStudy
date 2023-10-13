import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import BookIcon from "@mui/icons-material/Book";
import Box from "@mui/material/Box";
import CasinoIcon from "@mui/icons-material/Casino";
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
import { HashLink } from "react-router-hash-link";

const drawerWidth = "15%";

function Navbar() {
    const [openBookTab, setOpenBookTab] = React.useState(true);
    const [openChapterTab, setOpenChapterTab] = React.useState(false);

    const handleBookClick = () => {
        setOpenBookTab(!openBookTab);
    };

    const handleChapterClick = () => {
        setOpenChapterTab(!openChapterTab);
    };

    return (
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

                    <ListItem key="games" disablePadding>
                        <ListItemButton component={Link} to="/games">
                            <ListItemIcon>
                                <CasinoIcon />
                            </ListItemIcon>
                            <ListItemText primary="Study Games" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key="genki" disablePadding>
                        <ListItemButton component={Link} to="/genki">
                            <ListItemIcon>
                                <TagFacesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Genki" />
                            {openBookTab ? (
                                <ExpandLess sx={{ borderLeft: 0.5 }} onClick={handleBookClick} />
                            ) : (
                                <ExpandMore sx={{ borderLeft: 0.5 }} onClick={handleBookClick} />
                            )}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={openBookTab} timeout="auto" unmountOnExit>
                        <List
                            component={Link}
                            to="/genki/1"
                            disablePadding
                            style={{ textDecoration: "none", color: "black" }}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <BookIcon />
                                </ListItemIcon>
                                <ListItemText primary="Genki I" />
                                {openChapterTab ? (
                                    <ExpandLess sx={{ borderLeft: 0.5 }} onClick={handleChapterClick} />
                                ) : (
                                    <ExpandMore sx={{ borderLeft: 0.5 }} onClick={handleChapterClick} />
                                )}
                            </ListItemButton>
                        </List>

                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List
                                component={HashLink}
                                to="/genki/1/study#chapter1"
                                disablePadding
                                style={{ textDecoration: "none", color: "black" }}>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText primary="Chapter 1" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List
                                component={HashLink}
                                to="/genki/1/study#chapter2"
                                disablePadding
                                style={{ textDecoration: "none", color: "black" }}>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText primary="Chapter 2" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List
                                component={HashLink}
                                to="/genki/1/study#chapter3"
                                disablePadding
                                style={{ textDecoration: "none", color: "black" }}>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText primary="Chapter 3" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List
                                component={HashLink}
                                to="/genki/1/study#chapter4"
                                disablePadding
                                style={{ textDecoration: "none", color: "black" }}>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText primary="Chapter 4" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List
                                component={HashLink}
                                to="/genki/1/study#chapter5"
                                disablePadding
                                style={{ textDecoration: "none", color: "black" }}>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText primary="Chapter 5" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List
                                component={HashLink}
                                to="/genki/1/study#chapter6"
                                disablePadding
                                style={{ textDecoration: "none", color: "black" }}>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText primary="Chapter 6" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Collapse>

                    <Collapse in={openBookTab} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <BookIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Link to="/genki/2" style={{ textDecoration: "none", color: "black" }}>
                                            Genki II
                                        </Link>
                                    }
                                />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    );
}

export default Navbar;

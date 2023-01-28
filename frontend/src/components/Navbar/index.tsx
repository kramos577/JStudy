import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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

const drawerWidth = 200;

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

                    <ListItem key="genki" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TagFacesIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Link to="/genki" style={{ textDecoration: "none", color: "black" }}>
                                        Genki
                                    </Link>
                                }
                            />
                            {openBookTab ? (
                                <ExpandLess onClick={handleBookClick} />
                            ) : (
                                <ExpandMore onClick={handleBookClick} />
                            )}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={openBookTab} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <BookIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Link to="/genki/1" style={{ textDecoration: "none", color: "black" }}>
                                            Genki I
                                        </Link>
                                    }
                                />
                                {openChapterTab ? (
                                    <ExpandLess onClick={handleChapterClick} />
                                ) : (
                                    <ExpandMore onClick={handleChapterClick} />
                                )}
                            </ListItemButton>
                        </List>
                        <Collapse in={openChapterTab} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemText
                                        primary={
                                            // Link to content page and correct section there
                                            <Link to="/genki/1" style={{ textDecoration: "none", color: "black" }}>
                                                Chapter 1
                                            </Link>
                                        }
                                    />
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

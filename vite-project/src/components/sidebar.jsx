import {
  AccountBox,
  Article,
  Group,
  Home,
  Logout,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

const Sidebar = ({ mode, setMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const isItemSelected = (itemName) => itemName === selectedItem;

  const getListItemStyle = (itemName) => {
    return isItemSelected(itemName)
      ? { backgroundColor: "#2196F3" , color: "white",borderRadius:"10px" } 
      : {};
  };

 
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#home"
              onClick={() => handleItemClick("Homepage")}
              style={getListItemStyle("Homepage")}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Pages")}
              style={getListItemStyle("Pages")}
            >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Groups")}
              style={getListItemStyle("Groups")}
            >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Marketplace")}
              style={getListItemStyle("Marketplace")}
            >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Friends")}
              style={getListItemStyle("Friends")}
            >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Settings")}
              style={getListItemStyle("Settings")}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Profile")}
              style={getListItemStyle("Profile")}
            >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("ModeNight")}
              style={getListItemStyle("ModeNight")}
            >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleItemClick("Logout")}
              style={getListItemStyle("Logout")}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

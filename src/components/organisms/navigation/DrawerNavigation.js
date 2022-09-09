import React from "react";
import {
  Box,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChevronRightIcon, MailIcon } from "img";

export default ({
  openDrawer = false,
  handleCloseDrawer = () => {},
  handleOpenDrawer = () => {},
}) => {
  const theme = useTheme();
  return (
    <SwipeableDrawer
      anchor="right"
      open={openDrawer}
      onClose={handleCloseDrawer}
      onOpen={handleOpenDrawer}
    >
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", height: "64px" }}
      >
        <IconButton onClick={handleCloseDrawer} sx={{ pl: 2.4, pr: 2.4 }}>
          <ChevronRightIcon fill={theme.palette.primary.main} width={24} />
        </IconButton>
      </Box>

      <Divider />
      <Box onClick={() => {}} onKeyDown={() => {}} sx={{ minWidth: "60vw" }}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon fill={theme.palette.primary.main} width={32} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon component="a" href="#simple-list">
                  <MailIcon fill={theme.palette.primary.main} width={34} />
                </ListItemIcon>
                <ListItemText primary={text} xs={{}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

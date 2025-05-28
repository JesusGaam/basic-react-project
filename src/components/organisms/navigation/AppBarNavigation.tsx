import React from "react";
import { Box, Button, AppBar, Toolbar, IconButton, useTheme } from "@mui/material";
import { navigationLinks } from "@/constants";
import MenuIcon from "svg/menu.svg"
import LogoIcon from "svg/logo.svg"

export default ({ openDrawer = () => { } }) => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" component="nav">
      <Toolbar>
        <Button size="small" sx={{ mr: 2, minHeight: `${theme.custom.appBarHeight}px` }}>
          <LogoIcon height={30} fill="#fff" />
        </Button>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navigationLinks.map(({ label, href }, i) => (
            <Button
              key={i}
              component="a"
              href={href}
              sx={{ color: "#fff" }}
            >
              {label}
            </Button>
          ))}
        </Box>
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={openDrawer}
        >
          <MenuIcon height={34} fill="#fff" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

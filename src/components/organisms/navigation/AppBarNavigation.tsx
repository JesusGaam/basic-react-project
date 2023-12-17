import React from "react";
import { Box, Button, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "svg/menu.svg"
import LogoIcon from "svg/logo.svg"

const pages = ["Products", "Pricing", "Blog"];

export default ({ openDrawer = () => {} }) => {
  return (
    <AppBar position="fixed" component="nav">
      <Toolbar>
        <Button size="small" sx={{ mr: 2, minHeight: "64px" }}>
          <LogoIcon height={30} fill="#fff" />
        </Button>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {pages.map((page, i) => (
            <Button key={i} component="a" href="#" sx={{ color: "#fff" }}>
              {page}
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

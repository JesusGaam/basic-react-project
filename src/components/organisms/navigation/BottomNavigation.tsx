import React, { useState } from "react";
import { Paper, BottomNavigation, BottomNavigationAction, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { bottomNavigationLinks } from "@/constants";
import MenuIcon from "svg/menu.svg";

export default ({
  isDrawerOpen,
  handleOpenDrawer = () => { },
  handleCloseDrawer = () => { }
}: {
  isDrawerOpen: boolean,
  handleOpenDrawer: (arg?: any) => void,
  handleCloseDrawer: (arg?: any) => void
}) => {
  const pathname = window.location.pathname;
  const theme = useTheme();
  const [value, setvalue] = useState<string>(pathname);

  const isSelected = (selected: boolean) => {
    return selected
      ? theme.palette.primary.main
      : theme.palette.text.primary;
  };

  const handleMenu = () => {
    if (isDrawerOpen) {
      handleCloseDrawer()
      setvalue("")
    } else {
      handleOpenDrawer()
    }
  }

  return (
    <Paper
      elevation={3}
      sx={wrapperStyle}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          if (newValue !== "openDrawer") {
            setvalue(newValue);
          }
        }}
        sx={bottomNavigationStyle}
      >
        {bottomNavigationLinks.map(({ label, href, Icon, external }, i) => (
          <BottomNavigationAction
            key={i}
            label={label}
            sx={{ textTransform: 'uppercase' }}
            component="a"
            href={href}
            value={href}
            icon={Icon && <Icon fill={isSelected(value === href)} height={24} />}
            target={external ? '_blank' : ""}
            rel={external ? 'noopener' : ""}
          />
        ))}

        <BottomNavigationAction
          label={"MENÚ"}
          onClick={handleMenu}
          value="openDrawer"
          icon={<MenuIcon fill={isSelected(isDrawerOpen)} height={24} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

const wrapperStyle = () => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: { xs: "block", sm: "none" },
  zIndex: 9999999,
  backgroundColor: "transparent",
});

const bottomNavigationStyle = (theme: Theme) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("sm")]: {},
});

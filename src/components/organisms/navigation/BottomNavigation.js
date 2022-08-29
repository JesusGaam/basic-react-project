import React, { useState, useEffect } from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { MailIcon } from "img";
import { useTheme } from "@mui/material/styles";

const options = [
  { label: "Menu", openDrawer: true, icon: MailIcon },
  {
    label: "Home",
    value: "/",
    icon: MailIcon,
  },
  {
    label: "User",
    value: "/user",
    icon: MailIcon,
  },
];

export default ({ handleOpenDrawer = () => {} }) => {
  const pathname = window.location.pathname;
  const theme = useTheme();
  const [value, setvalue] = useState(pathname);

  const isSelected = (id) => {
    return value === id
      ? theme.palette.primary.main
      : theme.palette.text.primary;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", sm: "none" },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          if (newValue !== "openDrawer") {
            setvalue(newValue);
          }
        }}
      >
        {options.map((o, i) => (
          <BottomNavigationAction
            key={i}
            label={o.label}
            {...(o.openDrawer
              ? { onClick: handleOpenDrawer, value: "openDrawer" }
              : { component: "a", href: o.value, value: o.value })}
            icon={<o.icon fill={isSelected(o.value)} height={32} />}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

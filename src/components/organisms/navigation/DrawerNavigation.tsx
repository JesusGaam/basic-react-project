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
  useTheme,
  Theme,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "svg/chevronRight.svg"
import { navigationLinks, socialMediaLinks } from "@/constants";

export default ({
  openDrawer = false,
  handleCloseDrawer = () => { },
  handleOpenDrawer = () => { },
}) => {
  const pathname = window.location.pathname;
  const theme = useTheme();

  return (
    <SwipeableDrawer
      anchor="right"
      open={openDrawer}
      onClose={handleCloseDrawer}
      onOpen={handleOpenDrawer}
      sx={wrapperStyle}
    >
      <Box
        sx={closeStyle}
      >
        <IconButton onClick={handleCloseDrawer} sx={{ pl: 2.4, pr: 2.4 }}>
          <ChevronRightIcon fill={theme.palette.primary.main} width={24} />
        </IconButton>
      </Box>
      <Divider />

      <Box onClick={() => { }} onKeyDown={() => { }} sx={optionStyle}>
        <List>
          {navigationLinks.map(({ label, href, Icon }, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton
                component="a"
                href={href}
                sx={{ gap: 2 }}
              >
                <ListItemIcon
                  sx={{ minWidth: "24px", display: "flex", justifyContent: "center" }}
                >
                  {Icon && <Icon fill={pathname === href ? theme.palette.primary.dark : theme.palette.text.primary} height={24} />}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={pathname === href ? { fontWeight: "bold", color: theme.palette.primary.dark } : { color: theme.palette.text.primary }}
                    >
                      {label}
                    </Typography>
                  }
                  sx={{ textTransform: 'uppercase' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 1, pb: 1 }} >
          <Divider sx={{ mb: 2 }} />
          <Typography color={"#757575"} variant="body2">Siguenos en redes sociales</Typography>
          <Box sx={socialMediaStyle}>
            {socialMediaLinks.map(({ label, href, external, Icon }, k) => (
              <IconButton
                key={k}
                aria-label={label}
                href={href}
                target={external ? '_blank' : ""}
                rel={external ? 'noopener' : ""}
              >
                {Icon && <Icon fill={theme.palette.text.primary} height={28} />}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};


const wrapperStyle = (theme: Theme) => ({
  backdropFilter: "blur(4px)",
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("sm")]: {},
});

const closeStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "flex-start",
  height: theme.custom.appBarHeight
})


const optionStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: `calc(100% - ${theme.custom.appBarHeight}px)`,
  backdropFilter: "blur(4px)",
  [theme.breakpoints.up("sm")]: {
    minWidth: "340px",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "80vw",
  },
});

const socialMediaStyle = (theme: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 1, mt: 1,
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("sm")]: {
    mb: `${theme.custom.bottomNavigationHeight}px`
  },
});

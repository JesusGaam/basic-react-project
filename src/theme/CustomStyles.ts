import { Theme } from "@mui/material";

export const sectionStyle = (theme: Theme) => ({
  py: theme.custom.pyContainer,
  px: theme.custom.pxContainer,
});

export const contentSectionStyle = (theme: Theme) => ({
  maxWidth: theme.custom.maxWidthContainer,
  ml: "auto",
  mr: "auto",
});

export const buttonStyle = (theme: Theme) => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: theme.typography.body2.fontSize,
  mr: 1,
});

export const buttonShadowStyle = (theme: Theme) => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: theme.typography.body2.fontSize,
  mr: 1,
  boxShadow: 1,

  "&:hover": {
    boxShadow: 2,
  },
});

export const boxShadowStyle = () => ({
  boxShadow: 3,
  "&:hover": {
    boxShadow: 4,
  },
});

export const tabStyle = (theme: Theme) => ({
  textTransform: "uppercase",
  fontWeight: "semibold",
  fontSize: theme.typography.body2.fontSize,
  mr: 1,
  "&:hover, &:active": {
    textDecoration: "none",
  },
});

export const textAnimationColor = () => ({
  background: 'linear-gradient(-45deg, rgba(238, 119, 82, 0.9), rgba(231, 60, 115, 0.9), rgba(35, 166, 213, 0.9), rgba(35, 213, 171, 0.9))',
  backgroundSize: "400% 400%",
  animation: "changeBackground 6s ease-in-out infinite",
  "@keyframes changeBackground": {
    "0%": {
      backgroundPosition: "0 50%"
    },
    "50%": {
      backgroundPosition: "100% 50%"
    },
    "100%": {
      backgroundPosition: "0 50%"
    }
  },

  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  textFillColor: "transparent",
  WebkitTextFillColor: "transparent",
});

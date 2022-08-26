export const combineStyles = (...styles) => {
  return (theme) => {
    const outStyles = styles.map((arg) => {
      // Apply the "theme" object for style functions.
      if (typeof arg === "function") {
        return arg(theme);
      }
      // Objects need no change.
      return arg;
    });

    return outStyles.reduce((acc, val) => Object.assign(acc, val));
  };
};

export const buttonStyle = (theme) => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: theme.typography.body2.fontSize,
  mr: 1,
});

export const tabStyle = (theme) => ({
  textTransform: "uppercase",
  fontWeight: "semibold",
  fontSize: theme.typography.body2.fontSize,
  mr: 1,
  "&:hover, &:active": {
    textDecoration: "none",
  },
});

export const buttonShadowStyle = (theme) => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: theme.typography.body2.fontSize,
  mr: 1,
  boxShadow: 1,

  "&:hover": {
    boxShadow: 2,
  },
});

export const boxShadowStyle = (theme) => ({
  boxShadow: 3,
  "&:hover": {
    boxShadow: 4,
  },
});

export const sectionBoxStyle = (theme) => ({
  pt: "60px",
  pb: "60px",
});

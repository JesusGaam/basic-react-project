import { SxProps, useTheme } from "@mui/material";
import { SxPropsType } from "@/interfaces";

const useCombineStyles = (...styles: SxPropsType[]): SxProps => {
  const theme = useTheme();
  const outStyles = styles.map((arg) => {
    if (typeof arg === "function") {
      return arg(theme);
    }

    return arg;
  });

  return outStyles.reduce((acc, val) => Object.assign(acc!, val));
};

export default useCombineStyles;

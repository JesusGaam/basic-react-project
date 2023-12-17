import { SxProps, Theme } from "@mui/material";

export type SxPropsAF = (theme: Theme) => SxProps;
export type SxPropsType = SxProps | SxPropsAF;
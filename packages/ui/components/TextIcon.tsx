import { CSSProperties, FC, ReactNode } from "react";
import { Stack } from "@mui/material";

interface IAppTextIcon {
    value?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    sx?: CSSProperties;
}
export const AppTextIcon: FC<IAppTextIcon> = ({
    startIcon,
    value,
    endIcon,
    sx,
    children,
    ...other
}) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                typography: "body2",
                ...sx,
            }}
            {...other}
        >
            {!startIcon && startIcon}
            {children || value}
            {endIcon && endIcon}
        </Stack>
    );
};

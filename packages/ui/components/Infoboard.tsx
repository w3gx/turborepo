import { FC } from "react";
import { Paper, Typography } from "@mui/material";

interface IAppInfoboard {
    title: string;
    description?: string;
    link?: string;
}
export const AppInfoboard: FC<IAppInfoboard> = ({
    title,
    description,
    ...other
}) => (
    <Paper {...other}>
        <Typography gutterBottom align="center" variant="subtitle1">
            {title}
        </Typography>
        <Typography variant="body2" align="center">
            {description}
        </Typography>
    </Paper>
);

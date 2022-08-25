// ----------------------------------------------------------------------

import { Theme } from "@mui/material";

export default function Fab(theme: Theme) {
    const isLight = theme.palette.mode === "light";

    return {
        MuiFab: {
            defaultProps: {
                color: "primary",
            },

            variants: [
                {
                    props: { color: "default" },
                    style: {
                        color: isLight
                            ? theme.palette.common.white
                            : theme.palette.grey[800],
                        backgroundColor: theme.palette.text.primary,
                        "&:hover": {
                            backgroundColor: isLight
                                ? theme.palette.grey[700]
                                : theme.palette.grey[400],
                        },
                    },
                },
                {
                    props: { color: "inherit" },
                    style: {
                        backgroundColor: !isLight && theme.palette.grey[700],
                        "&:hover": {
                            backgroundColor: isLight
                                ? theme.palette.grey[400]
                                : theme.palette.grey[600],
                        },
                    },
                },
            ],

            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[3],
                    "& svg": { width: 24, height: 24 },
                    "&:hover": { boxShadow: "none" },
                },
                primary: {
                    boxShadow: theme.shadows[8],
                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
                secondary: {
                    boxShadow: theme.shadows[9],
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.dark,
                    },
                },
                extended: {
                    "& svg": {
                        marginRight: theme.spacing(1),
                    },
                },
            },
        },
    };
}

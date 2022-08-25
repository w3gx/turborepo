//
import { Palette, PaletteColor, Theme } from "@mui/material";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "./CustomIcons";

// ----------------------------------------------------------------------

export default function Alert(theme: Theme) {
    const isLight = theme.palette.mode === "light";

    const standardStyle = (color: keyof Palette) => ({
        color: (theme.palette[color] as PaletteColor)[
            isLight ? "dark" : "light"
        ],
        backgroundColor: (theme.palette[color] as PaletteColor).main,
        "& .MuiAlert-icon": {
            color: (theme.palette[color] as PaletteColor)[
                isLight ? "dark" : "light"
            ],
        },
    });

    const filledStyle = (color: keyof Palette) => ({
        color: (theme.palette[color] as PaletteColor).contrastText,
    });

    const outlinedStyle = (color: keyof Palette) => ({
        color: (theme.palette[color] as PaletteColor)[
            isLight ? "dark" : "light"
        ],
        border: `solid 1px ${
            (theme.palette[color] as PaletteColor)[isLight ? "light" : "dark"]
        }`,
        backgroundColor: (theme.palette[color] as PaletteColor)[
            isLight ? "light" : "dark"
        ],
        "& .MuiAlert-icon": {
            color: (theme.palette[color] as PaletteColor)[
                isLight ? "dark" : "light"
            ],
        },
    });

    return {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    error: ErrorIcon,
                    info: InfoIcon,
                    success: SuccessIcon,
                    warning: WarningIcon,
                },
            },

            styleOverrides: {
                message: {
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(0.5),
                    },
                },
                action: {
                    "& button:not(:first-of-type)": {
                        marginLeft: theme.spacing(1),
                    },
                },
                icon: {
                    "& svg": { width: 24, height: 24 },
                },

                standardInfo: standardStyle("info"),
                standardSuccess: standardStyle("success"),
                standardWarning: standardStyle("warning"),
                standardError: standardStyle("error"),

                filledInfo: filledStyle("info"),
                filledSuccess: filledStyle("success"),
                filledWarning: filledStyle("warning"),
                filledError: filledStyle("error"),

                outlinedInfo: outlinedStyle("info"),
                outlinedSuccess: outlinedStyle("success"),
                outlinedWarning: outlinedStyle("warning"),
                outlinedError: outlinedStyle("error"),
            },
        },
    };
}

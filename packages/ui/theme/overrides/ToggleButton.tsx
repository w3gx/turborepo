// @mui
import { alpha, Palette, PaletteColor, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function ToggleButton(theme: Theme) {
    const styleSelected = (color: keyof Palette) => ({
        props: { color },
        style: {
            "&.Mui-selected": {
                borderColor: alpha(
                    (theme.palette[color] as PaletteColor).main,
                    0.48
                ),
            },
        },
    });

    return {
        MuiToggleButton: {
            defaultProps: {
                color: "primary",
            },

            variants: [
                styleSelected("primary"),
                styleSelected("secondary"),
                styleSelected("info"),
                styleSelected("success"),
                styleSelected("warning"),
                styleSelected("error"),
            ],

            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    "& svg": { width: 24, height: 24 },
                },
            },
        },

        MuiToggleButtonGroup: {
            defaultProps: {
                color: "primary",
            },

            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[8],
                    border: `solid 1px ${theme.palette.grey[500]}`,
                    "& .MuiToggleButton-root": {
                        border: "none",
                        margin: 4,
                        borderRadius: `${theme.shape.borderRadius}px !important`,
                        "&.Mui-disabled": {
                            border: "none",
                        },
                    },
                },
            },
        },
    };
}

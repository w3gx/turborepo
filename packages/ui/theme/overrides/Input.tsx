import { alpha, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
    return {
        MuiTextField: {
            defaultProps: {
                variant: "filled",
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": { color: theme.palette.text.disabled },
                    },
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: theme.palette.text.disabled,
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[500],
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    ...theme.typography.body2,
                },
            },
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.grey[500],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[500],
                    },
                    "&.Mui-error": {
                        backgroundColor: alpha(theme.palette.error.main, 0.08),
                    },
                    "&.Mui-focused": {
                        backgroundColor: theme.palette.action.focus,
                    },
                    "&.Mui-disabled": {
                        backgroundColor:
                            theme.palette.action.disabledBackground,
                    },
                },
                input: {
                    ...theme.typography.body2,
                },
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[500],
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[500],
                    },
                    "&.Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                                theme.palette.action.disabledBackground,
                        },
                    },
                },
            },
        },
    };
}

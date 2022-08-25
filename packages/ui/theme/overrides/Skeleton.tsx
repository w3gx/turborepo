import { alpha, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Skeleton(theme: Theme) {
    return {
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
            },

            styleOverrides: {
                root: {
                    backgroundColor: alpha(theme.palette.grey[500], 0.24),
                },
            },
        },
    };
}

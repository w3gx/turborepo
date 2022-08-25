import { FC, useMemo } from "react";
// @mui
import CssBaseline from "@mui/material/CssBaseline";
import {
    createTheme,
    ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

const ThemeProvider: FC<{
    isLight: boolean;
    themeDirection?: "ltr" | "rtl";
}> = ({ children, isLight, themeDirection = "rtl" }) => {
    const themeOptions = useMemo(
        () => ({
            palette: isLight ? palette.light : palette.dark,
            typography,
            direction: themeDirection,
            shape: { borderRadius: 8 },
            shadows: isLight ? shadows.light : shadows.dark,
            customShadows: isLight ? customShadows.light : customShadows.dark,
        }),
        [isLight, themeDirection]
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
};

export default ThemeProvider;

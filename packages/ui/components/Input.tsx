import { CSSProperties, FC } from "react";
import { InputAdornment, FilledInput } from "@mui/material";
import { IconifyIcon } from "@iconify/react";
import searchIcon from "@iconify/icons-carbon/search";

import { AppIcon } from "../theme/overrides/CustomIcons";

interface IAppInput {
    sx?: CSSProperties;
    icon: IconifyIcon;
    placeholder?: string;
    width: number;
    height: number;
}

export const AppInput: FC<IAppInput> = ({
    sx,
    width = 24,
    height = 24,
    placeholder,
    ...other
}) => (
    <FilledInput
        fullWidth
        startAdornment={
            <InputAdornment position="start">
                <AppIcon
                    icon={searchIcon}
                    sx={{ width, height, color: "text.disabled" }}
                />
            </InputAdornment>
        }
        placeholder={placeholder}
        sx={{
            "& .MuiFilledInput-input": { py: "18px" },
            ...sx,
        }}
        {...other}
    />
);

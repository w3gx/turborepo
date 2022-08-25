import { FC } from "react";
import { Typography, Stack, Link } from "@mui/material";
import starFilled from "@iconify/icons-carbon/star-filled";
import { AppIcon } from "../theme/overrides/CustomIcons";

interface IAppStarRating {
    reviews: number;
    ratings: number;
}

export const AppStarRating: FC<IAppStarRating> = ({
    reviews,
    ratings,
    ...other
}) => (
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
        <AppIcon
            icon={starFilled}
            sx={{ width: 20, height: 20, color: "warning.main" }}
        />
        <Typography variant="h6">
            {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
        </Typography>

        {reviews && (
            <Link variant="body2" sx={{ color: "text.secondary" }}>
                ({reviews} reviews)
            </Link>
        )}
    </Stack>
);

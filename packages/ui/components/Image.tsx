import { FC } from "react";
import Image from "next/image";

interface AppImageProps {
    src: string;
    width: number;
    height: number;
    quality?: number;
}

export const AppImage: FC<AppImageProps> = ({
    src,
    width,
    height,
    quality,
}) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            placeholder="blur"
        />
    );
};

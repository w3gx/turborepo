import { FC } from "react";
import Image from "next/image";

interface IAppImage {
    src: string;
    width: number;
    height: number;
    quality?: number;
}

export const AppImage: FC<IAppImage> = ({ src, width, height, quality }) => (
    <Image
        src={src}
        width={width}
        height={height}
        quality={quality}
        placeholder="blur"
    />
);

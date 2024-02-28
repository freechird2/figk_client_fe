import * as icons from "components/Icon/icon";
import { ReactElement } from "react";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconTypes {
  stroke: string;
  fill: string;
}

export interface IconProps {
  icon: IconType;
  stroke?: string;
  fill?: string;
  size?: number;
  onClick?: () => void;

  className?: string;
}

function Icon({
  icon,
  stroke,
  fill,
  size,
  onClick,
  className,
}: IconProps): ReactElement {
  const SVGIcon = icons[icon];
  const strokeColor = stroke || "none";
  const fillColor = fill || "transparent";
  const width = size;

  return (
    <SVGIcon
      onClick={onClick}
      style={{
        stroke: strokeColor,
        fill: fillColor,
        width: width,
        height: "auto",
        cursor: onClick ? "pointer" : "default",
        transition: "0.2s ease",
      }}
    />
  );
}

export default Icon;

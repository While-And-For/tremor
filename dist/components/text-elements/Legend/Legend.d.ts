import React from "react";
import { Color } from "../../../lib";
export interface LegendItemProps {
    name: string;
    color: Color;
}
export interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
    categories: string[];
    colors?: Color[];
}
declare const Legend: React.ForwardRefExoticComponent<LegendProps & React.RefAttributes<HTMLOListElement>>;
export default Legend;

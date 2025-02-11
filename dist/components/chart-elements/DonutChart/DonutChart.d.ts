import React from "react";
import { Color, ValueFormatter } from "../../../lib/inputTypes";
import type BaseAnimationTimingProps from "../common/BaseAnimationTimingProps";
type DonutChartVariant = "donut" | "pie";
export interface DonutChartProps extends BaseAnimationTimingProps, React.HTMLAttributes<HTMLDivElement> {
    data: any[];
    category?: string;
    index?: string;
    colors?: Color[];
    variant?: DonutChartVariant;
    valueFormatter?: ValueFormatter;
    label?: string;
    showLabel?: boolean;
    showAnimation?: boolean;
    showTooltip?: boolean;
    noDataText?: string;
}
declare const DonutChart: React.ForwardRefExoticComponent<DonutChartProps & React.RefAttributes<HTMLDivElement>>;
export default DonutChart;

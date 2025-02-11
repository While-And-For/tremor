import React from "react";
import BaseAnimationTimingProps from "../common/BaseAnimationTimingProps";
import { Color, ValueFormatter } from "../../../lib/inputTypes";
export type ScatterChartValueFormatter = {
    x?: ValueFormatter;
    y?: ValueFormatter;
    size?: ValueFormatter;
};
export interface ScatterChartProps extends BaseAnimationTimingProps, React.HTMLAttributes<HTMLDivElement> {
    data: any[];
    x: string;
    y: string;
    category: string;
    size?: string;
    valueFormatter?: ScatterChartValueFormatter;
    sizeRange?: number[];
    colors?: Color[];
    showOpacity?: boolean;
    startEndOnly?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    yAxisWidth?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    showGridLines?: boolean;
    autoMinXValue?: boolean;
    minXValue?: number;
    maxXValue?: number;
    autoMinYValue?: boolean;
    minYValue?: number;
    maxYValue?: number;
    allowDecimals?: boolean;
    noDataText?: string;
}
declare const ScatterChart: React.ForwardRefExoticComponent<ScatterChartProps & React.RefAttributes<HTMLDivElement>>;
export default ScatterChart;

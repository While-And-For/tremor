import React from "react";
import { LineProps } from "recharts";
import BaseChartProps from "../common/BaseChartProps";
import { CurveType } from "../../../lib/inputTypes";
export interface LineChartProps extends BaseChartProps {
    curveType?: CurveType;
    connectNulls?: boolean;
    dot?: LineProps["dot"];
    activeDot?: LineProps["activeDot"];
}
declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
export default LineChart;

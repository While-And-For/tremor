"use client";
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineProps,
  LineChart as ReChartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AxisDomain } from "recharts/types/util/types";

import { constructCategoryColors, getYAxisDomain } from "../common/utils";
import NoData from "../common/NoData";
import BaseChartProps from "../common/BaseChartProps";
import ChartLegend from "components/chart-elements/common/ChartLegend";
import { ChartTooltipFrame } from "../common/ChartTooltip";

import { spacing } from "lib";

import {
  BaseColors,
  colorPalette,
  defaultValueFormatter,
  getColorClassNames,
  // spacing,
  themeColorRange,
  tremorTwMerge,
} from "lib";
import { CurveType } from "../../../lib/inputTypes";

export interface LineChartProps extends BaseChartProps {
  curveType?: CurveType;
  connectNulls?: boolean;
  dot?: LineProps["dot"];
  activeDot?: LineProps["activeDot"];
  getLabelContent?: (a?: string) => JSX.Element | null;
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>((props, ref) => {
  const {
    data = [],
    dot = false,
    categories = [],
    index,
    colors = themeColorRange,
    valueFormatter = defaultValueFormatter,
    startEndOnly = false,
    showXAxis = true,
    showYAxis = true,
    yAxisWidth = 56,
    animationDuration = 900,
    showAnimation = true,
    showTooltip = true,
    showLegend = true,
    showGridLines = true,
    autoMinValue = false,
    curveType = "linear",
    minValue,
    maxValue,
    connectNulls = false,
    allowDecimals = true,
    noDataText,
    className,
    // Custom props
    activeDot,
    getLabelContent = () => false,
    ...other
  } = props;
  const [legendHeight, setLegendHeight] = useState(60);
  const categoryColors = constructCategoryColors(categories, colors);

  const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);

  return (
    <div ref={ref} className={tremorTwMerge("w-full h-80", className)} {...other}>
      <ResponsiveContainer className="h-full w-full">
        {data?.length ? (
          <ReChartsLineChart data={data}>
            {showGridLines ? (
              <CartesianGrid
                className={tremorTwMerge(
                  // common
                  "stroke-1",
                  // light
                  "stroke-tremor-content-subtle",
                  // dark
                  "dark:stroke-dark-tremor-content-subtle",
                )}
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              hide={!showXAxis}
              dataKey={index}
              interval="preserveStartEnd"
              tick={{ transform: "translate(0, 6)" }}
              ticks={startEndOnly ? [data[0][index], data[data.length - 1][index]] : undefined}
              fill=""
              stroke=""
              className={tremorTwMerge(
                // common
                "text-tremor-label",
                // light
                "fill-tremor-content",
                // dark
                "dark:fill-dark-tremor-content",
              )}
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
              minTickGap={5}
            />
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-3, 0)" }}
              fill=""
              stroke=""
              className={tremorTwMerge(
                // common
                "text-tremor-label",
                // light
                "fill-tremor-content",
                // dark
                "dark:fill-dark-tremor-content",
              )}
              tickFormatter={valueFormatter}
              allowDecimals={allowDecimals}
            />
            {showTooltip ? (
              <Tooltip
                // ongoing issue: https://github.com/recharts/recharts/issues/2920
                wrapperStyle={{ outline: "none" }}
                isAnimationActive={false}
                cursor={false}
                formatter={(..._props) => {
                  if (!getLabelContent(_props[0] as any)) return null;
                }}
                content={({ label }) =>
                  !!getLabelContent(label) && (
                    <ChartTooltipFrame>
                      <div
                        className={tremorTwMerge(
                          // light
                          "border-tremor-border",
                          // dark
                          "dark:border-dark-tremor-border",
                          spacing.twoXl.paddingX,
                          spacing.sm.paddingY,
                        )}
                      >
                        <p
                          className={tremorTwMerge(
                            // common
                            "font-medium",
                            // light
                            "text-tremor-content-emphasis",
                            // dark
                            "dark:text-dark-tremor-content-emphasis",
                          )}
                        >
                          {label}
                        </p>
                        <div
                          className={tremorTwMerge(
                            spacing.twoXl.paddingX,
                            spacing.sm.paddingY,
                            "space-y-1",
                          )}
                        >
                          {getLabelContent(label)}
                        </div>
                      </div>
                    </ChartTooltipFrame>
                  )
                }
                position={{ y: 0 }}
              />
            ) : null}
            {showLegend ? (
              <Legend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) => ChartLegend({ payload }, categoryColors, setLegendHeight)}
              />
            ) : null}
            {categories.map((category) => (
              <Line
                className={
                  getColorClassNames(
                    categoryColors.get(category) ?? BaseColors.Gray,
                    colorPalette.text,
                  ).strokeColor
                }
                dot={dot}
                activeDot={
                  activeDot ?? {
                    className: tremorTwMerge(
                      "stroke-tremor-background dark:stroke-dark-tremor-background",
                      getColorClassNames(
                        categoryColors.get(category) ?? BaseColors.Gray,
                        colorPalette.text,
                      ).fillColor,
                    ),
                  }
                }
                key={category}
                name={category}
                type={curveType}
                dataKey={category}
                stroke=""
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                isAnimationActive={showAnimation}
                animationDuration={animationDuration}
                connectNulls={connectNulls}
              />
            ))}
          </ReChartsLineChart>
        ) : (
          <NoData noDataText={noDataText} />
        )}
      </ResponsiveContainer>
    </div>
  );
});

LineChart.displayName = "LineChart";

export default LineChart;

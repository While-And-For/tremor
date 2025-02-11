/// <reference types="react" />
import React$1, { ReactNode } from 'react';
import { LineProps } from 'recharts';
import { enUS } from 'date-fns/locale';

type ValueFormatter = {
    (value: number): string;
};
type CurveType = "linear" | "natural" | "monotone" | "step";
declare const iconVariantValues: readonly ["simple", "light", "shadow", "solid", "outlined"];
type IconVariant = (typeof iconVariantValues)[number];
type HorizontalPosition = "left" | "right";
type VerticalPosition = "top" | "bottom";
type ButtonVariant = "primary" | "secondary" | "light";
declare const deltaTypeValues: readonly ["increase", "moderateIncrease", "decrease", "moderateDecrease", "unchanged"];
type DeltaType = (typeof deltaTypeValues)[number];
declare const sizeValues: readonly ["xs", "sm", "md", "lg", "xl"];
type Size = (typeof sizeValues)[number];
declare const colorValues: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
type Color = (typeof colorValues)[number];
declare const justifyContentValues: readonly ["start", "end", "center", "between", "around", "evenly"];
type JustifyContent = (typeof justifyContentValues)[number];
declare const alignItemsValues: readonly ["start", "end", "center", "baseline", "stretch"];
type AlignItems = (typeof alignItemsValues)[number];
type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";

interface BaseAnimationTimingProps {
    animationDuration?: number;
    showAnimation?: boolean;
}

interface BaseChartProps extends BaseAnimationTimingProps, React.HTMLAttributes<HTMLDivElement> {
    data: any[];
    categories: string[];
    index: string;
    colors?: Color[];
    valueFormatter?: ValueFormatter;
    startEndOnly?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    yAxisWidth?: number;
    showTooltip?: boolean;
    showGradient?: boolean;
    showLegend?: boolean;
    showGridLines?: boolean;
    autoMinValue?: boolean;
    minValue?: number;
    maxValue?: number;
    allowDecimals?: boolean;
    noDataText?: string;
}

interface AreaChartProps extends BaseChartProps {
    stack?: boolean;
    curveType?: CurveType;
    connectNulls?: boolean;
}
declare const AreaChart: React$1.ForwardRefExoticComponent<AreaChartProps & React$1.RefAttributes<HTMLDivElement>>;

interface BarChartProps extends BaseChartProps {
    layout?: "vertical" | "horizontal";
    stack?: boolean;
    relative?: boolean;
}
declare const BarChart: React$1.ForwardRefExoticComponent<BarChartProps & React$1.RefAttributes<HTMLDivElement>>;

interface LineChartProps extends BaseChartProps {
    curveType?: CurveType;
    connectNulls?: boolean;
    dot?: LineProps["dot"];
    activeDot?: LineProps["activeDot"];
    getLabelContent?: (a?: string) => JSX.Element | null;
}
declare const LineChart: React$1.ForwardRefExoticComponent<LineChartProps & React$1.RefAttributes<HTMLDivElement>>;

type DonutChartVariant = "donut" | "pie";
interface DonutChartProps extends BaseAnimationTimingProps, React$1.HTMLAttributes<HTMLDivElement> {
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
declare const DonutChart: React$1.ForwardRefExoticComponent<DonutChartProps & React$1.RefAttributes<HTMLDivElement>>;

type ScatterChartValueFormatter = {
    x?: ValueFormatter;
    y?: ValueFormatter;
    size?: ValueFormatter;
};
interface ScatterChartProps extends BaseAnimationTimingProps, React$1.HTMLAttributes<HTMLDivElement> {
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
declare const ScatterChart: React$1.ForwardRefExoticComponent<ScatterChartProps & React$1.RefAttributes<HTMLDivElement>>;

interface BadgeProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    color?: Color;
    size?: Size;
    icon?: React$1.ElementType;
    tooltip?: string;
}
declare const Badge: React$1.ForwardRefExoticComponent<BadgeProps & React$1.RefAttributes<HTMLSpanElement>>;

interface BadgeDeltaProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    deltaType?: DeltaType;
    isIncreasePositive?: boolean;
    size?: Size;
}
declare const BadgeDelta: React$1.ForwardRefExoticComponent<BadgeDeltaProps & React$1.RefAttributes<HTMLSpanElement>>;

interface IconProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    icon: React$1.ElementType;
    variant?: IconVariant;
    tooltip?: string;
    size?: Size;
    color?: Color;
}
declare const Icon: React$1.ForwardRefExoticComponent<IconProps & React$1.RefAttributes<HTMLSpanElement>>;

interface AccordionProps extends React$1.HTMLAttributes<HTMLDivElement> {
    defaultOpen?: boolean;
}
declare const Accordion: React$1.ForwardRefExoticComponent<AccordionProps & React$1.RefAttributes<HTMLDivElement>>;

declare const AccordionBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const AccordionHeader: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & React$1.RefAttributes<HTMLButtonElement>>;

interface AccordionListProps extends React$1.HTMLAttributes<HTMLDivElement> {
    children: React$1.ReactElement[] | React$1.ReactElement;
}
declare const AccordionList: React$1.ForwardRefExoticComponent<AccordionListProps & React$1.RefAttributes<HTMLDivElement>>;

interface ColProps extends React$1.HTMLAttributes<HTMLDivElement> {
    numColSpan?: number;
    numColSpanSm?: number;
    numColSpanMd?: number;
    numColSpanLg?: number;
}
declare const Col: React$1.ForwardRefExoticComponent<ColProps & React$1.RefAttributes<HTMLDivElement>>;

interface GridProps extends React$1.HTMLAttributes<HTMLDivElement> {
    numItems?: number;
    numItemsSm?: number;
    numItemsMd?: number;
    numItemsLg?: number;
    children: React$1.ReactNode;
}
declare const Grid: React$1.ForwardRefExoticComponent<GridProps & React$1.RefAttributes<HTMLDivElement>>;

interface CardProps extends React$1.HTMLAttributes<HTMLDivElement> {
    decoration?: HorizontalPosition | VerticalPosition | "";
    decorationColor?: Color;
}
declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Divider: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

interface FlexProps extends React$1.HTMLAttributes<HTMLDivElement> {
    flexDirection?: FlexDirection;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    children: React$1.ReactNode;
}
declare const Flex: React$1.ForwardRefExoticComponent<FlexProps & React$1.RefAttributes<HTMLDivElement>>;

declare const List: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLUListElement> & React$1.RefAttributes<HTMLUListElement>>;

declare const ListItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLLIElement> & React$1.RefAttributes<HTMLLIElement>>;

declare const Table: React$1.ForwardRefExoticComponent<React$1.TableHTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;

declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;

declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;

declare const TableHead: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;

declare const TableHeaderCell: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;

declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;

declare const TableFoot: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;

declare const TableFooterCell: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;

interface SelectProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    icon?: React$1.JSXElementConstructor<any>;
    enableClear?: boolean;
    children: React$1.ReactElement[] | React$1.ReactElement;
}
declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLDivElement>>;

interface SelectItemProps extends React$1.HTMLAttributes<HTMLLIElement> {
    value: string;
    icon?: React$1.ElementType;
}
declare const SelectItem: React$1.ForwardRefExoticComponent<SelectItemProps & React$1.RefAttributes<HTMLLIElement>>;

interface MultiSelectProps extends React$1.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    icon?: React$1.ElementType | React$1.JSXElementConstructor<any>;
    children: React$1.ReactElement[] | React$1.ReactElement;
}
declare const MultiSelect: React$1.ForwardRefExoticComponent<MultiSelectProps & React$1.RefAttributes<HTMLDivElement>>;

interface MultiSelectItemProps extends React$1.HTMLAttributes<HTMLLIElement> {
    value: string;
}
declare const MultiSelectItem: React$1.ForwardRefExoticComponent<MultiSelectItemProps & React$1.RefAttributes<HTMLLIElement>>;

interface SearchSelectProps extends React$1.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    icon?: React$1.ElementType | React$1.JSXElementConstructor<any>;
    children: React$1.ReactElement[] | React$1.ReactElement;
}
declare const SearchSelect: React$1.ForwardRefExoticComponent<SearchSelectProps & React$1.RefAttributes<HTMLDivElement>>;

interface SearchSelectItemProps extends React$1.HTMLAttributes<HTMLLIElement> {
    value: string;
    icon?: React$1.ElementType;
}
declare const SearchSelectItem: React$1.ForwardRefExoticComponent<SearchSelectItemProps & React$1.RefAttributes<HTMLLIElement>>;

interface TabProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React$1.ElementType;
}
declare const Tab: React$1.ForwardRefExoticComponent<TabProps & React$1.RefAttributes<HTMLButtonElement>>;

interface TabGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    defaultIndex?: number;
    index?: number;
    onIndexChange?: (index: number) => void;
    children: React$1.ReactElement[] | React$1.ReactElement;
}
declare const TabGroup: React$1.ForwardRefExoticComponent<TabGroupProps & React$1.RefAttributes<HTMLDivElement>>;

type TabVariant = "line" | "solid";
interface TabListProps extends React$1.HTMLAttributes<HTMLDivElement> {
    color?: Color;
    variant?: TabVariant;
    children: React$1.ReactElement[] | React$1.ReactElement;
}
declare const TabList: React$1.ForwardRefExoticComponent<TabListProps & React$1.RefAttributes<HTMLDivElement>>;

declare const TabPanel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const TabPanels: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React$1.ElementType;
    iconPosition?: HorizontalPosition;
    size?: Size;
    color?: Color;
    variant?: ButtonVariant;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    tooltip?: string;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

type Locale$1 = typeof enUS;
interface DatePickerProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "value" | "defaultValue"> {
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (value: Date | undefined) => void;
    minDate?: Date;
    maxDate?: Date;
    placeholder?: string;
    disabled?: boolean;
    color?: Color;
    locale?: Locale$1;
    enableClear?: boolean;
    enableYearNavigation?: boolean;
    children?: React$1.ReactElement[] | React$1.ReactElement;
}
declare const DatePicker: React$1.ForwardRefExoticComponent<DatePickerProps & React$1.RefAttributes<HTMLDivElement>>;

type Locale = typeof enUS;
type DateRangePickerValue = {
    from?: Date;
    to?: Date;
    selectValue?: string;
};
interface DateRangePickerProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "value" | "defaultValue"> {
    value?: DateRangePickerValue;
    defaultValue?: DateRangePickerValue;
    onValueChange?: (value: DateRangePickerValue) => void;
    enableSelect?: boolean;
    minDate?: Date;
    maxDate?: Date;
    placeholder?: string;
    selectPlaceholder?: string;
    disabled?: boolean;
    color?: Color;
    locale?: Locale;
    enableClear?: boolean;
    enableYearNavigation?: boolean;
    children?: React$1.ReactElement[] | React$1.ReactElement;
}
declare const DateRangePicker: React$1.ForwardRefExoticComponent<DateRangePickerProps & React$1.RefAttributes<HTMLDivElement>>;

interface DateRangePickerItemProps extends React$1.HTMLAttributes<HTMLLIElement> {
    value: string;
    from: Date;
    to?: Date;
}
declare const DateRangePickerItem: React$1.ForwardRefExoticComponent<DateRangePickerItemProps & React$1.RefAttributes<HTMLLIElement>>;

interface BaseInputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    type?: "text" | "password" | "email" | "url" | "number";
    defaultValue?: string | number;
    value?: string | number;
    icon?: React$1.ElementType | React$1.JSXElementConstructor<any>;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    stepper?: ReactNode;
    makeInputClassName: (className: string) => string;
}

type TextInputProps = Omit<BaseInputProps, "stepper" | "makeInputClassName"> & {
    type?: "text" | "password" | "email" | "url";
    defaultValue?: string;
    value?: string;
    icon?: React$1.ElementType | React$1.JSXElementConstructor<any>;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
};
declare const TextInput: React$1.ForwardRefExoticComponent<Omit<BaseInputProps, "stepper" | "makeInputClassName"> & {
    type?: "text" | "url" | "email" | "password" | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    icon?: React$1.JSXElementConstructor<any> | React$1.ElementType<any> | undefined;
    error?: boolean | undefined;
    errorMessage?: string | undefined;
    disabled?: boolean | undefined;
} & React$1.RefAttributes<HTMLInputElement>>;

interface NumberInputProps extends Omit<BaseInputProps, "type" | "stepper" | "onSubmit" | "makeInputClassName"> {
    step?: string;
    enableStepper?: boolean;
    onSubmit?: (value: number) => void;
    onValueChange?: (value: number) => void;
}
declare const NumberInput: React$1.ForwardRefExoticComponent<NumberInputProps & React$1.RefAttributes<HTMLInputElement>>;

interface TextProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
    color?: Color;
}
declare const Text: React$1.ForwardRefExoticComponent<TextProps & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Bold: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLElement> & React$1.RefAttributes<HTMLElement>>;

declare const Italic: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLElement> & React$1.RefAttributes<HTMLElement>>;

interface TitleProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
    color?: Color;
}
declare const Title: React$1.ForwardRefExoticComponent<TitleProps & React$1.RefAttributes<HTMLParagraphElement>>;

interface SubtitleProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
    color?: Color;
}
declare const Subtitle: React$1.ForwardRefExoticComponent<SubtitleProps & React$1.RefAttributes<HTMLParagraphElement>>;

interface MetricProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
    color?: Color;
}
declare const Metric: React$1.ForwardRefExoticComponent<MetricProps & React$1.RefAttributes<HTMLParagraphElement>>;

interface CalloutProps extends React$1.HTMLAttributes<HTMLDivElement> {
    title: string;
    icon?: React$1.ElementType;
    color?: Color;
}
declare const Callout: React$1.ForwardRefExoticComponent<CalloutProps & React$1.RefAttributes<HTMLDivElement>>;

interface LegendProps extends React$1.OlHTMLAttributes<HTMLOListElement> {
    categories: string[];
    colors?: Color[];
}
declare const Legend: React$1.ForwardRefExoticComponent<LegendProps & React$1.RefAttributes<HTMLOListElement>>;

interface CategoryBarProps extends React$1.HTMLAttributes<HTMLDivElement> {
    values: number[];
    colors?: Color[];
    markerValue?: number;
    showLabels?: boolean;
    tooltip?: string;
    showAnimation?: boolean;
}
declare const CategoryBar: React$1.ForwardRefExoticComponent<CategoryBarProps & React$1.RefAttributes<HTMLDivElement>>;

interface DeltaBarProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: number;
    isIncreasePositive?: boolean;
    tooltip?: string;
    showAnimation?: boolean;
}
declare const DeltaBar: React$1.ForwardRefExoticComponent<DeltaBarProps & React$1.RefAttributes<HTMLDivElement>>;

interface ProgressBarProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: number;
    label?: string;
    tooltip?: string;
    showAnimation?: boolean;
    color?: Color;
}
declare const ProgressBar: React$1.ForwardRefExoticComponent<ProgressBarProps & React$1.RefAttributes<HTMLDivElement>>;

interface MarkerBarProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: number;
    minValue?: number;
    maxValue?: number;
    markerTooltip?: string;
    rangeTooltip?: string;
    showAnimation?: boolean;
    color?: Color;
}
declare const MarkerBar: React$1.ForwardRefExoticComponent<MarkerBarProps & React$1.RefAttributes<HTMLDivElement>>;

type Bar = {
    key?: string;
    value: number;
    name: string;
    icon?: React$1.JSXElementConstructor<any>;
    href?: string;
    target?: string;
    color?: Color;
};
interface BarListProps extends React$1.HTMLAttributes<HTMLDivElement> {
    data: Bar[];
    valueFormatter?: ValueFormatter;
    color?: Color;
    showAnimation?: boolean;
}
declare const BarList: React$1.ForwardRefExoticComponent<BarListProps & React$1.RefAttributes<HTMLDivElement>>;

interface TrackerBlockProps {
    key?: string | number;
    color?: Color;
    tooltip?: string;
}
interface TrackerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    data: TrackerBlockProps[];
}
declare const Tracker: React$1.ForwardRefExoticComponent<TrackerProps & React$1.RefAttributes<HTMLDivElement>>;

export { Accordion, AccordionBody, AccordionHeader, AccordionList, AccordionListProps, AccordionProps, AlignItems, AreaChart, AreaChartProps, Badge, BadgeDelta, BadgeDeltaProps, BadgeProps, BarChart, BarChartProps, BarList, BarListProps, Bold, Button, ButtonProps, ButtonVariant, Callout, CalloutProps, Card, CardProps, CategoryBar, CategoryBarProps, Col, ColProps, Color, CurveType, DatePicker, DatePickerProps, DateRangePicker, DateRangePickerItem, DateRangePickerItemProps, DateRangePickerProps, DateRangePickerValue, DeltaBar, DeltaBarProps, DeltaType, Divider, DonutChart, DonutChartProps, Flex, FlexDirection, FlexProps, Grid, GridProps, HorizontalPosition, Icon, IconProps, IconVariant, Italic, JustifyContent, Legend, LegendProps, LineChart, LineChartProps, List, ListItem, MarkerBar, MarkerBarProps, Metric, MetricProps, MultiSelect, MultiSelectItem, MultiSelectItemProps, MultiSelectProps, NumberInput, NumberInputProps, ProgressBar, ProgressBarProps, ScatterChart, ScatterChartProps, SearchSelect, SearchSelectItem, SearchSelectItemProps, SearchSelectProps, Select, SelectItem, SelectItemProps, SelectProps, Size, Subtitle, SubtitleProps, Tab, TabGroup, TabGroupProps, TabList, TabListProps, TabPanel, TabPanels, TabProps, Table, TableBody, TableCell, TableFoot, TableFooterCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, TextInputProps, TextProps, Title, TitleProps, Tracker, TrackerProps, ValueFormatter, VerticalPosition };

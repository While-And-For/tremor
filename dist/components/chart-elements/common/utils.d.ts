import { Color } from "../../../lib/inputTypes";
export declare const constructCategoryColors: (categories: string[], colors: Color[]) => Map<string, Color>;
export declare const getYAxisDomain: (autoMinValue: boolean, minValue: number | undefined, maxValue: number | undefined) => (string | number)[];
export declare const constructCategories: (data: any[], color?: string) => string[];

import React from "react";
import { Color, HorizontalPosition, ButtonVariant, Size } from "../../../lib";
export interface ButtonIconOrSpinnerProps {
    loading: boolean;
    iconSize: string;
    iconPosition: string;
    Icon: React.ElementType | undefined;
    transitionState: string;
}
export declare const ButtonIconOrSpinner: ({ loading, iconSize, iconPosition, Icon, transitionState, }: ButtonIconOrSpinnerProps) => React.JSX.Element;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ElementType;
    iconPosition?: HorizontalPosition;
    size?: Size;
    color?: Color;
    variant?: ButtonVariant;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    tooltip?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;

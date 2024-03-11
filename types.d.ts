import {HTMLAttributes, ElementType, ReactNode } from "react";

export interface HTMLProps<T = HTMLHtmlElement> extends HTMLAttributes<T> {
    tag?: ElementType;
    children?: ReactNode;
}

export interface commonStylesAPI {
    space?: string;
}
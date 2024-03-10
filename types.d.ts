import {HTMLAttributes, ElementType} from "react";

export interface HTMLProps<T = HTMLHtmlElement> extends HTMLAttributes<T> {
    tag?: ElementType;
}
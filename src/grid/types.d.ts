import {HTMLProps, commonStylesAPI} from "../../types.js";

export interface GridProps extends HTMLProps, commonStylesAPI {
    layout?: string;
    itemWidth?: string;
    placement?: string;
}

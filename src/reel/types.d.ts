import {HTMLProps, commonStylesAPI} from "../../types.js";

export interface ReelProps extends HTMLProps, commonStylesAPI {
    itemWidth?: string;
    height?: string;
    noScrollBar?: boolean;
}

import {HTMLProps, commonStylesAPI} from "../../types.js";

export interface RowProps extends HTMLProps, commonStylesAPI {
    justify?: string;
    align?: string;

}

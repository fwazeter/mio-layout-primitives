import {HTMLProps, commonStylesAPI} from "../../types.js";

export interface SideBarProps extends HTMLProps, commonStylesAPI {
    sideBarWidth?: string;
    mainWidth?: string;
    direction?: boolean;
}

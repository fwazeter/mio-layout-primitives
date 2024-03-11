import {HTMLProps, commonStylesAPI} from '../../types.js';

export interface StackProps extends HTMLProps, commonStylesAPI {
    toggle?: boolean;
}
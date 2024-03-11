import {HTMLProps, commonStylesAPI} from '../../types.js';

export interface StackProps extends HTMLProps, commonStylesAPI {
    splitAfter?: string;
}
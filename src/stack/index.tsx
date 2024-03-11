import React from 'react';
import styles from './styles.module.scss';
import {StackProps} from "./types.js";

const Stack: React.FC<React.PropsWithChildren<StackProps>> = ({
                                                                  space,
                                                                  toggle,
                                                                  tag: Tag = 'div',
                                                                  children,
                                                                  ...props
                                                              }) => {
    return (
        <Tag
            className={styles.stack}
            data-space={space ? space : undefined}
            {...(toggle && {'data-toggle': toggle})}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Stack;
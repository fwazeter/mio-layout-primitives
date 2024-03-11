import React from 'react';
import styles from './styles.module.scss';
import {StackProps} from "./types.js";

const Stack: React.FC<React.PropsWithChildren<StackProps>> = ({
                                                                  space,
                                                                  splitAfter,
                                                                  tag: Tag = 'div',
                                                                  children,
                                                                  ...props
                                                              }) => {
    const splitAfterCSS = splitAfter ? `
        .${styles.stack}[data-split="${splitAfter}"] > :nth-child(${splitAfter}) {
            margin-block-end: auto;
        }
        ` : undefined;
    return (
        <>
            {splitAfterCSS && (<style>{splitAfterCSS}</style>)}
            <Tag
                className={styles.stack}
                data-space={space ? space : undefined}
                data-split={splitAfter ? splitAfter.toString() : undefined}
                {...props}
            >
                {children}
            </Tag>
        </>
    );
};

export default Stack;
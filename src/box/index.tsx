import React from 'react';
import styles from './styles.module.scss';
import { BoxProps } from './types.js';

const Box: React.FC<React.PropsWithChildren<BoxProps>> = ({
                                                              children,
                                                              tag: Tag = 'div',
                                                              space,
                                                              border,
                                                              ...props
                                                          }) => {

    return (
        <Tag
            className={styles.box}
            data-space={space ? space : undefined}
            data-border={border ? border : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Box;
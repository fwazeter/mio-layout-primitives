import React from 'react';
import styles from './styles.module.scss';
import {RepelProps} from './types.js';

const Repel: React.FC<React.PropsWithChildren<RepelProps>> = ({
                                                                  space,
                                                                  align,
                                                                  direction,
                                                                  tag: Tag = 'div',
                                                                  children,
                                                                  ...props
                                                              }) => {

    return (
        <Tag
            className={styles.repel}
            data-space={space ? space : undefined}
            data-align={align ? align : undefined}
            data-direction={direction ? true : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Repel;
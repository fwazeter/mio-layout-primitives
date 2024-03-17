import React from 'react';
import styles from './styles.module.scss';
import {RepelProps} from './types.js';

const Repel: React.FC<React.PropsWithChildren<RepelProps>> = ({
                                                                  space,
                                                                  align,
                                                                  tag: Tag = 'div',
                                                                  children,
                                                                  ...props
                                                              }) => {

    return (
        <Tag
            className={styles.repel}
            data-space={space ? space : undefined}
            data-align={align ? align : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Repel;
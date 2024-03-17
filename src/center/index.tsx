import React from 'react';
import styles from './styles.module.scss';
import {CenterProps} from './types.js';

const Center: React.FC<React.PropsWithChildren<CenterProps>> = ({
                                                                    space,
                                                                    contentWidth,
                                                                    tag: Tag = 'div',
                                                                    children,
                                                                    ...props
                                                                }) => {

    return (
        <Tag
            className={styles.center}
            data-space={space ? space : undefined}
            data-width={contentWidth ? contentWidth : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Center;
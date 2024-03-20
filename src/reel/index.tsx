import React from 'react';
import styles from './styles.module.scss';
import {ReelProps} from './types.js';

const Reel: React.FC<React.PropsWithChildren<ReelProps>> = ({
                                                                space,
                                                                itemWidth,
                                                                height,
                                                                noScrollBar,
                                                                tag: Tag = 'div',
                                                                children,
                                                                ...props
                                                            }) => {

    return (
        <Tag
            className={styles.reel}
            data-space={space ? space : undefined}
            data-item-width={itemWidth ? itemWidth : undefined}
            data-height={height ? height : undefined}
            data-no-scrollbar={noScrollBar ? true : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Reel;
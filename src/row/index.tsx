import React from 'react';
import styles from './styles.module.scss';
import {RowProps} from './types.js';

const Row: React.FC<React.PropsWithChildren<RowProps>> = ({
                                                              space,
                                                              justify,
                                                              align,
                                                              tag: Tag = 'div',
                                                              children,
                                                              ...props
                                                          }) => {

    return (
        <Tag
            className={styles.row}
            data-space={space ? space : undefined}
            data-justify={justify ? justify : undefined}
            data-align={align ? align : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Row;
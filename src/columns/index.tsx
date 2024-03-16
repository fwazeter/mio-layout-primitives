import React from 'react';
import styles from './styles.module.scss';
import {ColumnsProps} from './types.js';

const Columns: React.FC<React.PropsWithChildren<ColumnsProps>> = ({
                                                                      space,
                                                                      width,
                                                                      tag: Tag = 'div',
                                                                      children,
                                                                      ...props
                                                                  }) => {

    return (
        <Tag
            className={styles.columns}
            data-space={space ? space : undefined}
            data-width={width ? width : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Columns;
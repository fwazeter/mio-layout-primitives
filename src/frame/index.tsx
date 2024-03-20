import React from 'react';
import styles from './styles.module.scss';
import {FrameProps} from './types.js';

const Frame: React.FC<React.PropsWithChildren<FrameProps>> = ({
                                                                  ratio,
                                                                  tag: Tag = 'div',
                                                                  children,
                                                                  ...props
                                                              }) => {

    return (
        <Tag
            className={styles.frame}
            data-ratio={ratio ? ratio : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Frame;
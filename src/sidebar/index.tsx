import React from 'react';
import styles from './styles.module.scss';
import {SideBarProps} from './types.js';

const SideBar: React.FC<React.PropsWithChildren<SideBarProps>> = ({
                                                                      space,
                                                                      sideBarWidth,
                                                                      mainWidth,
                                                                      direction,
                                                                      tag: Tag = 'div',
                                                                      children,
                                                                      ...props
                                                                  }) => {

    return (
        <Tag
            className={styles.sidebar}
            data-space={space ? space : undefined}
            data-target-width={sideBarWidth ? sideBarWidth : undefined}
            data-min-width={mainWidth ? mainWidth : undefined}
            data-direction={direction ? true : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default SideBar;
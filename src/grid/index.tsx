import React from 'react';
import styles from './styles.module.scss';
import {GridProps} from './types.js';

/**
 * Grid Layout primitive.
 * @param space gap property, handles spacing between children.
 * @param itemWidth child item width.
 * @param placement placement of children, e.g. auto-fill, auto-fit.
 * @param layout preconfigured layout options, accepts number for # of columns.
 * @param Tag HTML tag.
 * @param children
 * @param props
 * @constructor
 */
const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
                                                                space,
                                                                itemWidth,
                                                                placement,
                                                                layout,
                                                                tag: Tag = 'div',
                                                                children,
                                                                ...props
                                                            }) => {

    return (
        <Tag
            className={styles.grid}
            data-space={space ? space : undefined}
            data-item-width={itemWidth ? itemWidth : undefined}
            data-placement={placement ? placement : undefined}
            data-layout={layout ? layout : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Grid;
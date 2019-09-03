import classNames from "classnames";
import * as React from 'react';
import {BadgePropsTypes} from "./PropsType";
import './style/index.less';

interface BadgeProps extends BadgePropsTypes {
    prefixCls?: string,
    style?: React.CSSProperties
}

class Badge extends React.Component<BadgeProps, any> {
    static defaultProps = {
        prefixCls: 'am-badge',
        size: 'small',
        overflowCount: 99,
        dot: false,
        corner: false
    };

    render() {
        let {
            prefixCls,
            children,
            text,
            size,
            overflowCount,
            dot,
            corner,
            ...restProps
        } = this.props;

        overflowCount = overflowCount as number;
        text =
            typeof text === 'number' && text > overflowCount
                ? `${overflowCount}+`
                : text;

        if (dot) {
            text = '';
        }

        const scrollNumberCls = classNames({
            [`${prefixCls}-dot`]: dot,
            [`${prefixCls}-dot-large`]: dot && size === 'large',
            [`${prefixCls}-text`]: !dot && !corner,
            [`${prefixCls}-corner`]: corner,
            [`${prefixCls}-corner-large`]: corner && size === 'large'

        });

        const badgeCls = classNames(prefixCls, {
            [`${prefixCls}-not-a-wrapper`]: !children,
            [`${prefixCls}-corner-wrapper`]: corner,
            [`${prefixCls}-corner-wrapper-large`]: corner && size === 'large'
        });
        return (
            <span className={badgeCls}>
                {children}
                {
                    (dot || text) && (
                        <sup className={scrollNumberCls} {...restProps} >{text}</sup>
                    )
                }
            </span>
        )
    }
}

export default Badge;

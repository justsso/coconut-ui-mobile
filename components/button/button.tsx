import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import {ButtonPropsType} from "./PropsType";
import './style/index.less';

interface PropsType extends ButtonPropsType {
    preCls?: string;
    className?: string;
    role?: string;
    inline?: boolean;
    activeClassName?: string;
    activeStyle?: boolean | React.CSSProperties;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default class Button extends React.Component<PropsType, any> {
    static defaultProps = {
        preCls: 'am-button',
        size: 'large',
        inline: false,
        disabled: false,
        loading: false,
        activeStyle: {},
    };

    render() {
        const {
            preCls,
            className,
            size,
            inline,
            type,
            loading,
            onClick,
            children,
            activeClassName,
            activeStyle,
            disabled,
            ...restProps
        } = this.props;
        const WrapCls = classnames(preCls, className, {
            [`${preCls}-primary`]: type === 'primary',
            [`${preCls}-ghost`]: type === 'ghost',
            [`${preCls}-warning`]: type === 'warning',
            [`${preCls}-small`]: size === 'small',
            [`${preCls}-inline`]: inline,
            [`${preCls}-disabled`]: disabled,
            [`${preCls}-loading`]: loading,
        });
        return (
            <TouchFeedback
                activeClassName={activeClassName || (activeStyle ? `${preCls}-active` : undefined)}
                activeStyle={activeStyle}
                disabled={disabled}
            >
                <a
                    role="button"
                    className={WrapCls}
                    {...restProps}
                    onClick={disabled ? undefined : onClick}
                    aria-disabled={disabled}
                >{children}</a>
            </TouchFeedback>
        )
    }
}

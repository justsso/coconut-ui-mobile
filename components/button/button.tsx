import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import Icon from '../icon/icon';

import {ButtonPropsType} from "./PropsType";

import './style/index.less';

interface PropsType extends ButtonPropsType {
    preCls?: string;
    className?: string;
    role?: string;
    inline?: boolean;
    icon?: React.ReactNode;
    activeClassName?: string;
    activeStyle?: boolean | React.CSSProperties;
    style?: React.CSSProperties;
    loading?: boolean;
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
            icon,
            onClick,
            children,
            activeClassName,
            activeStyle,
            disabled,
            ...restProps
        } = this.props;

        console.log(icon, loading, 50);
        const WrapCls = classnames(preCls, className, {
            [`${preCls}-primary`]: type === 'primary',
            [`${preCls}-ghost`]: type === 'ghost',
            [`${preCls}-warning`]: type === 'warning',
            [`${preCls}-small`]: size === 'small',
            [`${preCls}-inline`]: inline,
            [`${preCls}-disabled`]: disabled,
            [`${preCls}-loading`]: loading,
            [`${preCls}-icon`]: !!icon,

        });
        console.log(
            !loading ? null :
                (icon ||
                    <Icon style={{marginRight: '.5rem'}} className='iconfont icon-load' spin={true}/>)
            , 66);
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
                >
                    {
                        icon ? icon : (loading ?
                            <Icon style={{marginRight: '.5rem'}} className='iconfont icon-load' spin={true}/> : null)
                    }

                    {children}
                </a>
            </TouchFeedback>
        )
    }
}

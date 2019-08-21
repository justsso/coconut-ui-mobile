import * as React from 'react';
import classnames from 'classnames';
import {TagPropsType} from "./PropsType";
import './style/index.less'
// import {useState} from "react";

export interface TagProps extends TagPropsType {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties
}

export default class Tag extends React.Component<TagProps, any> {
    static defaultProps = {
        prefixCls: 'am-tag',
        disabled: false,
        selected: false,
        small: false,
        onClick() {
        }
    };

    constructor(props: TagProps) {
        super(props);

        this.state = {
            selected: props.selected,
        };
        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(nextProps: Readonly<TagProps>): void {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            })
        }
    }

    onClick() {
        const {disabled, onClick} = this.props;
        if (disabled) {
            return;
        }
        const isSelect = this.state.selected;
        this.setState({selected: !isSelect},
            () => {
                if (onClick) {
                    onClick(!isSelect)
                }
            })
    }

    render() {
        const {children, className, prefixCls, disabled, small, style} = this.props;
        const wrapCls = classnames(className, prefixCls, {
            [`${prefixCls}-normal`]:
            !disabled && (!this.state.selected || small ),
            [`${prefixCls}-small`]: small,
            [`${prefixCls}-active`]: this.state.selected && !disabled && !small ,
            [`${prefixCls}-disabled`]: disabled,
        });


        return  (
            <div className={wrapCls}
                 onClick={this.onClick}
                 style={style}
            >
                <div className={`${prefixCls}-text`}>{children}</div>
            </div>
        );
    }
}

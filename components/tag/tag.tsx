import * as React from 'react';
import classnames from 'classnames';
import {TagPropsType} from "./PropsType";
import TouchFeedback from 'rmc-feedback';
import './style/index.less'

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
        closable: false,
        small: false,
        onChange() {
        },
        onClose() {
        },
        afterClose() {
        }
    };

    constructor(props: TagProps) {
        super(props);

        this.state = {
            selected: props.selected,
            closed: false
        };
        this.onClick = this.onClick.bind(this);
        this.onTagClose = this.onTagClose.bind(this);

    }

    componentWillReceiveProps(nextProps: Readonly<TagProps>): void {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            })
        }
    }

    onClick() {
        const {disabled, onChange} = this.props;
        if (disabled) {
            return;
        }
        const isSelect = this.state.selected;

        this.setState({selected: !isSelect},
            () => {
                if (onChange) {
                    onChange(!isSelect)
                }
            })
    }

    onTagClose() {
        if (this.props.onClose) {
            this.props.onClose();
        } else {
            this.setState(
                {
                    closed: true,
                },
                this.props.afterClose,
            );
        }
    }

    render() {
        const {children, className, prefixCls, disabled, closable, small, style} = this.props;
        const wrapCls = classnames(className, prefixCls, {
            [`${prefixCls}-normal`]:
            !disabled && (!this.state.selected || small || closable),
            [`${prefixCls}-small`]: small,
            [`${prefixCls}-active`]: this.state.selected && !disabled && !small || closable,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-closable`]: closable
        });

        const closableDom =
            closable && !disabled && !small ? (
                <TouchFeedback>
                    <div
                        className={`${prefixCls}-close`}
                        role="button"
                        onClick={this.onTagClose}
                        aria-label="remove tag"
                    >x
                    </div>
                </TouchFeedback>
            ) : null;


        return !this.state.closed ? (
            <div className={wrapCls}
                 onClick={this.onClick}
                 style={style}
            >
                <div className={`${prefixCls}-text`}>{children}</div>
                {closableDom}
            </div>
        ) : null;
    }
}

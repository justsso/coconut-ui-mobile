import * as React from 'react';
import classnames from 'classnames';
import {TagPropsType} from "./PropsType";

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
        onChange() {},
        onClose() {},
        afterClose() {}
    };

    constructor(props: TagProps) {
        super(props);

        this.state = {
            selected: props.selected,
            closed: false
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {children, className, prefixCls, disabled, closable, small, style} = this.props;
        const wrapCls = classnames(className, prefixCls, {
            [`${prefixCls}-normal`]
        })
    }
}

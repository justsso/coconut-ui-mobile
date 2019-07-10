import classnames from 'classnames';
import * as React from 'react';
import {WingBlankPropsType} from './PropsType';

export interface WingBlankProps extends WingBlankPropsType {
    prefixCls?: string;
    classname?: string;
    style?: React.CSSProperties;
}

export default class WingBlank extends React.Component<WingBlankProps, any> {
    static defaultProps = {
        prefixCls: 'am-wingblank',
        size: 'lg',
    };
    componentDidMount(): void {

    }

    render() {
        const {prefixCls, size, className, children, style} = this.props;
        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);
        return (
            <div className={wrapCls} style={style}>
                {children}
            </div>
        );
    }
}


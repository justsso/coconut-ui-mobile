//上下留白
import {WhiteSpacePropsType} from './PropsType';
import * as React from 'react';
import classnames from 'classnames';

interface WhiteSpaceProps extends WhiteSpacePropsType {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}


class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps = {
        prefixCls: 'am-whitespace',
        size: 'md'
    };

    render(): React.ReactNode {
        const {prefixCls, size, className, style, onClick} = this.props;
        const WrapClas = classnames(prefixCls, `${prefixCls}-${size}`, className);
        return (
            <div className={WrapClas} style={style} onclick={onClick}>{this.props.children}</div>
        );
    }
}

export default WhiteSpace;

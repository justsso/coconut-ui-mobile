import classnames from 'classnames';
import {WhiteSpacePropsType} from './PropsType';
import * as React from 'react';

export interface WhiteSpaceProps extends WhiteSpacePropsType {
    prefixCls?: string,
    classname?: string,
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}


export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps = {
        prefixCls: 'am-whitespace',
        size: 'md'
    };

    render() {
        const {prefixCls, size, classname, style, onClick, children} = this.props;
        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, classname);
        return (
            <div className={wrapCls} style={style} onClick={onClick}>
                {children}
            </div>
        );
    }
}


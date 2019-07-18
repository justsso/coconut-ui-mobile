import * as React from 'react';
import classnames from 'classnames';
import {WhiteSpacePropsType} from "./PropsType";
import './style/index.less';

interface PropsType extends WhiteSpacePropsType {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default class WhiteSpace extends React.Component<PropsType, any> {
    static defaultProps = {
        prefixCls: 'am-whitespace',
        size: 'md'
    };

    render() {
        const {prefixCls, className, onClick, children, size} = this.props;
        const classname = classnames(prefixCls, `${prefixCls}-${size}`, className);

        return (
            <div className={classname} onClick={onClick}>{children}</div>
        )
    }
}

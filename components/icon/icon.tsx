import * as React from 'react';
import classnames from 'classnames';
import {IconPropsType} from './PropsType';
import './style/index.less';

// 使用方法
// <Icon className='icon-shenghuo' spin={true}/>
//  className 要以icon-开头


interface Props extends IconPropsType {
    prefixClas?: string;
    style?: React.CSSProperties;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    className: string;
}

class Icon extends React.Component<Props, any> {
    static defaultProps = {
        prefixClas: 'c-icon',
        rotate: 0,
        size: 'md'
    };

    render(): React.ReactNode {
        const {className, style, size, spin, prefixClas, rotate} = this.props;
        const wrapClas = classnames('iconfont', className,
            `c-icon-${size}`,
            {
                [`${prefixClas}-spin`]: spin
            }
        );


        return (
            <span className={wrapClas} style={{...style, transform: `rotate(${rotate}deg)`}}/>
        )
    }
}

export default Icon;

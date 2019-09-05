import RcCollapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import {AccordionPropTypes} from "./PropsType";
import './style/index.less';

export interface AccordionProps extends AccordionPropTypes{
    prefixCls ?: string,
    className ?: string,
    openAnimation?: any,
    accordion?: boolean,
    style?: React.CSSProperties;
}

export default class Accordion extends React.Component<AccordionProps, any>{
    static Panel = Panel;

    static defaultProps = {
        prefixCls: 'am-accordion',
    };

    render() {
        return <RcCollapse {...this.props} />;
    }
}


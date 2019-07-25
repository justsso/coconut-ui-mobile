import * as React from 'react';
import classnames from 'classnames';
import {ToastPropsType} from "./PropsType";

interface PropsType extends ToastPropsType{
    content: React.ReactNode | string,
    duration?: number,
    onClose:
}

class Toast extends React.Component<PropsType, any> {
    static info(){

    }

    static success() {

    }

    static fail(){

    }
    static hide(){

    }

}


export default Toast;

import * as React from 'react';
import classnames from 'classnames';
import {ToastPropsType} from "./PropsType";
import Notification from 'rmc-notification';
import Icon from '../icon/icon';


let messageInstance: any;
const prefixCls = 'am-toast';


function getMessageInstance(mask: boolean, callback: () => void) {
    if(messageInstance){
        messageInstance.destroy();
        messageInstance = null;
    }
}


function notice(){

}
//
// class Toast extends React.Component<PropsType, any> {
//     static info(){
//
//     }
//
//     static success() {
//
//     }
//
//     static fail(){
//
//     }
//     static hide(){
//
//     }
//
// }


// export default Toast;

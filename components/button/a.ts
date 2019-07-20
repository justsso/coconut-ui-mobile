let activeClassName: string | undefined = 'ac';
let activeStyle: string = 'asty';
let prefixCls: string = 'am-buttom';

activeClassName = activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)

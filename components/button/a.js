var activeClassName = '';
var activeStyle = '';
var prefixCls = 'am-buttom';
activeClassName = activeClassName || (activeStyle ? prefixCls + "-active" : undefined);
console.log(activeClassName);

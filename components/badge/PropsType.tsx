export interface BadgePropsTypes {
    size ?: 'large' | 'small';
    overflowCount?: number;
    corner ?: boolean;
    dot ?: boolean;
    text?: any;
}

//接口是对值所具有的结构进行类型检查
//接口代表了一种类型，会对值的类型有一个检查的。类型检查器不会去检查属性的顺序，只要相应的属性
//存在并且类型也是对的就ok

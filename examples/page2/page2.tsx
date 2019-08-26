import * as React from 'react';
import Tag from "../../components/tag/tag";
import Skeleton from "../../components/skeleton/skeleton";

class PageTwo extends React.Component {

    render() {
        return (
            <div>
                <Tag onClick={(selected: boolean) => {
                    console.log(selected);
                    console.log('jiating');
                    return;
                }}>家庭</Tag>
                <Tag
                    onClick={(selected: boolean) => {
                        console.log(selected)
                    }}
                >123</Tag>
                <h6>设置头像</h6>
                <Skeleton
                    loading={true}
                    title={false}
                    avatar avatarShape={"square"}
                    action={false}
                />
                <h6>设置avatar title， 自定义title 宽度</h6>
                <Skeleton title={true} titleWidth={120} loading  avatar={true} />

                <h6>设置avatar title action</h6>
                <Skeleton avatar avatarShape={'round'} title={true}  action={true} />

                <h6>设置row   row=3, action</h6>
                <Skeleton avatar row={3} action title/>


                <h6>设置 rowWidth 属性，可以是数组，也可是是单个值rowWidth={'80%'}</h6>
                <Skeleton avatar row={2} rowWidth={'80%'} />


                <h6>设置 rowWidth 属性，可以是数组rowWidth={['100%', '80%']}，也可是是单个值</h6>
                <Skeleton avatar row={2} rowWidth={['100%', '80%']} />

                <h6>设置 rowProps, rowProps 可以是对象，也可以是对象数组</h6>
                <Skeleton avatar row={2} rowProps={{width: '100%', height: '14px'}} />

                <Skeleton avatar action row={2}  rowProps={[{width: '40%', height: 10}, {width: '80%', height: 10}]} />
                <h6>动画: animate</h6>
                <Skeleton  animate avatar  row={2} title rowProps={[{width: '40%', height: 10}, {width: '80%', height: 10}]} action />
            </div>
        )
    }

}

export default PageTwo;

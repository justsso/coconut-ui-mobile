import * as React from 'react';
import WingBlank from '../components/wing-blank/wing-blank';
import WhiteSpace from '../components/white-space/white-space';
import Button from '../components/button/button';
import Icon from '../components/icon/icon';
import Toast from '../components/toast/toast';
import Tag from '../components/tag/tag';
// 暂未实现Loading
import './index.less';

class ExampleOne extends React.Component {
    render() {
        return (
            <div className='body'>
                <WingBlank>
                    <Button>点击</Button><WhiteSpace/>
                    <Button disabled>点击</Button><WhiteSpace/>
                    <Button type='primary'>primary</Button><WhiteSpace/>
                    <Button type='primary' size='small'>primary</Button><WhiteSpace/>
                    <Button type='primary' disabled>primary</Button><WhiteSpace/>
                    <Button type='ghost'>按钮</Button><WhiteSpace/>
                    <Button type='ghost' disabled>按钮</Button><WhiteSpace/>
                    <Button type='warning'>按钮</Button><WhiteSpace/>
                    <Button type='warning' disabled>按钮</Button><WhiteSpace/>
                    <Button inline type='ghost'>inline ghost</Button>
                    <Button inline type='ghost' size='small'>inline ghost small</Button>
                    <Button inline type='ghost' size='small'
                            onClick={() => console.log(123)}
                            activeClassName={"myActiveClass"}
                    >inline ghost small</Button>

                    <Icon className='icon-book' spin={true}/>
                    <Icon className='icon-book' rotate={180}/>

                    <WhiteSpace/>
                    <Button type='primary'>
                        <Icon className='icon-book' rotate={90}/>
                        123
                    </Button>
                    <WhiteSpace/>
                    <Button loading={true} type='primary'>loading</Button>
                    <WhiteSpace/>
                    <Button icon={<Icon className='icon-up'/>} type='warning'>自己得icon</Button>
                    <WingBlank>
                        <div className="placeholder">Block</div>
                    </WingBlank>
                    <WingBlank size='md'>
                        <div className="placeholder">Block</div>
                    </WingBlank>
                    <WingBlank size='sm'>
                        <div className="placeholder">Block</div>
                    </WingBlank>
                    <WhiteSpace size={'xs'}>
                        <div className="placeholder">Block</div>
                    </WhiteSpace>
                    <WhiteSpace size='sm'>
                        <div className="placeholder">Block</div>
                    </WhiteSpace>
                    <WhiteSpace size='md'>
                        <div className="placeholder">Block</div>
                    </WhiteSpace>
                    <WhiteSpace size='lg'>
                        <div className="placeholder">Block</div>
                    </WhiteSpace>
                    <WhiteSpace size='xl'>
                        <div className="placeholder">Block</div>
                    </WhiteSpace>

                    <Button size='small' type='primary' inline
                            onClick={() => {
                                Toast.info('Toast.info');
                            }}
                    > Toast.info() </Button>

                    <Button size='small' type='primary' inline
                            onClick={() => {
                                Toast.success('success', 1.5, () => {
                                    console.log('success close')
                                }, true)
                            }}
                    >点击我显示success</Button>
                    <Button size='small' type='primary' inline
                            onClick={() => {
                                Toast.offline('offline', 1.5, () => {
                                    console.log('offline close')
                                }, true)
                            }}
                    >网络出错</Button>
                    <Button onClick={() => {
                        Toast.loading('加载中...', 2)
                    }}>loading toast</Button>

                    <Tag>123</Tag>
                    <Tag disabled={true}>456</Tag>
                    <Tag selected={true} >789</Tag>
                    <Tag  small={true}>789</Tag>
                    <Tag closable={true}>111</Tag>
                </WingBlank>
            </div>
        )
    }
}

export default ExampleOne;

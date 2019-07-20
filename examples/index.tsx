import * as React from 'react';
import WingBlank from '../components/wing-blank/wing-blank';
import WhiteSpace from '../components/white-space/white-space';
import Button from '../components/button/button';
import Icon from '../components/icon/icon';

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

                    <Icon/>
                    <WhiteSpace/>
                    <Button  type='primary'> <Icon/>123</Button>
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
                </WingBlank>
            </div>
        )
    }
}

export default ExampleOne;

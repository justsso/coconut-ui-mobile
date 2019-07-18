import * as React from 'react';
import WingBlank from '../components/wing-blank/wing-blank';
import WhiteSpace from '../components/white-space/white-space';

import './index.less';

class ExampleOne extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default ExampleOne;

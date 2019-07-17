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
                <WhiteSpace><div>累死了说了算</div></WhiteSpace>
            </div>

        )
    }
};

export default ExampleOne;

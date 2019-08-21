import * as React from 'react';
// import PageOne from "./page1/page1";
import PageTwo from "./page2/page2";
import './index.less';

class ExampleOne extends React.Component {
    render() {
        return (
            <div className='body'>
                {/*<PageOne />*/}
                <PageTwo />
            </div>
        )
    }
}

export default ExampleOne;

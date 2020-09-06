import * as React from 'react';
import PageOne from "./page1/page1";
import PageTwo from "./page2/page2";
import PageThree from "./page3/page3";
import {useState} from 'react';
import './index.less';

function ExampleOne() {
    let [status] = useState([true, true, true]
    );

    return (
        <div className='body'>
            {
                status[0] && <PageOne />
            }
            {
                status[1] && <PageTwo />
            }
            {
                status[2] && <PageThree />
            }
        </div>
    )
}

export default ExampleOne;

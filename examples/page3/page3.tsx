import * as React from 'react';
import Badge from "../../components/badge/badge";
import WhiteSpace from "../../components/white-space/white-space";
import WingBlank from "../../components/wing-blank/wing-blank";
import Accordion from "../../components/accordion/accordion";

function PageThree() {
    return <WingBlank>
        <h6>Badge组件，没有corner、hot属性的</h6>
        <h6>Badge组件： dot </h6>
        <Badge dot>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }}/>
        </Badge>
        <WhiteSpace/>
        <Badge dot size={'large'}>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }}/>
        </Badge>
        <WhiteSpace/>
        <h6>
            Badge text: string|number
        </h6>
        <Badge text={20}>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }}/>
        </Badge>
        <WhiteSpace/>
        <Badge text={'kkk'}>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }}/>
        </Badge>
        <h6>
            Badge overflowCount 默认99
        </h6>
        <Badge text={100}>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }}/>
        </Badge>
        <WhiteSpace/>
        <div style={{
            width: '100px',
            height: '40px',
            background: '#fff',
            lineHeight: '40px'
        }}>我的消息
            <Badge text={17} />
        </div>
        <WhiteSpace/>

        <Badge dot />
        <WhiteSpace />

        <Accordion
            defaultActiveKey="0" className="my-accordion"
        >
            <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
            <Accordion.Panel header="Title 3" className="pad" showArrow>
                text text text text text text text text text text text text text text text
            </Accordion.Panel>
        </Accordion>
    </WingBlank>
}

export default PageThree;

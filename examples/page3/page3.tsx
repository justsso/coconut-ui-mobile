import * as React from 'react';
import Badge from "../../components/badge/badge";
import WhiteSpace from "../../components/white-space/white-space";
import WingBlank from "../../components/wing-blank/wing-blank";
import Button from "../../components/button/button";
function PageThree (){
    return <WingBlank>
        <h6>Badge组件： dot </h6>
        <Badge dot >
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }} />
        </Badge>
        <WhiteSpace />
        <Badge dot size={'large'} >
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }} />
        </Badge>
        <WhiteSpace />
        <h6>
            Badge text: string|number
        </h6>
        <Badge text={20}>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }} />
        </Badge>
        <WhiteSpace />
        <Badge text={'kkk'}>
            <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                background: '#fff'
            }} />
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
            }} />
        </Badge>
    </WingBlank>
}

export default PageThree;
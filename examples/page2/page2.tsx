import * as React from 'react';
import Tag from "../../components/tag/tag";
class PageTwo extends React.Component{

    render(){
        return (
            <div>
                <Tag onClick= { (selected: boolean) => {
                    console.log(selected);
                    console.log('jiating');
                    return ;
                }}>家庭</Tag>
            </div>
        )
    }

}

export default PageTwo;

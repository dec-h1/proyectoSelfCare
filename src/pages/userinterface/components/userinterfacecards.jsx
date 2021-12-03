import React, { useState } from 'react';
import { Card } from 'antd';

function InterfaceCards(){
    const tabList = [
        {
          key: 'tab1',
          tab: 'tab1',
        },
        {
            key: 'tab2',
            tab: 'tab2',
          },
    ];
    const contentList = {
        tab1: <p>content1</p>,
        tab2: <p>content2</p>,
      };

    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    
    const onTab1Change = key => {
        setActiveTabKey1(key);
      };
    
      
return(
     <Card
        style={{ width: '100%' }}
        title="Card title"
        extra={<a href="#" className="text-black font-bold hover:text-primary hover:font-bold">Más</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
     </Card>
);

}
export {InterfaceCards};
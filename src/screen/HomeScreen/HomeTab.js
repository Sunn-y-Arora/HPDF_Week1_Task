import React from 'react';

 import {  Content } from 'native-base';
import  { TwitterCard }  from '../../components';


const HomeTab = () => {

    return (
   <Content>
      <TwitterCard />
      <TwitterCard />
      <TwitterCard/>
      </Content>
);
  };

export default HomeTab;

import React from 'react';
import { TouchableWithoutFeedback,Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text } from "native-base";


const HomeHeader = (props) => {


   const {navigation} =props;


    return (
    <Header hasTabs style={{backgroundColor:'white'}}>
    <Left>
    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
    </Left>
    <Body>
    <Title style={{color: 'black',alignContent: 'flex-start'}}>Home</Title>
    </Body>
    <Right />
    </Header>
  );
};


export default HomeHeader;

import React from 'react';
import { Text,TextInput, View } from 'react-native';
import { Container,Title,Content, Left,Right,Body, Header,Item,Icon,Input,Button} from 'native-base';
const SearchHeader = (props) => {

   const {navigation} =props;
  return (
  <Header searchBar style={{backgroundColor:'white'}}>
  <Left>
    {}
    <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
    </Left>
    <Body >
     
     <Item style={{width: 200, backgroundColor: 'lightgrey'}}>
    <Input placeholder="Search" 
           onChangeText={(text) => this.setState({text})}

        />
      </Item>
    
    </Body>
   
  <Right>
  <Icon name="add" style={{color: 'blue'}} />
  </Right>
</Header>
  );
};


export default SearchHeader;

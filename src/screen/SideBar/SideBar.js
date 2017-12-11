import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from "native-base";


const routes = [{name: "PRofile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moment",icon: 'thunderstorm'}, {name: 'Highlight',icon:'pricetags'} ];
let userdetails='';

export default class SideBar extends React.Component {
 
  constructor() {
    super();
    
    
    userdetails = {
          username: 'Sunny Arora',
          userid: '@Sunny-Arora-1996',
          following: 326,
          followers: 756,
          thumbnail: '../../assets/images/tekk.jpg',
        };
        console.log(userdetails + 'user');
  }

  render() {


    const {username, userid,thumbnail,following,followers} = userdetails;
    console.log(username);
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('../../assets/images/thub.jpg')} />
              <Text style={{fontWeight: 'bold'}}>{username}</Text>
              <Text note>{userid}</Text>
                  
              
            <View style = {{flexDirection: 'row'}} >
              <Text>{following} Following </Text>
              <Text >{followers} Followers</Text>
              </View>
              </View>
             </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>

          {	}
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon
                  
                >
                <Left>
                <Icon name={data.icon}/>
                { }
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer >
            <Left>
             <Icon style={{ marginLeft: 10 }} name='moon'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
        </Content>
      </Container>
    );
  }
}

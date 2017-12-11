import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './UserDetails';
const Item = Picker.Item;


const TwitterCard = () => {

    return (   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../assets/images/thub.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                  {}
                 <UserDetails
                   titleText="The Lost legend"
                   bodyText="The upcoming rituals"
                   twitterName='ID'
                   lastSeenTime='27m'/>
                <Icon name='arrow-dropdown'/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
 
                {/* <Image source={{uri: ''}}/> */}
                <Image source={require('../assets/images/tekk.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={ styles.buttonTextStyle }>60</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={ styles.buttonTextStyle } >2</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={ styles.buttonTextStyle }>19</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 </Button>


           </CardItem>
         </Card>
       
     );
   };

     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }

     };

export { TwitterCard };
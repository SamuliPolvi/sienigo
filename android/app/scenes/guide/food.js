import React, { Component, PropTypes } from 'react';
import {Image, Dimensions} from 'react-native';
import {H1, Content,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default class Food extends Component {
  constructor() {
    super();
  }


  render() {

    const ScreenHeight = Dimensions.get("window").height - 100;

    return (
      <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: ScreenHeight - 30}}>
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Ruoka </H1>
           <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Retkeilijän ruoka täytyy olla ravitsevaa ja sitä täytyy olla riittävästi.
             Hyviä esimerkkejä retkelle soveltuvista ruuista ovat: </Text> 
             <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>- Erilaiset ns. pussikeitot missä keittoainekset ovat jauhemaisessa muodossa. Niihin lisätään vain vesi ja kuumennetaan, ja niin helposti syntyy hyvä keitto.</Text>
             <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>- Kestoeinekset tai ns sissimuonat toimivat samalla tavalla ja pakkaukset eivät paina paljoa.</Text>
          </Content>
         </Row>   
      </Grid> 
    )
  }
}
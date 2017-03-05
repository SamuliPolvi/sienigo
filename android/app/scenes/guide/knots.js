import React, { Component, PropTypes } from 'react';
import {Image, Dimensions} from 'react-native';
import {H1, Content,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const { width, height } = Dimensions.get('window');

export default class Knots extends Component {
  constructor() {
    super();
  }


  render() {

    return (
      <Grid>
        <Row>
          <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Solmut </H1>
           <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Melkein kaikki solmut pyrkivät kietomaan köyden itsensä alle, jolloin köyteen tuleva veto puristaa köyttä estäen sitä liukumasta.</Text>
           <Image resizeMode='contain'  style={{height: height, width: width, marginTop: -40}} source={require('../../src/main/assets/images/koukku.png')} />
           <Image resizeMode='contain'  style={{height: height, width: width, marginTop: -80}} source={require('../../src/main/assets/images/singlerope.png')} />
           <Image resizeMode='contain'  style={{height: height, width: width, marginTop: -80}} source={require('../../src/main/assets/images/tworopes.png')} />
           <Image resizeMode='contain'  style={{height: height, width: width, marginTop: -80}} source={require('../../src/main/assets/images/koytos.png')} />
           <Image resizeMode='contain'  style={{height: height, width: width, marginTop: -80, marginBottom: -40}} source={require('../../src/main/assets/images/tolppa.png')} />
          </Content>
         </Row>   
      </Grid> 
    )
  }
}
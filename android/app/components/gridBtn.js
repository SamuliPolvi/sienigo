import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner,Text, Container, Header, Title, H3, Content, Footer, FooterTab, Button } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class GridBtn extends Component {

  render() {

    const sqrSize = 120;

    return (
        <Col style={{width: sqrSize, height: sqrSize, margin: 10}}>
            <Image style={{flex: 1, width: sqrSize, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} source={{uri: this.props.img}} >
                <Button style={{flex: 1, width: sqrSize, marginBottom: -25}} transparent onPress={this.props.onPress}>
                    <Icon  style={{color: '#fff', fontSize: 24}} name={this.props.icon} />
                </Button>
                <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', marginBottom: 25}}>{this.props.text}</Text>
            </Image>                   
        </Col>
    )
  }
}
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import Guide from '../scenes/guide';

export default class MainGrid extends Component {
  render() {

    const ScreenHeight = Dimensions.get("window").height - 80;
    const sqrSize = 120;
    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row style={{width: 200, height: (ScreenHeight / 5)}} /> 
                        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center', height: (ScreenHeight / 2)}}>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Col style={{width: sqrSize, height: sqrSize, margin: 10}}>
                                <Image style={{flex: 1, width: sqrSize}} source={{uri: 'https://cdn.pixabay.com/photo/2016/08/16/15/41/fireplace-1598243_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: sqrSize}} transparent onPress={this.props.toGuidePage}>
                                        <Icon  style={{color: '#fff', fontSize: 28}} name='ios-book' />
                                    </Button>
                                </Image>                   
                                </Col>
                                <Col style={{width: sqrSize, height: sqrSize, margin: 10}}>
                                <Image style={{flex: 1, width: sqrSize}} source={{uri: 'https://cdn.pixabay.com/photo/2017/01/11/17/03/black-bears-1972307__340.jpg'}} >
                                    <Button style={{flex: 1, width: sqrSize}} transparent onPress={this.props.toAnimalsPage}>
                                        <Icon style={{color: '#fff', fontSize: 27}} name='md-paw' />
                                    </Button>
                                </Image> 
                                </Col>
                            </Row>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Col style={{width: sqrSize, height: sqrSize, margin: 10}}>
                                <Image style={{flex: 1, width: sqrSize}} source={{uri: 'https://cdn.pixabay.com/photo/2016/12/05/22/49/mushroom-1885135_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: sqrSize}} transparent onPress={this.props.toForestPage}>
                                        <Icon style={{color: '#fff', fontSize: 28}} name='ios-leaf' />
                                    </Button>
                                </Image>
                                </Col>
                                <Col style={{width: sqrSize, height: sqrSize, margin: 10}}>
                                <Image style={{flex: 1, width: sqrSize}} source={{uri: 'https://cdn.pixabay.com/photo/2016/11/21/17/35/camera-1846696_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: sqrSize}} transparent onPress={this.props.toLocationPage}>
                                        <Icon style={{color: '#fff', fontSize: 26}} name='md-pin' />
                                    </Button> 
                                </Image>
                                </Col>
                            </Row>
                        </Row>  
                        <Row style={{width: 200, height: (ScreenHeight / 5)}} />   
                    </Grid>   
    )
  }
}
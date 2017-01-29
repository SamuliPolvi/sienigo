import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import Guide from '../scenes/guide';

export default class MainGrid extends Component {
  render() {

      const ScreenHeight = Dimensions.get("window").height - 135;
    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row style={{width: 200, height: (ScreenHeight / 4)}} /> 
                        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center', height: (ScreenHeight / 2)}}>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Col style={{width: 110, height: 110, margin: 10}}>
                                <Image style={{flex: 1, width: 110}} source={{uri: 'https://cdn.pixabay.com/photo/2014/11/04/08/13/matryoshka-516281_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: 110}} transparent onPress={this.props.toGuidePage}>
                                        <Icon style={{color: '#fff'}} name='ios-book' />
                                    </Button>
                                </Image>                   
                                </Col>
                                <Col style={{width: 110, height: 110, margin: 10}}>
                                <Image style={{flex: 1, width: 110}} source={{uri: 'https://cdn.pixabay.com/photo/2014/11/04/08/13/matryoshka-516281_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: 110}} transparent onPress={this.props.toAnimalsPage}>
                                        <Icon style={{color: '#fff'}} name='md-paw' />
                                    </Button>
                                </Image> 
                                </Col>
                            </Row>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Col style={{width: 110, height: 110, margin: 10}}>
                                <Image style={{flex: 1, width: 110}} source={{uri: 'https://cdn.pixabay.com/photo/2014/11/04/08/13/matryoshka-516281_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: 110}} transparent onPress={this.props.toForestPage}>
                                        <Icon style={{color: '#fff'}} name='ios-leaf' />
                                    </Button>
                                </Image>
                                </Col>
                                <Col style={{width: 110, height: 110, margin: 10}}>
                                <Image style={{flex: 1, width: 110}} source={{uri: 'https://cdn.pixabay.com/photo/2014/11/04/08/13/matryoshka-516281_960_720.jpg'}} >
                                    <Button style={{flex: 1, width: 110}} transparent onPress={this.props.toLocationPage}>
                                        <Icon style={{color: '#fff'}} name='md-pin' />
                                    </Button> 
                                </Image>
                                </Col>
                            </Row>
                        </Row>  
                        <Row style={{width: 200, height: (ScreenHeight / 4)}} />   
                    </Grid>   
    )
  }
}
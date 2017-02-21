import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import Guide from './guide';
import Animals from './animals';
import Camping from './guide/camping';
import Firemaking from './guide/firemaking';
import Firstaid from './guide/firstaid';
import Knots from './guide/knots';
import Food from './guide/food';
import Fishing from './guide/fishing';
import Travelling from './guide/travelling';
import Law from './guide/law';
import MainGrid from '../containers/mainGrid';
import * as constants from '../../../constants';

export default class Main extends Component {
  render() {

    const ScreenHeight = Dimensions.get("window").height - 135;
    const index = this.props.index;
    return (
            <Container theme={theme}> 
                    <Header>
                    {index > 1 && index < 2 ?
                     <Button transparent onPress={this.props.toGuidePage}>
                            <Icon name='ios-arrow-back' />
                     </Button>
                    : index !== 0 && 
                     <Button transparent onPress={this.props.toFrontPage}>
                            <Icon name='ios-arrow-back' />
                     </Button>}                
                        <Title>{this.props.title}</Title>
                    </Header>
                
                <Content>
                    <Image resizeMode='cover' source={{uri: 'https://cdn.pixabay.com/photo/2016/07/07/22/43/rise-1503340_960_720.jpg'}}>

                    {/* Frontpage */}
                    {index === 0 &&
                    <MainGrid toGuidePage={this.props.toGuidePage}
                                toAnimalsPage={this.props.toAnimalsPage}
                                toForestPage={this.props.toForestPage}
                                toLocationPage={this.props.toLocationPage} />}

                    {/* Guide mainmenu */}
                    {index === 1 &&
                    <Guide toCamping={this.props.toCamping}
                            toFiremaking={this.props.toFiremaking}
                            toFirstaid={this.props.toFirstaid}
                            toKnots={this.props.toKnots}
                            toFood={this.props.toFood}
                            toFishing={this.props.toFishing}
                            toTravelling={this.props.toTravelling}
                            toLaw={this.props.toLaw}/>}
                    
                    {/* Guide submenus */}
                    {index === 1.1 && <Camping />}
                    {index === 1.2 && <Firemaking />}
                    {index === 1.3 && <Firstaid />}
                    {index === 1.4 && <Knots />}
                    {index === 1.5 && <Food />}
                    {index === 1.6 && <Fishing />}
                    {index === 1.7 && <Travelling />}
                    {index === 1.8 && <Law />}

                    {/* Animals mainmenu */}
                    {index === 2 && <Animals />}

                     </Image>
                </Content>
                
           
                <Footer>
                    <FooterTab>
                        <Button active={index >= 1 && index < 2} transparent onPress={this.props.toGuidePage}>
                            <Icon name='ios-book' />
                            <Text> {constants.SCENE_GUIDE} </Text>
                        </Button>
                        <Button active={index === 2} transparent onPress={this.props.toAnimalsPage}>
                            <Icon name='md-paw' />
                            <Text> {constants.SCENE_ANIMALS} </Text>
                        </Button>  
                        <Button active={index === 3} transparent onPress={this.props.toForestPage}>
                            <Icon name='ios-leaf' />
                            <Text> {constants.SCENE_PLANTS} </Text>
                        </Button>  
                        <Button active={index === 4} transparent onPress={this.props.toLocationPage}>
                            <Icon name='md-pin' />
                            <Text> {constants.SCENE_LOCATION} </Text>
                        </Button>                                                                          
                    </FooterTab>
                </Footer>
               
            </Container>
            
    )
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};
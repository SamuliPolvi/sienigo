import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import MainGrid from '../containers/mainGrid';
import * as constants from '../../../constants';
// Main
import Guide from './guide';
import Animals from './animals';
import Plants from './plants';
import Location from './location';
// Guide
import Camping from './guide/camping';
import Firemaking from './guide/firemaking';
import Firstaid from './guide/firstaid';
import Knots from './guide/knots';
import Food from './guide/food';
import Fishing from './guide/fishing';
import Travelling from './guide/travelling';
import Law from './guide/law';
// Animals
import Mammals from './animals/mammals';
import Fishes from './animals/fishes';
import Insects from './animals/insects'
import Birds from './animals/birds'
// Plants
import Trees from './plants/trees';
import Berries from './plants/berries';
import Flowers from './plants/flowers';
import Mushrooms from './plants/mushrooms';

const ScreenHeight = Dimensions.get("window").height - 135;

export default class Main extends Component {
  render() {
    const index = this.props.index;
    let image = 'https://cdn.pixabay.com/photo/2016/07/07/22/43/rise-1503340_960_720.jpg';

    switch (index) {
        case 3.2:
            image = 'http://i.epvpimg.com/l4lZbab.jpg';
            break;
        case 3.4:
            image = 'http://i.epvpimg.com/yyyneab.jpg';
            break;
        case 2.1:
            image = 'http://i.epvpimg.com/QQPvaab.jpg';
            break;
        case 2.2:
            image = 'http://i.epvpimg.com/etbvcab.jpg';
            break;
        case 1.2:
            image = 'http://i.epvpimg.com/5rOCfab.jpg';
            break;
        case 1.3:
            image = 'http://i.epvpimg.com/eIYxcab.jpg';
            break;
        case 1.8:
            image = 'http://i.epvpimg.com/9L2Ggab.jpg';
            break;
        default:
            break;
    }
    return (
            <Container theme={theme}> 
                    <Header>
                    {index > 1 && index < 2 &&
                     <Button transparent onPress={this.props.toGuidePage}>
                            <Icon name='ios-arrow-back' />
                     </Button>
                    }
                    {index > 2 && index < 3 &&
                     <Button transparent onPress={this.props.toAnimalsPage}>
                            <Icon name='ios-arrow-back' />
                     </Button>
                    }
                    {index > 3 && index < 4 &&
                     <Button transparent onPress={this.props.toPlantsPage}>
                            <Icon name='ios-arrow-back' />
                     </Button>
                    }
                    {index === 1 || index === 2 || index === 3 || index === 4 ?
                     <Button transparent onPress={this.props.toFrontPage}>
                            <Icon name='ios-arrow-back' />
                     </Button> : <Text></Text>}                
                        <Title>{this.props.title}</Title>
                    </Header>
                
                <Content>
                    <Image resizeMode='cover' source={{uri: image}}>

                    {/* Frontpage */}
                    {index === 0 &&
                    <MainGrid toGuidePage={this.props.toGuidePage}
                                toAnimalsPage={this.props.toAnimalsPage}
                                toPlantsPage={this.props.toPlantsPage}
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
                    {index === 2 && <Animals toMammals={this.props.toMammals}
                                            toBirds={this.props.toBirds}
                                            toFishes={this.props.toFishes}
                                            toInsects={this.props.toInsects} />}

                    {/* Animals submenus */}
                    {index === 2.1 && <Mammals />}
                    {index === 2.2 && <Birds />}
                    {index === 2.3 && <Fishes />}
                    {index === 2.4 && <Insects />}

                    {/* Plants mainmenu */}
                    {index === 3 && <Plants toTrees={this.props.toTrees}
                                            toMushrooms={this.props.toMushrooms}
                                            toFlowers={this.props.toFlowers}
                                            toBerries={this.props.toBerries} />}

                    {/* Plants submenus */}
                    {index === 3.1 && <Trees />}
                    {index === 3.2 && <Mushrooms />}
                    {index === 3.3 && <Flowers />}
                    {index === 3.4 && <Berries />}

                    {/* Location */}
                    {index === 4 && <Location locationAccess={this.props.locationAccess} />}

                     </Image>
                </Content>
                
           
                <Footer>
                    <FooterTab>
                        <Button active={index >= 1 && index < 2} transparent onPress={this.props.toGuidePage}>
                            <Icon name='ios-book' />
                            <Text> {constants.SCENE_GUIDE} </Text>
                        </Button>
                        <Button active={index >= 2 && index < 3} transparent onPress={this.props.toAnimalsPage}>
                            <Icon name='md-paw' />
                            <Text> {constants.SCENE_ANIMALS} </Text>
                        </Button>  
                        <Button active={index >= 3 && index < 4} transparent onPress={this.props.toPlantsPage}>
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
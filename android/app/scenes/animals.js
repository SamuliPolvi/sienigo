import React, { Component, PropTypes } from 'react';
import {Dimensions} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import * as constants from '../../../constants'; 
import GridBtn from '../components/gridBtn';
import theme from '../../../Themes/main';

const ScreenHeight = Dimensions.get("window").height - 20;

if (ScreenHeight < 650) {
    ScreenHeight = ScreenHeight - 54;
}

export default class Animals extends Component {


  render() {
    return (
        <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Row style={{width: 200, height: (ScreenHeight / 5)}} /> 
            <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center', height: ScreenHeight / 2}}>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toMammals} animal='mammal' text={constants.ANIMALS_MAMMALS} icon='tent' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toBirds} text={constants.ANIMALS_BIRDS} icon= 'twitter'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toFishes} text={constants.ANIMALS_FISHES} icon='fish'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toInsects} text={constants.ANIMALS_INSECTS} animal='insect' icon='bug' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
            </Row>
            <Row style={{width: 200, height: (ScreenHeight / 5)}} /> 
        </Grid> 
    )
  }
}
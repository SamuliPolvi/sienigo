import React, { Component, PropTypes } from 'react';
import {Dimensions} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import * as constants from '../../../constants'; 
import GridBtn from '../components/gridBtn';
import theme from '../../../Themes/main';


export default class Plants extends Component {

  render() {

    const ScreenHeight = Dimensions.get("window").height - 74;

    return (
        <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Row style={{width: 200, height: (ScreenHeight / 5)}} /> 
            <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center', height: ScreenHeight / 2}}>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toTrees} text={constants.PLANTS_TREES} icon='pine-tree' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toMushrooms} text={constants.PLANTS_MUSHROOMS} animal='mushroom' icon= 'twitter'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toFlowers} text={constants.PLANTS_FLOWERS} icon='flower'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toMoss} text={constants.PLANTS_MOSS} icon='cloud-outline' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
            </Row>
            <Row style={{width: 200, height: (ScreenHeight / 5)}} /> 
        </Grid> 
    )
  }
}
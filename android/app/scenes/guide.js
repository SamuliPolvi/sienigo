import React, { Component, PropTypes } from 'react';
import {Dimensions} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import * as constants from '../../../constants'; 
import GridBtn from '../components/gridBtn';
import theme from '../../../Themes/main';

const ScreenHeight = Dimensions.get("window").height;

export default class Guide extends Component {

  render() {

    return (
        <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center', minHeight: ScreenHeight}}>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toCamping} text={constants.GUIDE_CAMPING} icon='tent' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toFiremaking} text={constants.GUIDE_FIREMAKING} icon= 'fire'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toFirstaid} text={constants.GUIDE_FIRSTAID} icon='plus'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toKnots} text={constants.GUIDE_KNOTS} icon='link-variant-off' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toFood} text={constants.GUIDE_FOOD} icon='food-variant'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toFishing} text={constants.GUIDE_FISHING} icon='fish'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
                <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <GridBtn onPress={this.props.toTravelling} text={constants.GUIDE_TRAVELLING} icon='walk'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                    <GridBtn onPress={this.props.toLaw} text={constants.GUIDE_LAW} icon='scale-balance'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                </Row>
            </Row>   
        </Grid> 
    )
  }
}
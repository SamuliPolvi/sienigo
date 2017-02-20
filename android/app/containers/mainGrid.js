import React, { Component, PropTypes } from 'react';
import { Dimensions} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import Guide from '../scenes/guide';
import GridBtn from '../components/gridBtn';


export default class MainGrid extends Component {
  render() {

    const ScreenHeight = Dimensions.get("window").height - 80;
    const sqrSize = 120;
    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row style={{width: 200, height: (ScreenHeight / 5)}} /> 
                        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center', height: (ScreenHeight / 2)}}>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}> 
                                <GridBtn onPress={this.props.toGuidePage} icon='book-open-page-variant' img='https://cdn.pixabay.com/photo/2016/08/16/15/41/fireplace-1598243_960_720.jpg'/>
                                <GridBtn onPress={this.props.toAnimalsPage} icon= 'paw' img='https://cdn.pixabay.com/photo/2017/01/11/17/03/black-bears-1972307__340.jpg'/>
                            </Row>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <GridBtn onPress={this.props.toForestPage} icon='leaf' img='https://cdn.pixabay.com/photo/2016/12/05/22/49/mushroom-1885135_960_720.jpg'/>
                                <GridBtn onPress={this.props.toLocationPage} icon='google-maps' img='https://cdn.pixabay.com/photo/2016/11/21/17/35/camera-1846696_960_720.jpg'/>
                            </Row>
                        </Row>  
                        <Row style={{width: 200, height: (ScreenHeight / 5)}} />   
                    </Grid>   
    )
  }
}
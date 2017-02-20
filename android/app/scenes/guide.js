import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import GridBtn from '../components/gridBtn';
import theme from '../../../Themes/main';


export default class Guide extends Component {

  render() {

    const ScreenHeight = Dimensions.get("window").height - 139;

    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <GridBtn onPress={this.props.toGuidePage} text='Leiriytyminen' icon='tent' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                                <GridBtn onPress={this.props.toAnimalsPage} text='Tulenteko' icon= 'fire'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                            </Row>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <GridBtn onPress={this.props.toForestPage} text='Ensiapu' icon='plus'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                                <GridBtn onPress={this.props.toLocationPage} text='Solmut' icon='link-variant-off' img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                            </Row>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <GridBtn onPress={this.props.toForestPage} text='Ruoka' icon='food-variant'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                                <GridBtn onPress={this.props.toLocationPage} text='Kalastus' icon='fish'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                            </Row>
                            <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <GridBtn onPress={this.props.toForestPage} text='Maastossa liikkuminen' icon='walk'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                                <GridBtn onPress={this.props.toLocationPage} text='Lainsäädäntö' icon='scale-balance'  img='http://www.bonniercorp.com/wp-content/uploads/2014/04/alpha-grid.png'/>
                            </Row>
                        </Row>   
                    </Grid> 
    )
  }
}
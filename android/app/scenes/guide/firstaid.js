import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default class Firstaid extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Eat', 'Sleep', 'Pray', 'Repeat']),
    };
  }

  renderRow(data) {
    return (
      <Text style={{color: '#fff', fontFamily: 'IndieFlower'}}>{`\u2022 ${data}`}</Text>
    );
  }

  render() {

    const ScreenHeight = Dimensions.get("window").height - 100;

    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Ensiapu </H1>
                            <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                            Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet,lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.</Text>
                            <ListView
                                style={{marginLeft: 15}}
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow}
                            />
                            <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                            Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.</Text>
                            <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                            Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.</Text>
                            <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                            Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.</Text>
                            <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
                            Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.</Text>
                            </Content>
                        </Row>   
                    </Grid> 
    )
  }
}
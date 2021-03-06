import React, { Component, PropTypes } from 'react';
import {H1, Content} from 'native-base';
import {Dimensions, Image} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import SearchBar from '../../components/searchbar';
import FishesList from '../../components/fisheslist';
import list from './list';



export default class Mammals extends Component {
    constructor() {
        super();
        this.state = {
          filterText: ''
        };
    }

  render() {

    const ScreenHeight = Dimensions.get("window").height - 177;
    const filter = this.state.filterText.toLowerCase();

    let filteredList = [];

    if (filter) {
      list.fishes.forEach((item) => {
        if (item.name.toLowerCase().indexOf(filter) !== -1 || item.text.toLowerCase().indexOf(filter) !== -1 || item.size.toLowerCase().indexOf(filter) !== -1 || item.endanger.toLowerCase().indexOf(filter) !== -1) {
          filteredList.push(item);
        }
      })
    } else {
      filteredList = list.fishes;
    }

    filteredList.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })

    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                      <SearchBar onChangeText={(text) => this.setState({filterText: text})} />
                        <Row>
                            <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: ScreenHeight}}>
                            <H1 style={{padding: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Kalat </H1>
                              <FishesList fishes={filteredList} />
                            </Content>
                        </Row>   
                    </Grid> 
    )
  }
}
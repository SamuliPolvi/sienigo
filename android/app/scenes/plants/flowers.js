import React, { Component, PropTypes } from 'react';
import {H1, Content} from 'native-base';
import {Dimensions, Image} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import SearchBar from '../../components/searchbar';
import PlantsList from '../../components/plantslist';
import list from './list';



export default class Flowers extends Component {
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
      list.flowers.forEach((item) => {
        if (item.name.toLowerCase().indexOf(filter) !== -1 || item.kukka.toLowerCase().indexOf(filter) !== -1 || item.lehdet.toLowerCase().indexOf(filter) !== -1 || item.kasvupaikka.toLowerCase().indexOf(filter) !== -1) {
          filteredList.push(item);
        }
      })
    } else {
      filteredList = list.flowers;
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
                            <H1 style={{padding: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Kukkakasvit </H1>
                              <PlantsList plants={filteredList} />
                            </Content>
                        </Row>   
                    </Grid> 
    )
  }
}
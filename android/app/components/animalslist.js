import React, { Component, PropTypes } from 'react';
import {List, ListItem, Text, Icon, Content, H1, Thumbnail} from 'native-base';

export default class AnimalsList extends Component {
    constructor() {
        super();
        this.state = {
            open: ''
        }
    }

    liOnClick (name) {
        if (name === this.state.open) {
            this.setState({open: ''});
        } else {
            this.setState({open: name});
        }
    }

  render() {

    return (
        <List dataArray={this.props.animals} renderRow={(item) =>
            <Content>
            <ListItem iconRight button onPress={() => this.liOnClick(item.name)}>
                {this.state.open === item.name ? <Icon name="ios-arrow-up" style={{color: '#40F49B'}} /> : <Icon name="ios-arrow-down" style={{color: '#fff'}} /> }
                {this.state.open === item.name ? <Text style={{color: '#40F49B'}}>{item.name}</Text> : <Text style={{color: '#fff'}}>{item.name}</Text> }
            </ListItem>
            {this.state.open === item.name && <Thumbnail square size={100} style={{margin: 20}} source={{uri: item.url}} />}
            {this.state.open === item.name && <Text style={{marginLeft: 18, marginBottom: 18, color: '#fff'}}>{item.text}</Text>}
            </Content>
        }>
        </List>
    );
  }
}
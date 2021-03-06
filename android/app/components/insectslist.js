import React, { Component, PropTypes } from 'react';
import {List, ListItem, Text, Icon, Content, H1} from 'native-base';
import {Image} from 'react-native';

export default class InsectsList extends Component {
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
        <List dataArray={this.props.insects} renderRow={(item) =>
            <Content>
            <ListItem iconRight button onPress={() => this.liOnClick(item.name)}>
                {this.state.open === item.name ? <Icon name="ios-arrow-up" style={{color: '#40F49B'}} /> : <Icon name="ios-arrow-down" style={{color: '#fff'}} /> }
                {this.state.open === item.name ? <Text style={{color: '#40F49B'}}>{item.name}</Text> : <Text style={{color: '#fff'}}>{item.name}</Text> }
            </ListItem>
            {this.state.open === item.name && 
            <Content>
                <Content contentContainerStyle={{alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Image resizeMode='stretch'  style={{height: 200, flex: 1, marginLeft: 20, marginTop: 5, marginRight: 10,}} source={{uri: item.url}} />
                    {item.url2 && <Image resizeMode='stretch'  style={{height: 200, flex: 1, marginRight: 10,  marginTop: 5}} source={{uri: item.url2}} />}
                </Content>
                <Text selectable  style={{marginLeft: 18, marginBottom: 18, color: '#fff'}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Yleiskuvaus:</Text> {item.text}</Text>
                {item.size &&
                <Text selectable style={{marginLeft: 18, marginBottom: 18, color: '#fff'}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Koko:</Text> {item.size}</Text>}
                {item.endanger && 
                <Text selectable  style={{marginLeft: 18, marginBottom: 18, color: '#fff'}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Levinneisyys / Uhanalaisuus:</Text> {item.endanger}</Text>}
                </Content>}    
            </Content>
        }>
        </List>
    );
  }
}
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight} from 'react-native';
import HelloWorld from '../components/helloworld';

export default class Scene2 extends Component {

  render() {
    return (
      <View>
        <Text>Page asd= {this.props.title}.</Text>
        {this.props.page === 'third' ? <Text> KOLMAS SIIKA </Text> : <Text> Jossai muual </Text>}
        <TouchableHighlight onPress={this.props.navigator.pop}>
          <Text>Tap me ekaan</Text>
        </TouchableHighlight>

        
      </View>
    )
  }
}
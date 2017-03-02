import React, { Component, PropTypes } from 'react';
import {InputGroup, Input, Icon} from 'native-base';


export default class SearchBar extends Component {

  render() {
    return (
        <InputGroup style={{backgroundColor: 'rgba(255,255,255,1)'}} borderType='rounded' >
            <Icon name='md-search' style={{marginLeft: 10, color: '#000', fontSize: 24}} />
            <Input placeholder='Hae' />
        </InputGroup>
    );
  }
}
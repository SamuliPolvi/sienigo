import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class NavBar extends Component {
    render () {

    const rightButtonConfig = {
        title: 'Next',
        handler: this.props.onForward,
    };

    const disabled = {
        title: '',
        disabled: true
    }

    const leftButtonConfig = {
        title: 'Back',
        handler: this.props.onBack,
    };

    const titleConfig = {
        title: this.props.title,
    };

    return (
        <View>
        <NavigationBar
            title={titleConfig}
            rightButton={this.props.index < 4 ? rightButtonConfig : disabled}
            leftButton={this.props.index !== 0 ? leftButtonConfig : disabled} />
        </View>
    );
    }
}
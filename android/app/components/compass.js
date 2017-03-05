import React, { Component, PropTypes } from 'react';
import {H1, Button} from 'native-base';
import {DeviceEventEmitter, Image, View, Animated, Easing} from 'react-native';
import { SensorManager } from 'NativeModules';
import ImageRotate from 'react-native-image-rotate';

export default class Compass extends Component {
    constructor() {
        super();
        this.compassVal = new Animated.Value(0)
        this.state = {
            ayf: 0,
            axf: 0,
            xh: 0,
            yh: 0,
            compass: 0,
            width: 250,
            height: 250,
        };
    }

    componentWillMount() {
        SensorManager.startMagnetometer(2000);
        SensorManager.startAccelerometer(2000);

        DeviceEventEmitter.addListener('Accelerometer', function (data) {
            this.setState({axf: (data.y/57.0), ayf: (data.x/57.0)});
        }.bind(this));

        DeviceEventEmitter.addListener('Magnetometer', function (data) {
            let xh,yh,compass;
            const ayf = this.state.ayf;
            const axf = this.state.axf;

            xh = data.x * Math.cos(ayf) + data.y * Math.sin(ayf) * Math.sin(axf) - data.z * Math.cos(axf) * Math.sin(ayf);
            yh = (data.y * Math.cos(axf)) + (data.z * Math.sin(axf));
            compass = Math.atan2(yh,xh) * (180 / Math.PI) - 90; // angle in degrees

            if (compass > 0) {
                compass = (compass-360);
            }
            compass = (360 + compass);
            
            this.setState({compass: compass});
            this.compassVal.setValue(Math.round(compass));
        }.bind(this));
    }

    componentWillUnmount() {
        SensorManager.stopMagnetometer();
        SensorManager.stopAccelerometer();
    }

  render() {

  const spin = this.compassVal.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16}}>
            <Animated.Image style={{width: this.state.width, height: this.state.height, transform: [{rotate: spin}]}} source={require('../src/main/assets/images/compass.png')} />
            <H1 style={{color: '#fff', fontWeight: '400'}}>{Math.round(this.state.compass)} &deg;</H1>
        </View>
    )
  }
}
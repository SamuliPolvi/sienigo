import React, { Component, PropTypes } from 'react';
import {H1, Content, Button} from 'native-base';
import {Dimensions, Image, DeviceEventEmitter, View, StyleSheet, PermissionsAndroid} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import { SensorManager } from 'NativeModules';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 61.484120;
const LONGITUDE = 21.793216;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Oikeus saada laitteen sijainti',
                'message': 'Kartta tarvitsee toimiakseen laitteen sijaintitiedot.'
            },
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                'title': 'Oikeus saada laitteen sijainti',
                'message': 'Kartta tarvitsee toimiakseen laitteen sijaintitiedot.'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location access granted!')
        } else {
            console.log('Location permission denied!')
        }
    } catch (error) {
        console.warn(error)
    }
}


export default class Compass extends Component {
    constructor() {
        super();
        this.state = {
            ax: 0,
            ay: 0,
            az: 0,
            mx: 0,
            my: 0,
            mz: 0,
            compass: 0,
            started: false
        }
    }


    componentWillUnmount() {
        SensorManager.stopMagnetometer();
        SensorManager.stopAccelerometer();
    }

    componentDidUpdate() {
        this.props.start && !this.state.started ? this.startCompass() : this.stopCompass(); 
    }

    startCompass() {
        SensorManager.startMagnetometer(500);
        SensorManager.startAccelerometer(500);

        DeviceEventEmitter.addListener('Magnetometer', function (data) {
            this.setState({mx: data.x});
            this.setState({my: data.y});
            this.setState({mz: data.z});
        }.bind(this));

        
        DeviceEventEmitter.addListener('Accelerometer', function (data) {
            this.setState({ax: data.x});
            this.setState({ay: data.y});
            this.setState({az: data.z});
        }.bind(this));

        this.setState({started: true})
    }

    stopCompass() {
        SensorManager.stopMagnetometer();
        SensorManager.stopAccelerometer();
        this.setState({started: false})
    }

    calculateDegree () {    
        let xh,yh,ayf,axf;
        yf = this.state.ay/57.0;
        axf = this.state.ax/57.0;
        xh = this.state.mx * Math.cos(ayf) + this.state.my * Math.sin(ayf) * Math.sin(axf) - this.state.mz * Math.cos(axf) * Math.sin(ayf);
        yh = this.state.my * Math.cos(axf) + this.state.mz * Math.sin(axf);

        let compass = Math.atan2(yh,xh) * (180 / Math.PI) -90; // angle in degrees

        if (compass > 0) {
            compass = (compass-360);
        }
            compass = (360 + compass);
        return compass;
    }


  render() {

    return (
        <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>Asteet: {Math.round(this.state.compass)} </H1>
    )
  }
}
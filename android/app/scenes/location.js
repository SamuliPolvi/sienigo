import React, { Component, PropTypes } from 'react';
import {H1, Content, Button} from 'native-base';
import {Dimensions, Image, DeviceEventEmitter, View, StyleSheet, PermissionsAndroid} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import { SensorManager } from 'NativeModules';
import MapView from 'react-native-maps';
import Compass from '../components/compass';

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


export default class Location extends Component {
    constructor() {
        super();
        this.state = {
            start: false,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: 0.0092,
                longitudeDelta: LONGITUDE_DELTA
            },
            marker: {
                latitude: 0,
                longitude: 0
            },
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        }
    }

    componentWillMount() {
        requestLocationPermission();
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            var initialPosition = JSON.stringify(position);
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 5000, maximumAge: 0});
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            console.log('Lat: ' + position.coords.latitude)
            console.log(lastPosition);
            this.map.animateToRegion(this.animateRegion(position.coords.latitude, position.coords.longitude));
            this.setState({marker: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
            this.setState({lastPosition});
        });
    }

    animateRegion(lat, long) {
            return {
            ...this.state.region,
            latitude: lat,
            longitude: long
            };
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    toggleCompass() {
        this.state.start ? this.setState({start: false}) : this.setState({start: true}); 
    }

    onRegionChange(region) {
        this.setState({ region });
    }

  render() {

    const ScreenHeight = Dimensions.get("window").height - 177;

    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row>
                            <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: ScreenHeight}}>
                            <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>Latitude: {this.state.region.latitude}</H1>
                            <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>Longitude: {this.state.region.longitude}</H1>
                            <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>lastPos: {this.state.lastPosition}</H1>
                            
                            <Button onPress={this.toggleCompass}> Starto </Button>
                            </Content>
                        </Row>
                        <Row>
                            <Content>
                                <MapView
                                    provider={this.props.provider}
                                    ref={ref => { this.map = ref; }}
                                    style={styles.map}
                                    initialRegion={this.state.region}
                                >
                                <MapView.Marker
                                title="This is a title"
                                description="This is a description"
                                image={require('../src/main/assets/images/marker.png')}
                                coordinate={this.state.marker}
                                />
                            </MapView>
                            </Content>
                        </Row>
                    </Grid> 
    )
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: width,
    height: height - 175,
  },
});
import React, { Component, PropTypes } from 'react';
import {H1, Content, Button} from 'native-base';
import {Dimensions, Image, DeviceEventEmitter, View, StyleSheet} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import { SensorManager } from 'NativeModules';
import MapView from 'react-native-maps';
import Compass from '../components/compass';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0019;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Location extends Component {
    constructor() {
        super();
        this.state = {
            start: false,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            },
            marker: {
                latitude: 0,
                longitude: 0
            },
            errorText: null
        }
    }

    componentDidMount() {
        if (this.props.locationAccess) {
            this.watchID = navigator.geolocation.watchPosition((position) => {
                this.map.animateToRegion(this.animateRegion(position.coords.latitude, position.coords.longitude));
                this.setState({marker: {latitude: position.coords.latitude, longitude: position.coords.longitude}, errorText: null});
            },
            (error) => this.setState({errorText: "GPS Signaalia ei löydy"}), {enableHighAccuracy: true, timeout: 300000, maximumAge: 1800000});
        } else {
            this.setState({errorText: 'Applikaatiolla ei ole lupaa nähdä laitteen sijaintia.'})
        }
    }

    animateRegion(lat, long) {
            return {
            ...this.state.region,
            latitude: lat,
            longitude: long
            };
    }

    componentWillUnmount() {
        if (this.props.locationAccess) navigator.geolocation.clearWatch(this.watchID);
    }

  render() {

    const ScreenHeight = Dimensions.get("window").height - 177;

    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Row>
                            <Content contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: ScreenHeight - 140}}>
                            <Compass />
                            {this.state.marker.latitude !== 0 && <H1 style={{color: '#fff', fontWeight: '400'}}>Lat: {this.state.marker.latitude}</H1>}
                            {this.state.marker.longitude !== 0 && <H1 style={{color: '#fff', fontWeight: '400', paddingBottom: 16}}>Lng: {this.state.marker.longitude}</H1>}
                            {this.state.errorText && <H1 style={{color: '#fff', fontWeight: '400', paddingBottom: 16}}>{this.state.errorText}</H1>}
                            {this.state.marker.latitude === 0 && !this.state.errorText && <H1 style={{color: '#fff', fontWeight: '400', paddingBottom: 16}}>Haetaan GPS signaalia..</H1>}
                            
                            </Content>
                        </Row>
                        <Row>
                            <Content>
                                {this.props.locationAccess &&
                                <MapView
                                    provider={this.props.provider}
                                    ref={ref => { this.map = ref; }}
                                    style={styles.map}
                                    initialRegion={this.state.region}
                                >
                                <MapView.UrlTile urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                
                                <MapView.Marker
                                title="Olet tässä"
                                description="Sijainti ei välttämättä ole tarkka."
                                image={require('../src/main/assets/images/marker.png')}
                                flat={true}
                                coordinate={this.state.marker}
                                />
                            </MapView> }
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
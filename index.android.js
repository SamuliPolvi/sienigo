import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,Navigator,PermissionsAndroid} from 'react-native';
import Main from './android/app/scenes/main';
import * as constants from './constants'; 
import {createStore} from 'react-redux';

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Oikeus saada laitteen sijainti',
                'message': 'Kartta tarvitsee toimiakseen laitteen sijaintitiedot.'
            },
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

export default class SieniGo extends Component {


    componentWillMount() {
        requestLocationPermission();
    }

  render() {
    return (
      <Navigator
        initialRoute={{ title: constants.SCENE_MAIN, index: 0 }}
        renderScene={(route, navigator) =>
          <Main
            title={route.title}
            index={route.index}

            toFrontPage={() => {
              navigator.push({
                title: constants.SCENE_MAIN,
                index: 0
              })
            }}

            toGuidePage={() => {
              navigator.push({
                index: 1,
                title: constants.SCENE_GUIDE
              })
            }}  

            toAnimalsPage={() => {
              navigator.push({
                index: 2,
                title: constants.SCENE_ANIMALS
              })
            }}  

            toPlantsPage={() => {
              navigator.push({
                index: 3,
                title: constants.SCENE_PLANTS
              })
            }}

            toLocationPage={() => {
              navigator.push({
                index: 4,
                title: constants.SCENE_LOCATION
              })
            }} 
            
            // Guide
            toCamping={() => {
              navigator.push({
                index: 1.1,
                title: constants.GUIDE_CAMPING
              })
            }}

            toFiremaking={() => {
              navigator.push({
                index: 1.2,
                title: constants.GUIDE_FIREMAKING
              })
            }}

            toFirstaid={() => {
              navigator.push({
                index: 1.3,
                title: constants.GUIDE_FIRSTAID
              })
            }}

            toKnots={() => {
              navigator.push({
                index: 1.4,
                title: constants.GUIDE_KNOTS
              })
            }}

            toFood={() => {
              navigator.push({
                index: 1.5,
                title: constants.GUIDE_FOOD
              })
            }}

            toFishing={() => {
              navigator.push({
                index: 1.6,
                title: constants.GUIDE_FISHING
              })
            }}

            toTravelling={() => {
              navigator.push({
                index: 1.7,
                title: constants.GUIDE_TRAVELLING
              })
            }}

            toLaw={() => {
              navigator.push({
                index: 1.8,
                title: constants.GUIDE_LAW
              })
            }}


            // Animals
            toMammals={() => {
              navigator.push({
                index: 2.1,
                title: constants.ANIMALS_MAMMALS
              })
            }}

            toBirds={() => {
              navigator.push({
                index: 2.2,
                title: constants.ANIMALS_BIRDS
              })
            }}

            toFishes={() => {
              navigator.push({
                index: 2.3,
                title: constants.ANIMALS_FISHES
              })
            }}

            toInsects={() => {
              navigator.push({
                index: 2.4,
                title: constants.ANIMALS_INSECTS
              })
            }}


            // Plants
            toTrees={() => {
              navigator.push({
                index: 3.1,
                title: constants.PLANTS_TREES
              })
            }}

            toMushrooms={() => {
              navigator.push({
                index: 3.2,
                title: constants.PLANTS_MUSHROOMS
              })
            }}

            toFlowers={() => {
              navigator.push({
                index: 3.3,
                title: constants.PLANTS_FLOWERS
              })
            }}

            toBerries={() => {
              navigator.push({
                index: 3.4,
                title: constants.PLANTS_BERRIES
              })
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('SieniGo', () => SieniGo);

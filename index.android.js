import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,Navigator} from 'react-native';
import Main from './android/app/scenes/main';
import * as constants from './constants'; 
import {createStore} from 'react-redux';

export default class SieniGo extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Etusivu', index: 0 }}
        renderScene={(route, navigator) =>
          <Main
            title={route.title}
            index={route.index}

            toFrontPage={() => {
              navigator.push({
                title: 'Etusivu',
                index: 0
              })
            }}

            toGuidePage={() => {
              navigator.push({
                index: 1,
                title: 'Opas'
              })
            }}  

            toAnimalsPage={() => {
              navigator.push({
                index: 2,
                title: 'Eläimet'
              })
            }}  

            toForestPage={() => {
              navigator.push({
                index: 3,
                title: 'Metsä'
              })
            }}

            toLocationPage={() => {
              navigator.push({
                index: 4,
                title: 'Sijainti'
              })
            }}                                         
            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              let title = 'Etusivu';
              switch (nextIndex) {
                case 1:
                  title = 'Opas'
                  break;
                case 2:
                  title = 'Eläimet'
                  break;
                case 3:
                  title = 'Metsä'
                  break;
                case 4:
                  title = 'Sijainti'
                  break;                                    
                default:
                  break;
              }
              navigator.push({
                title: title,
                index: nextIndex,
              });
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

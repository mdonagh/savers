import React, { useState, useEffect, Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import Map, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const { height } = Dimensions.get('screen');
import styles from './styles';
const MapStyle = require('./mapStyle.json')

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandMap: false,
      animation: new Animated.Value(90),
    };
  }

  toggleMap() {
    const { expandMap } = this.state;

    let initialValue = expandMap ? height * 0.85 : 90;
    let finalValue = expandMap ? 90 : height * 0.85;

    this.setState({ expandMap: !expandMap });

    this.state.animation.setValue(initialValue);
    Animated.timing(this.state.animation, {
      toValue: finalValue,
      duration: 0,
      easing: Easing.linear,
    }).start();
  }

  render() {

    const { name, backgroundColor } = this.props;
    const { expandMap, animation } = this.state;
    const actionStyle = {
      position: 'absolute',
      bottom: 0,
      zIndex: 100000,
    };

    return (
      <Animated.View
        style={expandMap
            ? [styles.mapWrapper, actionStyle, { height: animation }]
            : [styles.mapWrapper, { height: animation }]
        }
      >
        <Map
          onPress={() => this.toggleMap()}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
          >
          <Marker
            pinColor="#00B8E1"
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            />
        </Map>
      </Animated.View>
    );
  }
};

export default MapView;

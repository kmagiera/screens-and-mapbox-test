import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { useScreens } from 'react-native-screens';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

useScreens();

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYm9yaXNkZXNvdXphIiwiYSI6Ik9PMWFDZ2sifQ.kMDlBG2qkVISsyBaWt_r6w'
);

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MapboxGL.MapView
          showUserLocation={false}
          style={StyleSheet.absoluteFill}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: HomeScreen,
  Map: MapScreen,
  Details: DetailsScreen,
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Box from './Box';

class ReactNativeFlexDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Box style={styles.lgBox} text="text"/>
          <Box style={styles.mdBox} />
          <Box style={styles.smBox} />
          <Box style={styles.lgBox} />
          <Box style={styles.smBox} />
          <Box style={styles.mdBox} />
          <Box style={styles.lgBox} />
        </View>
        <View style={styles.row}>
          <Box style={styles.mdBox} />
          <Box style={styles.lgBox} />
          <Box style={styles.smBox} />
          <Box style={styles.mdBox} />
          <Box style={styles.smBox} />
          <Box style={styles.mdBox} />
          <Box style={styles.lgBox} />
          <Box style={styles.mdBox} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  smBox: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  mdBox: {
    flex: 2,
    backgroundColor: '#f1c40f',
  },
  lgBox: {
    flex: 3,
    backgroundColor: '#34495e',
  },
  text: {
    color: '#fff',
  },
});

AppRegistry.registerComponent('ReactNativeFlexDemo', () => ReactNativeFlexDemo);

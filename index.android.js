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
import styles from './styles';

class ReactNativeFlexDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Box style={ [styles.Box, styles.lgBox] } text="NATIVE" />
          <Box style={ [styles.Box, styles.mdBox] } text="AWESOME" />
          <Box style={ [styles.Box, styles.smBox] } text="REACT" />
          <Box style={ [styles.Box, styles.lgBox] } text="NATIVE" />
          <Box style={ [styles.Box, styles.smBox] } text="REACT" />
        </View>
        <View style={styles.row}>
          <Box style={ [styles.Box, styles.mdBox] } text="AWESOME" />
          <Box style={ [styles.Box, styles.smBox] } text="REACT" />
          <Box style={ [styles.Box, styles.lgBox] } text="NATIVE" />
          <Box style={ [styles.Box, styles.smBox] } text="REACT" />
          <Box style={ [styles.Box, styles.mdBox] } text="AWESOME" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeFlexDemo', () => ReactNativeFlexDemo);

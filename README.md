# ReactNativeFlexDemo

### Purpose
Simple demonstration of React Native's approach of styling, especially Flex, and review changes with Live Reload.

### Why
Building native applications tend to have longer development cycles due to the fact that working with styles is not as intuitive in terms of coding syntax, and waiting time for compile. React Native provides a way to speed up the process by implementing inline CSS-fashioned style mechanism and Flexbox layout system. With the clever Live Reload, We are able to quickly validate changes on simulators just like the way that web developers  work with web browsers.  

### Short Introduction of Flexbox
The CSS3 Flexible Box, or Flexbox, is a layout system that provides a predictable way of arranging elements on a page even with changes of screen size. React Native offers various of [Flexbox props](https://facebook.github.io/react-native/docs/flexbox.html) which handles a wide range of cases in layouts in a simple way.

### How The Demo Works
Clone the project and run `npm install`
to install all the dependencies. Once you are done installing, execute `react-native run-ios` for iOS simulation or `react-native run-android` for Android.

On startup, you will see two rows of sections with colors that indicate the size of the sections. You can open `styles.js` and start experiment with the styles and flex props. Live reload should happen right when you save your changes. If not, press `cmd+D` and enable the Live Reload option.

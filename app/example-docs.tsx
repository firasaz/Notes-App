import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const App = () => {
  const onBooking = () => {}
  return (    
    <TouchableHighlight
      onPress={onBooking} style={styles.btnClickContain}
      underlayColor='#000'>
      <View
        style={styles.btnContainer}>
        {/* <Icon
          name='fontawesome|facebook-square'
          size={25}
          color='#042'
          style={styles.btnIcon}/> */}
        <Text style={styles.btnText}>Sign In with Facebook</Text>
      </View>
    </TouchableHighlight>
  );
};


var styles = StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#009D6E',
    // borderRadius: 5,
    padding: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 10,
    marginTop: 2,
  }
});

export default App;
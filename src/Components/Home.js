import React, { useState, useEffect, Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import FormPopup from './FormPopUp';

const Home = () => {
    const [userData,setUserData]=useState({});
    const[visible,setVisible]=useState(false);



  const clickHandler = () => {
    // alert('Floating Button Clicked');
    setVisible(true)
  };
  const outsideBack = () => {
    // close knowledge center detail popup on click of hardware back key
    setVisible(false);
  };
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
        User List
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
      {visible && (
        <FormPopup
          visible={visible}
          setVisible={setVisible}
          hardware={outsideBack}
        />
      )}
      </>
    /* </SafeAreaView> */
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
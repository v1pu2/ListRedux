import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import { getData } from "../Actions/ActionFile";
import { Icon } from "react-native-elements";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import FormPopup from "./FormPopUp";

const Home = (props) => {
  const [userData, setUserData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    props.getData();
  }, []);

  useEffect(() => {
    props && props.userList && setUserData(props.userList);
  }, [props.userList]);

  const clickHandler = () => {
      setSelectedItem("")
    setVisible(true);
  };
  const outsideBack = () => {
    setVisible(false);
  };

  const renderItem = (item) => {
    return (
      <View style={styles.itemView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Name:{item && item.item.name}</Text>
            <Text>Email:{item && item.item.email}</Text>
            <Text>Phone:{item && item.item.phone}</Text>
          </View>

          <Icon
            name='edit'
            color='black'
            size={20}
            onPress={() => {
              setSelectedItem(item && item.item);
              setVisible(true);
            }}
          />
          {/* <Text>edit</Text> */}
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>User List</Text>
        {userData.length > 0 && (
          <FlatList
            data={userData}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
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
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.apiReducer.user,
  };
};

export default connect(mapStateToProps, { getData })(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  itemView: { padding: 10, borderWidth: 1, margin: 5 },
});

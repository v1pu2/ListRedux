import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {setData} from '../Actions/GetData';
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import { Button, Overlay } from "react-native-elements";
import Input from "./TextInput";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  overlay: {
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containerView: {
    height: 400,
    width: 400,
  },
  scrollStyle: { flex: 1 },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#626262",
    height: 50,
    bottom: 0,
    width: deviceWidth,
    position: "absolute",
  },
  txtHeader: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#626262",
    padding: 5,
  },
  txtStyle: { color: "white", fontSize: 16 },
  inputView: { fontSize: 16, paddingBottom: 8, color: "#626262" },
  containerStyle: { borderBottomColor: "#efefef", height: 30 },
  labelStyle: {
    color: "#626262",
    fontSize: 14,
    marginTop: 15,
    // fontWeight: "700"
  },

  description: { fontSize: 14, borderBottomWidth: 0 },
  pickerContainer: {
    width: "90%",
    marginLeft: 5,

    height: 30,
    justifyContent: "center",
  },

  btnLogin: {
    backgroundColor: "#626262",
    padding: 5,
    height: 50,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "lightgray",
    width: deviceWidth,
    height: 50,
    padding: 5,
  },
});

const FormPopup = (props) => {
  const { visible, setVisible, hardware } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [errorPhone, setErrorPhone] = useState("");

  const validateEmail = () => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    if (!regexEmail.test(email.toLowerCase())) {
      setErrorEmail("Invalid Email");
      setIsValidate(true);
      setIsValidate(true);
    } else {
      setErrorEmail("");
    }
  };
  const onChangeEmail = (email) => {
    if (isValidate) {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
      if (!regexEmail.test(email.toLowerCase())) {
        setErrorEmail("Invalid Email");
        setEmail(email);
      } else {
        setErrorEmail("");
        setEmail(email);
        // disabled
      }
    } else {
      setEmail(email);
    }
  };
  const onChangePhone = (value) => {
    if (isPhone) {
      const regexPhone = /[1-9]{1}[0-9]{9}/;
      if (!regexPhone.test(value)) {
        setErrorPhone("Please enter valid number");
        setPhone(value);
      } else {
        setPhone(value);
        setErrorPhone("");
      }
    } else {
      setPhone(value);
    }
  };

  const phoneValidation = () => {
    const regexPhone = /[1-9]{1}[0-9]{9}/;
    if (!regexPhone.test(phone)) {
      setErrorPhone("Please enter valid number");
      setIsPhone(true);
    } else {
      setErrorPhone("");
    }
  };

  const onClickSubmit = () => {
    console.log("submit click", name, email, phone);
    setVisible(false);
  };

  const disabled = !!(
    !name ||
    !name.trim() ||
    !email ||
    !email.trim() ||
    errorEmail ||
    errorPhone
  );

  return (
    <Overlay
      isVisible={visible}
      height='65%'
      width='100%'
      overlayStyle={styles.overlay}
      onBackdropPress={hardware}
    >
      <View style={styles.containerView}>
        <Input
          placeholder='Enter Name'
          placeholderTextColor='#626262'
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputView}
          label='Name'
          labelStyle={styles.labelStyle}
          value={name}
          style={styles.description}
          onChangeText={setName}
          maxLength={30}
        />
        <Input
          placeholder='Enter Email ID'
          placeholderTextColor='#626262'
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputView}
          label='Email ID'
          labelStyle={styles.labelStyle}
          value={email}
          style={styles.description}
          onChangeText={(text) => onChangeEmail(text)}
          onEndEditing={validateEmail}
          errorMessage={errorEmail}
          maxLength={50}
          keyboardType='email-address'
        />
        <Input
          placeholder='Enter Mobile No.'
          placeholderTextColor='#626262'
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputView}
          label='Mobile No.'
          labelStyle={styles.labelStyle}
          value={phone}
          style={styles.description}
          onChangeText={(text) => onChangePhone(text)}
          onEndEditing={phoneValidation}
          maxLength={10}
          keyboardType='phone-pad'
          errorMessage={errorPhone}
        />
        <View style={styles.btnView}>
          <Button
            titleStyle={styles.txtStyle}
            title='Submit'
            buttonStyle={styles.btnLogin}
            onPress={onClickSubmit}
            disabled={disabled}
            disabledStyle={styles.disabledButton}
          />
        </View>
      </View>
    </Overlay>
  );
};

// export default FormPopup;
const mapStateToProps = state => {
  return {
    userData: state.rootReducer.userData,
  };
};

export default connect(
  mapStateToProps,
  {setData},
)(FormPopup);

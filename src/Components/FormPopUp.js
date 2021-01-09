import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setData } from "../Actions/ActionFile";
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
  const { visible, setVisible, hardware, selectedItem } = props;

  const [userData, setUserData] = useState([]);
  const [name, setName] = useState((selectedItem && selectedItem.name) || "");
  const [email, setEmail] = useState(
    (selectedItem && selectedItem.email) || ""
  );
  const [phone, setPhone] = useState(
    (selectedItem && selectedItem.phone) || ""
  );
  const [isValidate, setIsValidate] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [errorPhone, setErrorPhone] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    props && props.users && props.users.length > 0 && setUserData(props.users);
  }, [props.users]);

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
  const arrangeUserData = (data) => {
    userData.push(data);
    props.setData(userData);
    setIndex(index + 1);
    setVisible(false);
  };
  const onClickSubmit = () => {
    const id = index;
    const data = { id, name, email, phone };
    if (userData.length === 0) {
      arrangeUserData(data);
    } else {
      var index = userData.findIndex((x) => x.email === email);

      if (selectedItem && selectedItem.email !== null) {
        const sel_email = selectedItem && selectedItem.email;
        for (var i in userData) {
          if (userData[i].email === sel_email) {
            userData[i].email = email;
            userData[i].name = name;
            userData[i].phone = phone;
            break; //Stop this loop, we found it!
          }
        }
        props.setData(userData);
        setVisible(false);
      } else if (selectedItem && selectedItem.email === null && index === 0) {
        setErrorEmail("Email already exists");
      } else {
        arrangeUserData(data);
      }
    }
  };

  const disabled = !!(
    !name ||
    !name.trim() ||
    !email ||
    !email.trim() ||
    errorEmail ||
    phone.length < 10 ||
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
const mapStateToProps = (state) => {
  console.log("state in form", state.apiReducer.user);
  return {
    users: state.apiReducer.user,
  };
};

export default connect(mapStateToProps, { setData })(FormPopup);

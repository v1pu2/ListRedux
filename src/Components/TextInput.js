import React from 'react';
import {Input} from 'react-native-elements';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {borderBottomColor: '#efefef'},
});
const TextInput = props => {
  const {
    label,
    onChangeText,
    error,
    placeholder,
    value,
    autoFocus,
    maxLength,
    keyboardType,
    secureTextEntry,
    inputContainerStyle,
    returnKeyType,
    blurOnSubmit,
    onSubmitEditing,
    refName,
    setRef,
    errorMessage,
    placeholderTextColor,
    labelStyle,
    containerStyle,
    onBlur,
    onEndEditing,
    multiline,
    numberOfLines,
    onTouchEndCapture,
    onfocus,
    keyboardAppearance,
    disabled,
    onKeyPress,
    rightIcon,
    rightIconContainerStyle,
  } = props;

  return (
    <Input
      placeholder={placeholder || ''}
      placeholderTextColor={placeholderTextColor}
      label={label}
      labelStyle={labelStyle}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      inputContainerStyle={[styles.containerStyle, inputContainerStyle]}
      autoFocus={autoFocus}
      maxLength={maxLength || 15}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={blurOnSubmit}
      ref={setRef}
      // onKeyPress={onKeyPress}
      errorMessage={errorMessage}
      containerStyle={containerStyle}
      onBlur={onBlur}
      onEndEditing={onEndEditing}
      numberOfLines={numberOfLines}
      onFocus={onfocus}
      onTouchEndCapture={onTouchEndCapture}
      keyboardAppearance={keyboardAppearance}
      disabled={disabled}
      rightIcon={rightIcon}
      rightIconContainerStyle={rightIconContainerStyle}
      {...props}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  placeHolderFontSize: PropTypes.number,
  onChangeText: PropTypes.func.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  secureTextEntry: PropTypes.bool,
  errorMessage: PropTypes.string,
};
TextInput.defaultProps = {
  label: '',
  placeholder: '',
  error: '',
  value: '',
  autoFocus: false,
  maxLength: 15,
  secureTextEntry: false,
  errorMessage: '',
  
};

export default TextInput;

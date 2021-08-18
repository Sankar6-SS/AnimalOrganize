import React from 'react';
import {TextInput} from 'react-native';
import {CONSTATNS} from '../Constants';

const TextInputComponent = ({
  style = {},
  value = '',
  placeholder = CONSTATNS.PLACEHOLDER,
  keyboardType = 'default',
  onChangeText,
  editable,
  numberOfLines,
  isMultiline,
}) => {
  return (
    <TextInput
      multiline={isMultiline}
      numberOfLines={numberOfLines}
      style={style}
      onChangeText={onChangeText}
      value={value}
      editable={editable}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};
export default TextInputComponent;

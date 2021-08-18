import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CheckMarkIcon, CancelIcon} from '../assets/IconComponent/SvgThemeIcons';
import { COLORS } from '../Constants';

const CustomButton = ({
  name = '',
  style = {},
  onPress,
  renderIconComponent = null,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={style}
      onPress={() => onPress()}>
      {renderIconComponent && renderIconComponent()}
      <Text style={{fontSize: 20}}>{name}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

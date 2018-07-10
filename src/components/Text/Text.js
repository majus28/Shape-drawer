import React from 'react';
import { Text as BaseText } from 'react-native';

const Text = ({ children, style }) => (
  <BaseText style={style}>{children}</BaseText>
);

export default Text;

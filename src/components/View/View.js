import React from 'react';
import { View as BaseView } from 'react-native';
import styles from './styles';

const View = ({ children, style }) => (
  <BaseView style={[styles.style, style]}>{children}</BaseView>
);

export default View;

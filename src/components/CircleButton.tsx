import {
  StyleSheet, ViewStyle, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

type Props = {
  style?: ViewStyle;
  name: string;
  onPress: () => void;
};

export default function CircleButton({ style, name, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});

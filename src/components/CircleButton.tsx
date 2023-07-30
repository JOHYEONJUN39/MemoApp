import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function CircleButton({ children, style }: Props) {
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

CircleButton.defaultProps = {
  style: {}, // 원하는 경우 기본 스타일을 빈 객체로 지정하거나 다른 스타일 객체를 넣을 수 있습니다.
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

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type props = {
  label: string;
  onPress: () => void;
}

export default function SubmitButton({ label, onPress } : props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    // 자기자신을 정렬시키는 프로로퍼티
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: '#FFFFFF',
  },
});

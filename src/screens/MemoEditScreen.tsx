import {
  StyleSheet, View, TextInput, KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import CircleButton from '../components/CircleButton.tsx';
import type Navigate from '../types/navigation.interface.ts';

export default function MemoEditScreen({ navigation } : Navigate) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        onPress={() => { navigation.goBack(); }}
        name="check"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

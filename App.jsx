import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppBar from './src/components/AppBar.tsx';
import MemoList from './src/components/MemoList.tsx';
import CircleButton from './src/components/CircleButton.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

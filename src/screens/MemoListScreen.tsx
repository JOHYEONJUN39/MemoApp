import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar.tsx';
import MemoList from '../components/MemoList.tsx';
import CircleButton from '../components/CircleButton.tsx';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

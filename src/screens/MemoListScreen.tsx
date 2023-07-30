import { StyleSheet, View } from 'react-native';
import React from 'react';
import MemoList from '../components/MemoList.tsx';
import CircleButton from '../components/CircleButton.tsx';
import type Navigate from '../types/navigation.interface.ts';

export default function MemoListScreen({ navigation } : Navigate) {
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        onPress={() => { navigation.navigate('MemoCreate'); }}
        name="plus"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

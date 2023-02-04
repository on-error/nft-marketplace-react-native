import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const SafeArea = ({ children, style: safeAreaStyle }) => {
  return (
    <SafeAreaView style={[safeAreaStyle, style.androidSafeArea]}>
      {children}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 45 : 0,
  },
});

export default SafeArea;

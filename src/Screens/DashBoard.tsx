import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { spacing } from '../contants/dimensions';

const DashBoard = () => {

  const date = Date.now();
  console.log(date);

  return (
    <View style={styles.container}>
      <Text>Good Morning Tanaka</Text>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
    container: {
        padding:spacing.sm,
    },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.redLetter}>E</Text>
      <Text style={styles.greenLetter}>F</Text>
      <Text style={styles.blueLetter}>B</Text>
      <Text style={styles.purpleLetter}>F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop:20,
    flexDirection: 'row', // Para alinhar as letras na horizontal
    backgroundColor: '#F8F8F8',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00A7E1',
  },
  greenLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7747FF',
  },
  blueLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8AF23',
  },
  purpleLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8AF23',
  },
});

export default CustomHeader;

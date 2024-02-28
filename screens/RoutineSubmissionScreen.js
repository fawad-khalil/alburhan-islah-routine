import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, ActivityIndicator, Image } from 'react-native';

import { getRoutines } from '../src/api/routines_api'

const RoutineSubmissionScreen = ({navigation}) => {

  let routines = getRoutines();

  return (
    <View style={styles.container}>
      {routines.map( (routine, index) => (
          <Text key={index}>{routine.description}</Text>
        )
      )}
    </View>
  );
};
export default RoutineSubmissionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  my_1: {
    marginTop: 5,
    marginBottom: 5
  },
});

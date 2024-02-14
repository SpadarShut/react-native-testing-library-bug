import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const roles = ['link', 'tablist', 'button'];

export default function App() {
  return (
    <View style={styles.container}>
      {roles.map((role) => {
        return (
          <View
            role={role}
            aria-label={role}
            // accessible={true}
            key={role}
          >
            <Text>{role}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>BMW Info-App</Text>
      <Text style={styles.text}>Hier findest du Infos zu beliebten BMW-Modellen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, textAlign: 'center', color: '#555' },
});

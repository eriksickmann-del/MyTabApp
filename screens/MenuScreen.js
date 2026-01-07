import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔧 Menü & Einstellungen</Text>
      <Text style={styles.text}>Hier kannst du später mehr Optionen hinzufügen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title: { fontSize:22, fontWeight:'bold', marginBottom:10 },
  text: { fontSize:16, color:'#666' }
});

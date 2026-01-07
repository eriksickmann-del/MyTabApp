import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
  source={{ uri: 'https://via.placeholder.com/100' }}
  style={styles.avatar}
/>

       
        style={styles.avatar}
        resizeMode="cover"
      



      <Text style={styles.name}>Erik</Text>

      <View style={styles.detailBox}>
        <Text style={styles.detailLabel}>E-Mail:</Text>
        <Text style={styles.detailText}>...@web.de</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.detailLabel}>Mitglied seit:</Text>
        <Text style={styles.detailText}>Januar 2024</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Profil bearbeiten</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: '#ddd', // ← nur zur Sichtbarkeit, falls Bild nicht geladen wird
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailBox: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: '600',
    marginRight: 5,
  },
  detailText: {
    fontWeight: '300',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  editText: {
    color: 'white',
    fontWeight: '600',
  },
});

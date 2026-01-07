import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const bmwCars = [
  { id: '1', name: 'BMW E 30' },
  { id: '2', name: 'BMW M4' },
  { id: '3', name: 'BMW X7' },
  { id: '4', name: 'BMW Z4' },
  { id: '5', name: 'BMW 7er' },
  { id: '6', name: 'BMW i8' },
];

export default function AboutScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        // Hier könntest du später auf eine Detail-Seite navigieren
       
      }}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> bekannte BMW Modell:</Text>
      <FlatList
        data={bmwCars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  list: { paddingBottom: 20 },
  item: {
    backgroundColor: '#007AFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: { color: 'white', fontSize: 18 },
});
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const bmwModels = [
  { name: 'BMW E30', time: 7.5 },
  { name: 'BMW M4', time: 3.5 },
  { name: 'BMW X7', time: 4.7 },
  { name: 'BMW Z4', time: 4.2 },
  { name: 'BMW 7er', time: 3.7 },
  { name: 'BMW i8', time: 4.4 },
];

export default function BeschleunigungScreen() {
  const [selected, setSelected] = useState(null);
  const [guess, setGuess] = useState('');
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [feedback, setFeedback] = useState('');

  const intervalRef = useRef(null);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const start = () => {
    setTime(0);
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prev => {
        if (prev >= selected.time) {
          clearInterval(intervalRef.current);
          setRunning(false);

          const diff = Math.abs(parseFloat(guess) - selected.time);
          setFeedback(
            diff < 0.3 ? "🎯 Perfekt!" :
            diff < 1 ? "😅 Ganz okay" :
            "❌ Nope"
          );
          return selected.time;
        }
        return +(prev + 0.1).toFixed(1);
      });
    }, 100);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setSelected(null);
    setGuess('');
    setFeedback('');
    setTime(0);
  };

  return (
    <View style={styles.container}>
      {!selected ? (
        <>
          <Text style={styles.title}>Wähle ein Modell</Text>
          {bmwModels.map(m => (
            <TouchableOpacity key={m.name} style={styles.button} onPress={() => setSelected(m)}>
              <Text style={styles.buttonText}>{m.name}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.title}>{selected.name}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Schätzzeit"
            value={guess}
            onChangeText={setGuess}
          />

          {!running && !feedback && (
            <TouchableOpacity style={styles.button} onPress={start}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          )}

          {running && <Text style={styles.timer}>{time}s</Text>}

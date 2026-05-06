import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { laporan } = route.params;

  const labelColor = {
    "Kendala Mesin": "#E53935",
    "Fasilitas": "#1E88E5",
  };
  const color = labelColor[laporan.jenisLaporan] || "#999";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{laporan.jenisLaporan}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Lokasi:</Text>
          <Text style={styles.value}>{laporan.lokasi}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Jenis Laporan:</Text>
          <Text style={[styles.value, { color: color }]}>{laporan.jenisLaporan}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Deskripsi:</Text>
          <Text style={styles.value}>{laporan.deskripsi}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
  { 
    flex: 1, backgroundColor: "#F5F5F5", padding: 20 },
  card: { backgroundColor: "white", padding: 20, borderRadius: 10, elevation: 3 },
  title: { fontSize: 22, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 15, marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  label: { fontSize: 14, color: "gray" },
  value: { fontSize: 16, fontWeight: "bold", color: "#333", flexShrink: 1, textAlign: 'right' },
});
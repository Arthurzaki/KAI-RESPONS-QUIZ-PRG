import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LaporanItem({ laporan, onPress }) {
  const labelColor = {
    "Fasilitas": "#1E88E5",
    "Kendala Mesin": "#E53935",
  };
  const color = labelColor[laporan.jenisLaporan] || "#999";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { borderColor: color }]}>
        <Text style={[styles.kategori, { color: color }]}>{laporan.jenisLaporan}</Text>
        <Text style={styles.nama}>👤 {laporan.namaPelapor || 'Anonim'}</Text>
        <Text style={styles.deskripsi} numberOfLines={1}>{laporan.deskripsi}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    elevation: 2,
  },
  kategori: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  nama: { fontSize: 15, color: '#333', marginBottom: 4 },
  deskripsi: { fontSize: 14, color: '#666' },
});
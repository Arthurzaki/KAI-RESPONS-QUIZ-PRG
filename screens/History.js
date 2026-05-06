import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import LaporanItem from "../components/LaporanItem";
import { supabase } from "../services/supabase";

export default function History({ navigation }) {
  const [laporanData, setLaporanData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLaporan = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('laporan')
      .select('*');

    if (error) {
      console.log('Error:', error.message);
    } else {
      setLaporanData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLaporan();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#E53935" />
        <Text style={{ marginTop: 10 }}>Memuat data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Laporan</Text>
      <FlatList
        data={laporanData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LaporanItem
            laporan={{
              id: item.id,
              jenisLaporan: item.jenis_laporan,
              namaPelapor: item.nama_pelapor, 
              deskripsi: item.deskripsi,
            }}
            onPress={() => navigation.navigate('Detail', {
              laporan: {
                id: item.id,
                jenisLaporan: item.jenis_laporan,
                namaPelapor: item.nama_pelapor,
                idKereta: item.id_kereta,
                deskripsi: item.deskripsi,
              }
            })}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada laporan.</Text>
        }
        onRefresh={fetchLaporan}
        refreshing={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  empty: { textAlign: 'center', color: '#999', marginTop: 40 },
});
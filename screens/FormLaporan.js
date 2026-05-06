import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { supabase } from "../services/supabase"; // <-- tambah ini

export default function FormLaporan({ navigation }) {
  const [namaPelapor, setNamaPelapor] = useState('');
  const [idKereta, setIdKereta] = useState('');
  const [kategori, setKategori] = useState('Kendala Mesin');
  const [deskripsi, setDeskripsi] = useState('');
  const [loading, setLoading] = useState(false); // <-- tambah ini

  const isValid = deskripsi.length >= 20;

  const handleKirim = async () => { // <-- async
    setLoading(true);

    const { error } = await supabase
      .from('laporan')
      .insert([{
        nama_pelapor: namaPelapor,
        id_kereta: idKereta,
        jenis_laporan: kategori,
        deskripsi: deskripsi,
      }]);

    setLoading(false);

    if (error) {
      Alert.alert('❌ Gagal', error.message);
    } else {
      Alert.alert('✅ Sukses!', 'Laporan Anda Berhasil Terkirim');
      setNamaPelapor('');
      setIdKereta('');
      setKategori('Kendala Mesin');
      setDeskripsi('');
      navigation.navigate('Dashboard');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formulir Laporan</Text>

      <Text style={styles.label}>Nama Pelapor</Text>
      <TextInput
        placeholder="Masukkan nama anda"
        style={styles.input}
        value={namaPelapor}
        onChangeText={setNamaPelapor}
      />

      <Text style={styles.label}>ID Kereta</Text>
      <TextInput
        placeholder="Contoh: Argo Bromo"
        style={styles.input}
        value={idKereta}
        onChangeText={setIdKereta}
      />

      <Text style={styles.label}>Kategori</Text>
      <Picker
        selectedValue={kategori}
        style={styles.picker}
        onValueChange={(itemValue) => setKategori(itemValue)}
      >
        <Picker.Item label="Kendala Mesin" value="Kendala Mesin" />
        <Picker.Item label="Fasilitas" value="Fasilitas" />
      </Picker>

      <Text style={styles.label}>Deskripsi (minimal 20 karakter)</Text>
      <TextInput
        placeholder="Ceritakan kendala yang dialami..."
        style={styles.input}
        value={deskripsi}
        onChangeText={setDeskripsi}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
        style={[styles.button, (!isValid || loading) && styles.buttonDisabled]}
        onPress={handleKirim}
        disabled={!isValid || loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Mengirim...' : 'Kirim Laporan'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  input: { marginTop: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
  picker: { marginTop: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  button: { marginTop: 20, backgroundColor: '#003366', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 16 },
});
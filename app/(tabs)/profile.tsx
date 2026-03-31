import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { colors, radius } from '@/constants/theme';

const items = [
  'Editar perfil',
  'Métodos de pago',
  'Direcciones',
  'Mis servicios publicados',
  'Ayuda y soporte',
  'Cerrar sesión',
];

export default function ProfileScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={styles.avatarText}>DR</Text></View>
        <Text style={styles.name}>Diego RG</Text>
        <Text style={styles.email}>diego@example.com</Text>
      </View>

      {items.map((item) => (
        <View key={item} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 28,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  email: {
    marginTop: 6,
    color: colors.textMuted,
  },
  row: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
});

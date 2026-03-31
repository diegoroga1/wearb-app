import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { colors, radius } from '@/constants/theme';

const bookings = [
  { id: '1', title: 'Limpieza premium del hogar', date: 'Hoy · 18:00', status: 'Confirmada' },
  { id: '2', title: 'Corte y peinado a domicilio', date: '12 abril · 10:30', status: 'Pendiente de pago' },
];

export default function BookingsScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Mis reservas</Text>
      <Text style={styles.subtitle}>Consulta el estado de tus próximas citas y servicios contratados.</Text>

      {bookings.map((booking) => (
        <View key={booking.id} style={styles.card}>
          <Text style={styles.cardTitle}>{booking.title}</Text>
          <Text style={styles.meta}>{booking.date}</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>{booking.status}</Text></View>
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 20,
    color: colors.textMuted,
    lineHeight: 22,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 14,
  },
  cardTitle: {
    fontWeight: '800',
    fontSize: 17,
    color: colors.text,
  },
  meta: {
    marginTop: 6,
    color: colors.textMuted,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 14,
    backgroundColor: colors.primarySoft,
    borderRadius: radius.round,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: colors.primary,
    fontWeight: '700',
  },
});

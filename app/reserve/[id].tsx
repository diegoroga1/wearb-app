import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';

const days = ['Lun 8', 'Mar 9', 'Mié 10', 'Jue 11'];
const times = ['09:00', '10:30', '12:00', '16:00', '18:30'];

export default function ReserveScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = services.find((item) => item.id === id) || services[0];

  return (
    <Screen>
      <Text style={styles.title}>Reserva tu servicio</Text>
      <Text style={styles.subtitle}>{service.title}</Text>

      <Text style={styles.section}>Selecciona una fecha</Text>
      <View style={styles.rowWrap}>
        {days.map((day, index) => (
          <View key={day} style={[styles.choice, index === 1 && styles.choiceActive]}>
            <Text style={[styles.choiceText, index === 1 && styles.choiceTextActive]}>{day}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.section}>Selecciona una hora</Text>
      <View style={styles.rowWrap}>
        {times.map((time, index) => (
          <View key={time} style={[styles.choice, index === 2 && styles.choiceActive]}>
            <Text style={[styles.choiceText, index === 2 && styles.choiceTextActive]}>{time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Resumen</Text>
        <Text style={styles.summaryText}>Servicio: {service.title}</Text>
        <Text style={styles.summaryText}>Profesional: {service.provider}</Text>
        <Text style={styles.summaryText}>Duración: {service.duration}</Text>
        <Text style={styles.summaryText}>Precio base: €{service.price}</Text>
      </View>

      <PrimaryButton label="Continuar al pago" onPress={() => router.push(`/checkout/${service.id}`)} />
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
    color: colors.textMuted,
  },
  section: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 4,
  },
  choice: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.round,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  choiceActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  choiceText: {
    color: colors.text,
    fontWeight: '700',
  },
  choiceTextActive: {
    color: '#fff',
  },
  summary: {
    marginVertical: 26,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  summaryText: {
    color: colors.textMuted,
    marginBottom: 8,
  },
});

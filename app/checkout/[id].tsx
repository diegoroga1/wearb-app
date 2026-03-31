import { StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';

export default function CheckoutScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = services.find((item) => item.id === id) || services[0];
  const total = service.price + 2.99;

  return (
    <Screen>
      <Text style={styles.title}>Pago de la reserva</Text>
      <Text style={styles.subtitle}>Introduce tus datos y confirma la compra.</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nombre en la tarjeta" placeholderTextColor={colors.textMuted} />
        <TextInput style={styles.input} placeholder="Número de tarjeta" placeholderTextColor={colors.textMuted} />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.half]} placeholder="MM/AA" placeholderTextColor={colors.textMuted} />
          <TextInput style={[styles.input, styles.half]} placeholder="CVV" placeholderTextColor={colors.textMuted} />
        </View>
      </View>

      <View style={styles.summary}>
        <Text style={styles.item}>Servicio <Text style={styles.value}>€{service.price.toFixed(2)}</Text></Text>
        <Text style={styles.item}>Tarifa plataforma <Text style={styles.value}>€2.99</Text></Text>
        <Text style={styles.total}>Total <Text style={styles.totalValue}>€{total.toFixed(2)}</Text></Text>
      </View>

      <PrimaryButton label="Confirmar y pagar" onPress={() => router.replace('/(tabs)/bookings')} />
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
    marginBottom: 20,
  },
  form: {
    gap: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  half: {
    flex: 1,
  },
  summary: {
    marginVertical: 26,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
  },
  item: {
    color: colors.textMuted,
    marginBottom: 10,
  },
  value: {
    color: colors.text,
    fontWeight: '700',
  },
  total: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 4,
  },
  totalValue: {
    color: colors.primary,
  },
});

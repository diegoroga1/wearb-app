import { StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function CheckoutScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useI18n();
  const service = services.find((item) => item.id === id) || services[0];
  const total = service.price + 2.99;

  return (
    <Screen>
      <Text style={styles.title}>{t('checkout.title')}</Text>
      <Text style={styles.subtitle}>{t('checkout.subtitle')}</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder={t('checkout.cardName')} placeholderTextColor={colors.textMuted} />
        <TextInput style={styles.input} placeholder={t('checkout.cardNumber')} placeholderTextColor={colors.textMuted} />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.half]} placeholder={t('checkout.expiry')} placeholderTextColor={colors.textMuted} />
          <TextInput style={[styles.input, styles.half]} placeholder={t('checkout.cvv')} placeholderTextColor={colors.textMuted} />
        </View>
      </View>

      <View style={styles.summary}>
        <Text style={styles.item}>{t('common.service')} <Text style={styles.value}>€{service.price.toFixed(2)}</Text></Text>
        <Text style={styles.item}>{t('common.platformFee')} <Text style={styles.value}>€2.99</Text></Text>
        <Text style={styles.total}>{t('common.total')} <Text style={styles.totalValue}>€{total.toFixed(2)}</Text></Text>
      </View>

      <PrimaryButton label={t('checkout.confirmPay')} onPress={() => router.replace('/(tabs)/bookings')} />
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

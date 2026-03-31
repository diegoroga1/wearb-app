import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { bookingDays, bookingTimes, localizeText, services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function ReserveScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, locale } = useI18n();
  const service = services.find((item) => item.id === id) || services[0];
  const days = bookingDays[locale];

  return (
    <Screen>
      <Text style={styles.title}>{t('reserve.title')}</Text>
      <Text style={styles.subtitle}>{localizeText(service.title, locale)}</Text>

      <Text style={styles.section}>{t('reserve.selectDate')}</Text>
      <View style={styles.rowWrap}>
        {days.map((day, index) => (
          <View key={day} style={[styles.choice, index === 1 && styles.choiceActive]}>
            <Text style={[styles.choiceText, index === 1 && styles.choiceTextActive]}>{day}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.section}>{t('reserve.selectTime')}</Text>
      <View style={styles.rowWrap}>
        {bookingTimes.map((time, index) => (
          <View key={time} style={[styles.choice, index === 2 && styles.choiceActive]}>
            <Text style={[styles.choiceText, index === 2 && styles.choiceTextActive]}>{time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>{t('common.summary')}</Text>
        <Text style={styles.summaryText}>{t('common.service')}: {localizeText(service.title, locale)}</Text>
        <Text style={styles.summaryText}>{t('common.professional')}: {service.provider}</Text>
        <Text style={styles.summaryText}>{t('common.duration')}: {localizeText(service.duration, locale)}</Text>
        <Text style={styles.summaryText}>{t('common.basePrice')}: €{service.price}</Text>
      </View>

      <PrimaryButton label={t('reserve.continueToPayment')} onPress={() => router.push(`/checkout/${service.id}`)} />
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

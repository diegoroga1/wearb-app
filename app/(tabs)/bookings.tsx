import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';
import { localizeText, services } from '@/data/mock';

export default function BookingsScreen() {
  const { t, locale } = useI18n();
  const bookings = [
    { id: '1', title: localizeText(services[0].title, locale), date: t('bookings.today18'), status: t('bookings.confirmed') },
    { id: '2', title: localizeText(services[1].title, locale), date: t('bookings.april12'), status: t('bookings.pendingPayment') },
  ];

  return (
    <Screen>
      <Text style={styles.title}>{t('bookings.title')}</Text>
      <Text style={styles.subtitle}>{t('bookings.subtitle')}</Text>

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

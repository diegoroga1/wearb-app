import { Image, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { localizeText, services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, locale } = useI18n();
  const service = services.find((item) => item.id === id) || services[0];

  return (
    <Screen>
      <Image source={{ uri: service.image }} style={styles.image} />
      <Text style={styles.title}>{localizeText(service.title, locale)}</Text>
      <Text style={styles.provider}>{service.provider}</Text>

      <View style={styles.stats}>
        <View style={styles.stat}><Ionicons name="star" size={14} color="#F4A340" /><Text style={styles.statText}>{service.rating} ({service.reviews})</Text></View>
        <View style={styles.stat}><Ionicons name="location-outline" size={14} color={colors.primary} /><Text style={styles.statText}>{localizeText(service.location, locale)}</Text></View>
        <View style={styles.stat}><Ionicons name="time-outline" size={14} color={colors.primary} /><Text style={styles.statText}>{localizeText(service.duration, locale)}</Text></View>
      </View>

      <View style={styles.tags}>
        {service.tags.map((tag, index) => (
          <View key={index} style={styles.tag}><Text style={styles.tagText}>{localizeText(tag, locale)}</Text></View>
        ))}
      </View>

      <Text style={styles.section}>{t('service.description')}</Text>
      <Text style={styles.description}>{localizeText(service.description, locale)}</Text>

      <View style={styles.box}>
        <Text style={styles.section}>{t('service.includes')}</Text>
        <Text style={styles.description}>{t('service.includesList')}</Text>
      </View>

      <View style={styles.priceRow}>
        <View>
          <Text style={styles.price}>€{service.price}</Text>
          <Text style={styles.priceLabel}>{t('common.basePrice')}</Text>
        </View>
        <View style={{ flex: 1, marginLeft: 14 }}>
          <PrimaryButton label={t('service.bookNow')} onPress={() => router.push(`/reserve/${service.id}`)} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    borderRadius: radius.xl,
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  provider: {
    marginTop: 6,
    color: colors.textMuted,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F7F9F8',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: radius.round,
  },
  statText: {
    color: colors.textMuted,
    fontWeight: '600',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: radius.round,
  },
  tagText: {
    color: colors.primary,
    fontWeight: '700',
  },
  section: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  description: {
    color: colors.textMuted,
    lineHeight: 24,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    marginTop: 18,
  },
  priceRow: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primary,
  },
  priceLabel: {
    color: colors.textMuted,
  },
});

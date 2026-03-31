import { StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/components/Screen';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function SearchScreen() {
  const { t } = useI18n();
  const filters = [
    t('search.filters.today'),
    t('search.filters.near'),
    t('search.filters.topRated'),
    t('search.filters.home'),
  ];

  return (
    <Screen>
      <Text style={styles.title}>{t('search.title')}</Text>
      <Text style={styles.subtitle}>{t('search.subtitle')}</Text>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={colors.textMuted} />
        <TextInput placeholder={t('search.placeholder')} placeholderTextColor={colors.textMuted} style={styles.input} />
        <Ionicons name="options-outline" size={20} color={colors.primary} />
      </View>

      <View style={styles.filters}>
        {filters.map((item) => (
          <View key={item} style={styles.filterChip}><Text style={styles.filterText}>{item}</Text></View>
        ))}
      </View>

      {services.map((service) => (
        <ServiceCard key={service.id} service={service} onPress={() => router.push(`/service/${service.id}`)} />
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
    color: colors.textMuted,
    lineHeight: 22,
    marginBottom: 18,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 18,
  },
  filterChip: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.round,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  filterText: {
    color: colors.primary,
    fontWeight: '700',
  },
});

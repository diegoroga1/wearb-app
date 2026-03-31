import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { CategoryBubble } from '@/components/CategoryBubble';
import { ServiceCard } from '@/components/ServiceCard';
import { categories, localizeText, services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function HomeScreen() {
  const { t, locale } = useI18n();

  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>{t('home.hello')}</Text>
          <Text style={styles.title}>{t('home.title')}</Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>DR</Text></View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={colors.textMuted} />
        <TextInput placeholder={t('home.searchPlaceholder')} placeholderTextColor={colors.textMuted} style={styles.searchInput} />
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>{t('home.bannerTitle')}</Text>
        <Text style={styles.bannerText}>{t('home.bannerText')}</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t('common.categories')}</Text>
        <Text style={styles.link}>{t('common.viewAll')}</Text>
      </View>

      <View style={styles.grid}>
        {categories.map((category) => (
          <CategoryBubble
            key={category.id}
            title={localizeText(category.name, locale)}
            icon={category.icon}
            onPress={() => router.push('/(tabs)/search')}
          />
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t('common.featured')}</Text>
        <Text style={styles.link}>{t('common.moreServices')}</Text>
      </View>

      {services.slice(0, 3).map((service) => (
        <ServiceCard key={service.id} service={service} onPress={() => router.push(`/service/${service.id}`)} />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hello: {
    color: colors.primary,
    fontWeight: '700',
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    color: colors.text,
    marginTop: 4,
    maxWidth: 250,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.primary,
    fontWeight: '800',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 18,
    borderRadius: radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  banner: {
    marginTop: 18,
    borderRadius: radius.xl,
    backgroundColor: colors.primary,
    padding: 20,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  bannerText: {
    color: '#D8F2F0',
    lineHeight: 22,
    maxWidth: '90%',
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: '800',
    fontSize: 20,
    color: colors.text,
  },
  link: {
    color: colors.primary,
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

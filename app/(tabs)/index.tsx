import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { CategoryBubble } from '@/components/CategoryBubble';
import { ServiceCard } from '@/components/ServiceCard';
import { categories, services } from '@/data/mock';
import { colors, radius } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hola, Diego</Text>
          <Text style={styles.title}>¿Qué servicio necesitas hoy?</Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>DR</Text></View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={colors.textMuted} />
        <TextInput placeholder="Buscar belleza, limpieza, mascotas..." placeholderTextColor={colors.textMuted} style={styles.searchInput} />
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Servicios cuando los necesitas</Text>
        <Text style={styles.bannerText}>Reserva profesionales verificados con pago seguro y atención rápida.</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categorías</Text>
        <Text style={styles.link}>Ver todas</Text>
      </View>

      <View style={styles.grid}>
        {categories.map((category) => (
          <CategoryBubble
            key={category.id}
            title={category.name}
            icon={category.icon}
            onPress={() => router.push('/(tabs)/search')}
          />
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Destacados</Text>
        <Text style={styles.link}>Más servicios</Text>
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

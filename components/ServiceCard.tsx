import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/constants/theme';
import { Service } from '@/data/mock';

type Props = {
  service: Service;
  onPress?: () => void;
};

export function ServiceCard({ service, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.provider}>{service.provider}</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={14} color="#F4A340" />
          <Text style={styles.meta}>{service.rating} ({service.reviews})</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{service.location}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>€{service.price}<Text style={styles.small}> / servicio</Text></Text>
          <Text style={styles.duration}>{service.duration}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: '100%',
    height: 170,
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  provider: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meta: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: 4,
  },
  dot: {
    marginHorizontal: 6,
    color: colors.textMuted,
  },
  footer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '800',
  },
  small: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.textMuted,
  },
  duration: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
});

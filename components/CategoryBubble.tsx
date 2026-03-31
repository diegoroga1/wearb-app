import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/constants/theme';

type Props = {
  title: string;
  icon: string;
  onPress?: () => void;
};

export function CategoryBubble({ title, icon, onPress }: Props) {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon as any} size={22} color={colors.primary} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconWrap: {
    width: 66,
    height: 66,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.text,
    fontWeight: '600',
  },
});

import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors, radius } from '@/constants/theme';

const slides = [
  {
    title: 'Reserva servicios en minutos',
    description: 'Encuentra profesionales verificados para belleza, hogar, mascotas, clases y mucho más.',
  },
  {
    title: 'Elige fecha y hora',
    description: 'Consulta disponibilidad, compara precios y reserva desde el móvil.',
  },
  {
    title: 'Gestiona todo desde la app',
    description: 'Paga, consulta tus reservas y vuelve a contratar a tus favoritos fácilmente.',
  },
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const current = slides[step];

  return (
    <Screen scroll={false}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.phoneCard}>
            <View style={styles.topBlock} />
            <View style={styles.middleBubble} />
            <View style={styles.row}>
              <View style={styles.smallCard} />
              <View style={styles.smallCard} />
            </View>
            <View style={styles.bottomBar} />
          </View>
        </View>

        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.dot, index === step && styles.dotActive]} />
          ))}
        </View>

        <Text style={styles.title}>{current.title}</Text>
        <Text style={styles.description}>{current.description}</Text>

        <View style={styles.actions}>
          {step < slides.length - 1 ? (
            <>
              <PrimaryButton label="Continuar" onPress={() => setStep((prev) => prev + 1)} />
              <View style={{ height: 12 }} />
              <PrimaryButton label="Saltar" variant="secondary" onPress={() => router.replace('/(auth)/login')} />
            </>
          ) : (
            <>
              <PrimaryButton label="Empezar" onPress={() => router.replace('/(auth)/login')} />
              <View style={{ height: 12 }} />
              <PrimaryButton label="Crear cuenta" variant="secondary" onPress={() => router.replace('/(auth)/signup')} />
            </>
          )}
        </View>
      </View>
    </Screen>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  hero: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.xl,
    padding: 24,
    height: width * 1.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneCard: {
    width: width * 0.58,
    height: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 34,
    padding: 18,
  },
  topBlock: {
    height: 110,
    borderRadius: 24,
    backgroundColor: colors.primary,
    marginBottom: 16,
  },
  middleBubble: {
    height: 62,
    borderRadius: 20,
    backgroundColor: '#EAF8F6',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  smallCard: {
    flex: 1,
    height: 90,
    borderRadius: 20,
    backgroundColor: '#F7F9F8',
  },
  bottomBar: {
    height: 18,
    width: '50%',
    borderRadius: radius.round,
    backgroundColor: colors.border,
    alignSelf: 'center',
    marginTop: 'auto',
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: radius.round,
    backgroundColor: '#D7E2E1',
  },
  dotActive: {
    width: 26,
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: 'center',
    marginTop: 26,
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  actions: {
    marginTop: 24,
    marginBottom: 10,
  },
});

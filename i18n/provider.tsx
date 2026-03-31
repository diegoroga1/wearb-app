import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ExpoLocalization from 'expo-localization';
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { normalizeLocale, SupportedLocale, translations } from './translations';

const STORAGE_KEY = 'wearb.locale';

type I18nContextValue = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue>({
  locale: 'es',
  setLocale: () => undefined,
  t: (key) => key,
});

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<SupportedLocale>('es');

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      const nextLocale = normalizeLocale(stored || ExpoLocalization.getLocales()?.[0]?.languageCode || 'es');
      if (mounted) setLocaleState(nextLocale);
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const setLocale = (nextLocale: SupportedLocale) => {
    setLocaleState(nextLocale);
    AsyncStorage.setItem(STORAGE_KEY, nextLocale).catch(() => undefined);
  };

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    t: (key: string) => translations[locale][key] || translations.es[key] || key,
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

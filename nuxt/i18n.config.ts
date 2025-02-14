import en from '@/lang/en.json';
import vi from '@/lang/vi.json';

const messages = {
  en,
  vi
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages,
}));

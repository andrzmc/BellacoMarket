import { StyleSheet } from 'react-native';

export const typographyUiStyles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  weight_normal: {
    fontWeight: '400',
  },
  weight_medium: {
    fontWeight: '500',
  },
  weight_bold: {
    fontWeight: '700',
  },
  color_normal: {
    color: '#1C1C1E',
  },
  color_info: {
    color: '#007AFF',
  },
  color_success: {
    color: '#34C759',
  },
  color_error: {
    color: '#FF3B30',
  },
  color_warning: {
    color: '#FF9500',
  },
});

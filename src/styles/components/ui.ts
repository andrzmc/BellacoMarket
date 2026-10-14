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

export const buttonUiStyles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  variant_normal: {
    backgroundColor: '#1C1C1E',
  },
  variant_info: {
    backgroundColor: '#007AFF',
  },
  variant_success: {
    backgroundColor: '#34C759',
  },
  variant_error: {
    backgroundColor: '#FF3B30',
  },
  variant_warning: {
    backgroundColor: '#FF9500',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export const CardUiStyles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    gap: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  shape_rounded: {
    borderRadius: 16,
  },
  shape_flat: {
    borderRadius: 0,
  },
  disabled: {
    opacity: 0.5,
  },
  header: {
    marginBottom: 12,
  },
  footer: {
    marginTop: 12,
  },
});

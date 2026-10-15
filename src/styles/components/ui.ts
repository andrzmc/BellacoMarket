import { StyleSheet } from 'react-native';

export const TypographyUiStyles = StyleSheet.create({
  size_title: {
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 12,
  },
  size_subtitle: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 8,
  },
  size_paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  size_small: {
    fontSize: 12,
    lineHeight: 16,
  },
  weight_normal: {
    fontFamily: 'Roboto',
  },
  weight_medium: {
    fontFamily: 'Roboto',
  },
  weight_bold: {
    fontFamily: 'Roboto',
  },
  weight_extrabold: {
    fontFamily: 'Roboto',
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
  disabled: {
    opacity: 0.5,
  },
});

export const CardUiStyles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    padding: 16,
    borderRadius: 12,
    gap: 10,
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

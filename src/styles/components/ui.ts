import { StyleSheet } from 'react-native';
import { TextFontSizeStyles, TextWeightStyles } from '../global/text';

export const TypographyUiStyles = StyleSheet.create({
  ...TextFontSizeStyles,
  ...TextWeightStyles,
});

export const ButtonUiStyles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
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

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
    gap: 12,
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

export const LoaderUiStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  stage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pulseHalo: {
    position: 'absolute',
    borderRadius: 999,
  },
  bagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 6,
  },
  shadow: {
    position: 'absolute',
    bottom: -6,
    borderRadius: 999,
    backgroundColor: '#000000',
  },
  text: {
    marginTop: 12,
    textAlign: 'center',
  },
});

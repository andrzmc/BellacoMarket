import { StyleSheet } from 'react-native';

export const TextFontSizeStyles = StyleSheet.create({
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
});

export const TextWeightStyles = StyleSheet.create({
  weight_normal: {
    fontFamily: 'Montserrat-Regular',
  },
  weight_medium: {
    fontFamily: 'Montserrat-Medium',
  },
  weight_bold: {
    fontFamily: 'Montserrat-Bold',
  },
  weight_extrabold: {
    fontFamily: 'Montserrat-ExtraBold',
  },
});

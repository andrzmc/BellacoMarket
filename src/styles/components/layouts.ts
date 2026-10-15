import { StyleSheet } from 'react-native';

export const ScreenLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  alignment_top: {
    justifyContent: 'flex-start',
  },
  alignment_center: {
    justifyContent: 'center',
  },
  alignment_bottom: {
    justifyContent: 'flex-end',
  },
});

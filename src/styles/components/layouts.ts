import { StyleSheet } from 'react-native';

export const ScreenLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    gap: 16,
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

export const FloatTabBarLayoutStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    padding: 6,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
    gap: 6,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  tabItemActive: {
    paddingHorizontal: 20,
    gap: 8,
  },
  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 10,
    lineHeight: 12,
  },
  labelText: {
    lineHeight: 16,
  },
});

export const MarketCardLayoutStyles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  cover: {
    height: 145,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    position: 'relative',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  favorite: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
  title: {
    textAlign: 'center',
    minHeight: 36,
  },
  inCart: {
    borderWidth: 1,
    alignSelf: 'auto',
    gap: 12,
  },
});

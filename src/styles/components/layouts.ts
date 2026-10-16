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
    width: '70%',
    height: '70%',
  },
  favorite: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
  tags: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    minHeight: 36,
  },
  inCart: {
    alignSelf: 'auto',
  },
});

export const FavoriteCardLayoutStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  cover: {
    width: 80,
    height: 80,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    minHeight: 20,
  },
  price: {
    marginVertical: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    gap: 4,
    alignSelf: 'auto',
  },
  cartButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    gap: 4,
    alignSelf: 'auto',
  },
  removeIcon: {
    padding: 4,
  },
});

export const ShoppingCartCardLayoutStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 14,
    borderRadius: 20,
  },
  cover: {
    width: 76,
    height: 76,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    lineHeight: 20,
  },
  subtitle: {
    marginTop: 2,
    lineHeight: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pricePill: {
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityPill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
    gap: 4,
  },
  removeIcon: {
    padding: 4,
  },
});


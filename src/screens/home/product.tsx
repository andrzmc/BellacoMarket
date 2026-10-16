import React, { FC, useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ScreenLayout from '@/components/layouts/screen';
import { ButtonUi } from '@/components/ui/button';
import { CardUi } from '@/components/ui/card';
import { IconUi } from '@/components/ui/icon';
import { LoaderUi } from '@/components/ui/loader';
import { TypographyUi } from '@/components/ui/typography';
import { RootState } from '@/context/store';
import {
  onAddToCart,
  onAddToFavorites,
  onRemoveToFavorites,
} from '@/context/store/reducers/market';
import { CatalogItem } from '@/models/interfaces/templates';
import { RootStackParamList } from '@/models/types/navigation';
import { GetFakeStoreProductDetailService } from '@/services/api/fakestore';
import useApi from '@/services/hooks/useApi';
import useSkin from '@/services/hooks/useSkin';

const ProductHomeScreen: FC = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Product'>>();

  const marketStore = useSelector((store: RootState) => store.market);

  const fetchProductDetail = useCallback(
    () => GetFakeStoreProductDetailService(String(params?.id ?? '')),
    [params?.id],
  );

  const { data, loading, error } = useApi(
    fetchProductDetail,
    undefined,
    Boolean(params?.id),
  );

  const isFavorite = !!marketStore.favorites.find(x => x.value === data?.id);
  const isInCart = !!marketStore.shoppingCart.find(x => x.value === data?.id);

  const handleFavorite = () => {
    if (!data) return;
    if (isFavorite) {
      dispatch(onRemoveToFavorites(data.id));
    } else {
      const catalogItem: CatalogItem = {
        value: data.id,
        label: data.title,
        tags: [data.category],
        image: data.image,
        amount: data.price,
        count: data.rating?.count,
      };
      dispatch(onAddToFavorites(catalogItem));
    }
  };

  const handleShoppingCart = () => {
    if (!data) return;
    if (isInCart) {
      navigation.navigate('ShoppingCart');
    } else {
      const catalogItem: CatalogItem = {
        value: data.id,
        label: data.title,
        tags: [data.category],
        image: data.image,
        amount: data.price,
        count: data.rating?.count,
      };
      dispatch(onAddToCart(catalogItem));
    }
  };

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <ScreenLayout
      header={{
        childrenLeft: (
          <IconUi
            name="bx-arrow-left"
            color="title"
            size={40}
            onPress={handleGoBack}
          />
        ),
        childrenRight: data ? (
          <IconUi
            name="bx-heart"
            variant={isFavorite ? 'filled' : 'basic'}
            size={24}
            onPress={handleFavorite}
          />
        ) : undefined,
      }}
      scrollable
    >
      {loading && !data ? (
        <View style={styles.centerContainer}>
          <LoaderUi size="big" text="Cargando producto..." />
        </View>
      ) : null}

      {error && !data ? (
        <View style={styles.centerContainer}>
          <IconUi name="bx-alert-circle" size={48} color="error" />
          <TypographyUi
            size="subtitle"
            weight="bold"
            color="error"
            style={styles.errorText}
          >
            {typeof error === 'string'
              ? error
              : 'Ocurrió un error al cargar el producto'}
          </TypographyUi>
        </View>
      ) : null}

      {data ? (
        <>
          <CardUi style={styles.imageCard}>
            <View style={styles.badgesRow}>
              <View
                style={[
                  styles.categoryPill,
                  {
                    backgroundColor: skin.text.paragraph,
                  },
                ]}
              >
                <TypographyUi
                  size="small"
                  weight="bold"
                  color="inverted"
                  style={styles.categoryText}
                >
                  {data.category.toUpperCase()}
                </TypographyUi>
              </View>

              {data.rating ? (
                <View
                  style={[
                    styles.ratingPill,
                    { backgroundColor: skin.background },
                  ]}
                >
                  <IconUi
                    name="bx-star"
                    variant="filled"
                    colorCode="#FFB800"
                    size={16}
                  />
                  <TypographyUi size="small" weight="bold">
                    {data.rating.rate?.toFixed(1) ?? '0.0'}
                  </TypographyUi>
                  <TypographyUi size="small" color="subtitle">
                    ({data.rating.count ?? 0})
                  </TypographyUi>
                </View>
              ) : null}
            </View>

            <View
              style={[
                styles.imageWrapper,
                { backgroundColor: skin.background },
              ]}
            >
              <Image
                source={{ uri: data.image }}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>
          </CardUi>

          <CardUi style={styles.infoCard}>
            <TypographyUi size="title" weight="bold" style={styles.title}>
              {data.title}
            </TypographyUi>

            <View style={styles.priceRow}>
              <View>
                <TypographyUi size="small" color="subtitle" weight="medium">
                  Price
                </TypographyUi>
                <TypographyUi
                  size="title"
                  weight="extrabold"
                  color="info"
                  style={styles.price}
                >
                  ${data.price.toFixed(2)}
                </TypographyUi>
              </View>
            </View>
          </CardUi>

          <CardUi style={styles.descriptionCard}>
            <TypographyUi
              size="subtitle"
              weight="bold"
              style={styles.sectionTitle}
            >
              Details
            </TypographyUi>
            <TypographyUi
              size="paragraph"
              color="paragraph"
              style={styles.description}
            >
              {data.description}
            </TypographyUi>
          </CardUi>

          <ButtonUi
            variant={isInCart ? 'normal' : 'info'}
            style={styles.addToCartButton}
            onPress={handleShoppingCart}
          >
            <IconUi
              name={isInCart ? 'bx-check' : 'bx-basket'}
              color="inverted"
              size={22}
            />
            <TypographyUi weight="bold" size="subtitle" color="inverted">
              {isInCart ? 'Added' : 'Add to cart'}
            </TypographyUi>
          </ButtonUi>
        </>
      ) : null}
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  errorText: {
    textAlign: 'center',
  },
  imageCard: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  categoryText: {
    letterSpacing: 0.5,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 6,
  },
  imageWrapper: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    gap: 12,
  },
  title: {
    lineHeight: 28,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  price: {
    marginTop: 2,
  },
  descriptionCard: {
    gap: 8,
  },
  sectionTitle: {
    marginBottom: 4,
  },
  description: {
    lineHeight: 22,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 18,
    gap: 10,
    marginTop: 4,
    marginBottom: 16,
    alignSelf: 'auto',
  },
});

export default ProductHomeScreen;

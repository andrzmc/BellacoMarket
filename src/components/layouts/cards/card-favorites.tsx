import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { ButtonUi } from '@/components/ui/button';
import { IconUi } from '@/components/ui/icon';
import { FavoriteCardLayoutStyles } from '@/styles/components/layouts';
import useSkin from '@/services/hooks/useSkin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import {
  onAddToCart,
  onRemoveToFavorites,
} from '@/context/store/reducers/market';
import { CatalogItem } from '@/models/interfaces/templates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/models/types/navigation';

export const FavoriteCardLayout: FC<CatalogItem> = props => {
  const { value, label, image, amount } = props;

  const dispatch = useDispatch();

  const { skin } = useSkin();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const marketStore = useSelector((store: RootState) => store.market);

  const isInCart = !!marketStore.shoppingCart.find(x => x.value === value);

  const handleRemoveFavorite = () => {
    dispatch(onRemoveToFavorites(value));
  };

  const handleShoppingCart = () => {
    if (isInCart) {
      navigate('ShoppingCart');
    } else {
      dispatch(onAddToCart(props));
    }
  };

  return (
    <CardUi style={FavoriteCardLayoutStyles.container}>
      <View
        style={[
          FavoriteCardLayoutStyles.cover,
          { backgroundColor: skin.background },
        ]}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={FavoriteCardLayoutStyles.image}
            resizeMode="contain"
          />
        ) : null}
      </View>

      <View style={FavoriteCardLayoutStyles.content}>
        <TypographyUi
          size="paragraph"
          weight="medium"
          numberOfLines={2}
          style={FavoriteCardLayoutStyles.title}
        >
          {label}
        </TypographyUi>

        {typeof amount !== 'undefined' ? (
          <TypographyUi
            size="subtitle"
            weight="bold"
            color="info"
            style={FavoriteCardLayoutStyles.price}
          >
            ${amount}
          </TypographyUi>
        ) : null}

        <View style={FavoriteCardLayoutStyles.actions}>
          <ButtonUi
            variant={isInCart ? 'normal' : 'inverted'}
            style={FavoriteCardLayoutStyles.cartButton}
            onPress={handleShoppingCart}
          >
            <IconUi
              name={isInCart ? 'bx-check' : 'bx-basket'}
              color={isInCart ? 'inverted' : 'info'}
              size={16}
            />
            <TypographyUi
              size="small"
              weight="medium"
              color={isInCart ? 'inverted' : 'info'}
            >
              {isInCart ? 'In cart' : 'Add to cart'}
            </TypographyUi>
          </ButtonUi>

          <IconUi
            name="bx-heart-break"
            color="error"
            onPress={handleRemoveFavorite}
            style={FavoriteCardLayoutStyles.removeIcon}
          />
        </View>
      </View>
    </CardUi>
  );
};

export default FavoriteCardLayout;

import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { IconUi } from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import { CatalogItem } from '@/models/interfaces/templates';
import useSkin from '@/services/hooks/useSkin';
import { MarketCardLayoutStyles } from '@/styles/components/layouts';
import { CardUi } from '@/components/ui/card';
import { ButtonUi } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import {
  onAddToCart,
  onAddToFavorites,
  onRemoveToFavorites,
} from '@/context/store/reducers/market';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/models/types/navigation';

const MarketCardLayout: FC<CatalogItem> = props => {
  const { value, label, image, amount, tags } = props;

  const dispatch = useDispatch();

  const { skin } = useSkin();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const marketStore = useSelector((store: RootState) => store.market);

  const isFavorite = !!marketStore.favorites.find(x => x.value === value);
  const isInCart = !!marketStore.shoppingCart.find(x => x.value === value);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(onRemoveToFavorites(value));
    } else {
      dispatch(onAddToFavorites(props));
    }
  };

  const handleShoppingCart = () => {
    if (isInCart) {
      navigate('ShoppingCart');
    } else {
      dispatch(onAddToCart(props));
    }
  };

  return (
    <CardUi style={MarketCardLayoutStyles.container}>
      <View
        style={[
          MarketCardLayoutStyles.cover,
          { backgroundColor: skin.background },
        ]}
      >
        <View style={MarketCardLayoutStyles.favorite}>
          <IconUi
            name="bx-heart"
            variant={isFavorite ? 'filled' : 'basic'}
            color="info"
            onPress={handleFavorite}
          />
        </View>

        {image ? (
          <Image
            source={{ uri: image }}
            style={MarketCardLayoutStyles.image}
            resizeMode="contain"
          />
        ) : null}
      </View>

      <View style={MarketCardLayoutStyles.content}>
        {tags?.length ? (
          <>
            {tags.map((tag, index) => (
              <TypographyUi
                key={index}
                size="small"
                weight="bold"
                style={[
                  MarketCardLayoutStyles.tags,
                  {
                    backgroundColor: skin.text.paragraph,
                    color: skin.text.inverted,
                  },
                ]}
              >
                {tag}
              </TypographyUi>
            ))}
          </>
        ) : null}
        <TypographyUi
          size="paragraph"
          weight="medium"
          numberOfLines={2}
          style={MarketCardLayoutStyles.title}
        >
          {label}
        </TypographyUi>

        <ButtonUi
          variant={isInCart ? 'normal' : 'inverted'}
          style={MarketCardLayoutStyles.inCart}
          onPress={handleShoppingCart}
        >
          <IconUi
            name={isInCart ? 'bx-check' : 'bx-basket'}
            color={isInCart ? 'inverted' : 'info'}
          />
          <TypographyUi weight="medium" color={isInCart ? 'inverted' : 'info'}>
            {isInCart ? 'In cart' : `$${amount}`}
          </TypographyUi>
        </ButtonUi>
      </View>
    </CardUi>
  );
};

export default MarketCardLayout;

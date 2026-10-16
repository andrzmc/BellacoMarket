import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { IconUi } from '@/components/ui/icon';
import { ShoppingCartCardLayoutStyles } from '@/styles/components/layouts';
import useSkin from '@/services/hooks/useSkin';
import { useDispatch } from 'react-redux';
import { onRemoveToCart } from '@/context/store/reducers/market';
import { CatalogItem } from '@/models/interfaces/templates';

export const ShoppingCartCardLayout: FC<CatalogItem> = props => {
  const { value, label, image, amount, tags } = props;

  const dispatch = useDispatch();
  const { skin } = useSkin();

  const handleRemoveShoppingCart = () => {
    dispatch(onRemoveToCart(value));
  };

  const formattedPrice =
    typeof amount === 'number'
      ? `$${amount.toFixed(2)}`
      : `$${amount ?? '0.00'}`;

  return (
    <CardUi style={ShoppingCartCardLayoutStyles.container}>
      <View
        style={[
          ShoppingCartCardLayoutStyles.cover,
          { backgroundColor: skin.background },
        ]}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={ShoppingCartCardLayoutStyles.image}
            resizeMode="contain"
          />
        ) : null}
      </View>

      <View style={ShoppingCartCardLayoutStyles.content}>
        <TypographyUi
          size="paragraph"
          weight="bold"
          numberOfLines={1}
          style={ShoppingCartCardLayoutStyles.title}
        >
          {label}
        </TypographyUi>

        {tags?.length ? (
          <TypographyUi
            size="small"
            color="subtitle"
            weight="medium"
            numberOfLines={1}
            style={ShoppingCartCardLayoutStyles.subtitle}
          >
            {tags.join(' / ')}
          </TypographyUi>
        ) : null}

        <View style={ShoppingCartCardLayoutStyles.footer}>
          <View
            style={[
              ShoppingCartCardLayoutStyles.pricePill,
              { borderColor: skin.text.info },
            ]}
          >
            <TypographyUi size="paragraph" weight="bold" color="info">
              {formattedPrice}
            </TypographyUi>
          </View>

          <View style={ShoppingCartCardLayoutStyles.controls}>
            <View
              style={[
                ShoppingCartCardLayoutStyles.quantityPill,
                { backgroundColor: skin.tertiary },
              ]}
            >
              <TypographyUi size="small" weight="bold" color="title">
                1
              </TypographyUi>
              <IconUi name="bx-chevron-down" size={14} color="title" />
            </View>

            <IconUi
              name="bx-trash"
              color="error"
              onPress={handleRemoveShoppingCart}
              style={ShoppingCartCardLayoutStyles.removeIcon}
            />
          </View>
        </View>
      </View>
    </CardUi>
  );
};

export default ShoppingCartCardLayout;

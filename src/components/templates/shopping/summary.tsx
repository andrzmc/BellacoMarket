import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import { ButtonUi } from '@/components/ui/button';
import { ShoppingSummaryTemplateStyles } from '@/styles/components/templates';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import ShoppingConfirmTemplate from './confirm';

export const ShoppingSummaryTemplate: FC = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const marketStore = useSelector((store: RootState) => store.market);

  const subtotal = marketStore.shoppingCart.reduce(
    (acc, item) => acc + (Number(item.amount) || 0),
    0,
  );
  const taxes = subtotal > 0 ? Number((subtotal * 0.06).toFixed(2)) : 0;
  const total = Number((subtotal + taxes).toFixed(2));

  return (
    <>
      <View style={ShoppingSummaryTemplateStyles.container}>
        <CardUi style={ShoppingSummaryTemplateStyles.card}>
          <View style={ShoppingSummaryTemplateStyles.row}>
            <TypographyUi size="subtitle" weight="bold">
              Total:
            </TypographyUi>
            <TypographyUi size="subtitle" weight="bold">
              ${total.toFixed(2)}
            </TypographyUi>
          </View>

          <View style={ShoppingSummaryTemplateStyles.row}>
            <TypographyUi color="subtitle">Subtotal:</TypographyUi>
            <TypographyUi color="subtitle">${subtotal.toFixed(2)}</TypographyUi>
          </View>

          <View style={ShoppingSummaryTemplateStyles.row}>
            <TypographyUi color="subtitle">Taxes:</TypographyUi>
            <TypographyUi color="subtitle">${taxes.toFixed(2)}</TypographyUi>
          </View>
        </CardUi>

        <ButtonUi
          variant="info"
          style={ShoppingSummaryTemplateStyles.checkoutButton}
          onPress={() => setIsConfirming(true)}
          disabled={total <= 0}
        >
          <TypographyUi weight="bold" size="subtitle" color="inverted">
            Confirm your order
          </TypographyUi>
        </ButtonUi>
      </View>

      {isConfirming ? (
        <ShoppingConfirmTemplate onClose={() => setIsConfirming(false)} />
      ) : null}
    </>
  );
};

export default ShoppingSummaryTemplate;

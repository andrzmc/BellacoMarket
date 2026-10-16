import React, { FC, useEffect, useState } from 'react';
import { Modal, View } from 'react-native';
import LoaderUi from '@/components/ui/loader';
import { TypographyUi } from '@/components/ui/typography';
import { IconUi } from '@/components/ui/icon';
import useSkin from '@/services/hooks/useSkin';
import { useDispatch } from 'react-redux';
import { onClearCart } from '@/context/store/reducers/market';
import { ShoppingConfirmTemplateProps } from '@/models/interfaces/templates';
import { ShoppingConfirmTemplateStyles } from '@/styles/components/templates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/models/types/navigation';

export const ShoppingConfirmTemplate: FC<
  ShoppingConfirmTemplateProps
> = props => {
  const { onClose } = props;
  const [status, setStatus] = useState<'processing' | 'success'>('processing');

  const dispatch = useDispatch();
  const { skin } = useSkin();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const processingTimer = setTimeout(() => {
      setStatus('success');
      dispatch(onClearCart());
    }, 3000);

    return () => clearTimeout(processingTimer);
  }, [dispatch]);

  useEffect(() => {
    if (status === 'success') {
      const finishTimer = setTimeout(() => {
        onClose?.();
        navigate('Main');
      }, 2500);

      return () => clearTimeout(finishTimer);
    }
  }, [status, onClose, navigate]);

  const isSuccess = status === 'success';

  return (
    <Modal visible animationType="fade" statusBarTranslucent>
      <View
        style={[
          ShoppingConfirmTemplateStyles.overlay,
          {
            backgroundColor: isSuccess ? skin.success : skin.background,
          },
        ]}
      >
        {!isSuccess ? (
          <LoaderUi
            size="big"
            text="Waiting for the confirmation of your purchase..."
          />
        ) : (
          <View style={ShoppingConfirmTemplateStyles.content}>
            <View style={ShoppingConfirmTemplateStyles.iconContainer}>
              <IconUi name="bx-check-circle" size={80} color="inverted" />
            </View>
            <TypographyUi
              size="title"
              weight="bold"
              color="inverted"
              style={ShoppingConfirmTemplateStyles.title}
            >
              Order confirmated!
            </TypographyUi>
            <TypographyUi
              size="paragraph"
              weight="medium"
              color="inverted"
              style={ShoppingConfirmTemplateStyles.subtitle}
            >
              Your order has been processed successfully
            </TypographyUi>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ShoppingConfirmTemplate;

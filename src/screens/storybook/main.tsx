import ScreenLayout from '@/components/layouts/screen';
import { ButtonUi } from '@/components/ui/button';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import React from 'react';
import { StyleSheet } from 'react-native';

const MainStoryBookScreen = () => {
  return (
    <ScreenLayout header={{ title: 'BellacoMarket UI' }}>
      <CardUi heading="TypographyUi - Tamaños">
        <TypographyUi size="title" weight="bold">
          Title (Bold)
        </TypographyUi>
        <TypographyUi size="subtitle" weight="medium">
          Subtitle (Medium)
        </TypographyUi>
        <TypographyUi size="paragraph">Paragraph (Normal)</TypographyUi>
        <TypographyUi size="small">Small text helper</TypographyUi>
      </CardUi>

      <CardUi heading="TypographyUi - Colores Semánticos">
        <TypographyUi color="normal">Color Normal</TypographyUi>
        <TypographyUi color="info">Color Info</TypographyUi>
        <TypographyUi color="success">Color Success</TypographyUi>
        <TypographyUi color="warning">Color Warning</TypographyUi>
        <TypographyUi color="error">Color Error</TypographyUi>
      </CardUi>

      <CardUi heading="ButtonUi - Variantes de Fondo">
        <ButtonUi text="Variant Normal" variant="normal" />
        <ButtonUi text="Variant Info" variant="info" />
        <ButtonUi text="Variant Success" variant="success" />
        <ButtonUi text="Variant Warning" variant="warning" />
        <ButtonUi text="Variant Error" variant="error" />
      </CardUi>

      <CardUi heading="ButtonUi - Estados y Contenido">
        <ButtonUi text="Botón Deshabilitado" variant="info" disabled />
        <ButtonUi variant="normal" style={styles.customButton}>
          <TypographyUi color="success" weight="bold">
            ★ Botón con Children Personalizado ★
          </TypographyUi>
        </ButtonUi>
      </CardUi>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  customButton: {
    borderWidth: 1,
    borderColor: '#34C759',
  },
});

export default MainStoryBookScreen;

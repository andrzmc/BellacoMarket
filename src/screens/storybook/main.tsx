import ScreenLayout from '@/components/layouts/screen';
import { ButtonUi } from '@/components/ui/button';
import { CardUi } from '@/components/ui/card';
import { TypographyUi } from '@/components/ui/typography';
import useSkin from '@/services/hooks/useSkin';
import React from 'react';

const MainStoryBookScreen = () => {
  const { skin } = useSkin();

  return (
    <ScreenLayout header={{ title: 'BellacoMarket UI' }} scrollable>
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
        <ButtonUi
          variant="inverted"
          style={{ borderWidth: 1, borderColor: skin.info }}
        >
          <TypographyUi color="info" weight="bold">
            ★ Botón con Children Personalizado ★
          </TypographyUi>
        </ButtonUi>
      </CardUi>
    </ScreenLayout>
  );
};

export default MainStoryBookScreen;

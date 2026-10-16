import ScreenLayout from '@/components/layouts/screen';
import { ButtonUi } from '@/components/ui/button';
import { CardUi } from '@/components/ui/card';
import { IconUi } from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import useSkin from '@/services/hooks/useSkin';
import React, { FC } from 'react';
import { Alert } from 'react-native';

const MainStoryBookScreen: FC = () => {
  const { skin } = useSkin();

  return (
    <ScreenLayout header={{ title: 'BellacoMarket UI' }} scrollable>
      <CardUi heading="TypographyUi - Sizes">
        <TypographyUi size="title" weight="bold">
          Title (Bold)
        </TypographyUi>
        <TypographyUi size="subtitle" weight="medium">
          Subtitle (Medium)
        </TypographyUi>
        <TypographyUi size="paragraph">Paragraph (Normal)</TypographyUi>
        <TypographyUi size="small">Small text helper</TypographyUi>
      </CardUi>

      <CardUi heading="TypographyUi - Semantic Colors">
        <TypographyUi color="normal">Color Normal</TypographyUi>
        <TypographyUi color="info">Color Info</TypographyUi>
        <TypographyUi color="success">Color Success</TypographyUi>
        <TypographyUi color="warning">Color Warning</TypographyUi>
        <TypographyUi color="error">Color Error</TypographyUi>
      </CardUi>

      <CardUi heading="ButtonUi - Background Variants">
        <ButtonUi text="Variant Normal" variant="normal" />
        <ButtonUi text="Variant Info" variant="info" />
        <ButtonUi text="Variant Success" variant="success" />
        <ButtonUi text="Variant Warning" variant="warning" />
        <ButtonUi text="Variant Error" variant="error" />
      </CardUi>

      <CardUi heading="ButtonUi - States & Content">
        <ButtonUi text="Disabled Button" variant="info" disabled />
        <ButtonUi
          variant="inverted"
          style={{ borderWidth: 1, borderColor: skin.info }}
        >
          <TypographyUi color="info" weight="bold" size="subtitle">
            ★ Custom Button ★
          </TypographyUi>
        </ButtonUi>
      </CardUi>

      <CardUi heading="IconUi - Variants">
        <IconUi name="bx-heart" />
        <TypographyUi>Basic</TypographyUi>
        <IconUi variant="filled" name="bx-heart" />
        <TypographyUi>Filled</TypographyUi>
        <IconUi variant="brands" name="bx-github" />
        <TypographyUi>Brands</TypographyUi>
      </CardUi>

      <CardUi heading="IconUi - Sizes">
        <IconUi size={24} variant="brands" name="bx-github" />
        <IconUi size={32} variant="brands" name="bx-github" />
        <IconUi size={40} variant="brands" name="bx-github" />
      </CardUi>

      <CardUi heading="IconUi - Colors">
        <IconUi color="normal" variant="brands" name="bx-github" />
        <IconUi color="info" variant="brands" name="bx-github" />
        <IconUi color="success" variant="brands" name="bx-github" />
        <IconUi color="warning" variant="brands" name="bx-github" />
        <IconUi color="error" variant="brands" name="bx-github" />
        <IconUi colorCode="brown" variant="brands" name="bx-github" />
      </CardUi>

      <CardUi heading="IconUi - States">
        <IconUi disabled variant="brands" name="bx-github" />
        <TypographyUi>Disabled</TypographyUi>
        <IconUi
          onPress={() => Alert.alert('Icon pressed')}
          variant="brands"
          name="bx-github"
        />
        <TypographyUi>With Action</TypographyUi>
      </CardUi>
    </ScreenLayout>
  );
};

export default MainStoryBookScreen;


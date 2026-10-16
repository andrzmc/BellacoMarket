import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { IconUi } from '@/components/ui/icon';
import { TypographyUi } from '@/components/ui/typography';
import { CatalogItem } from '@/models/interfaces/templates';
import useSkin from '@/services/hooks/useSkin';
import { MarketCardLayoutStyles } from '@/styles/components/layouts';
import { CardUi } from '@/components/ui/card';
import { ButtonUi } from '@/components/ui/button';

const MarketCardLayout: FC<CatalogItem> = props => {
  const { label, image, amount, tags } = props;
  const { skin } = useSkin();

  return (
    <CardUi style={MarketCardLayoutStyles.container}>
      <View
        style={[
          MarketCardLayoutStyles.cover,
          { backgroundColor: skin.background },
        ]}
      >
        <View style={MarketCardLayoutStyles.favorite}>
          <IconUi name="bx-heart" color="info" />
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

        <ButtonUi variant="inverted" style={[MarketCardLayoutStyles.inCart]}>
          <IconUi name="bx-basket" color="info" />
          <TypographyUi size="paragraph" weight="medium" color="info">
            {`$${amount}`}
          </TypographyUi>
        </ButtonUi>
      </View>
    </CardUi>
  );
};

export default MarketCardLayout;

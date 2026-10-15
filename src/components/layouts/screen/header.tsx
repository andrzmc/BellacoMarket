import { TypographyUi } from '@/components/ui/typography';
import { ScreenLayoutHeaderProps } from '@/models/interfaces/layouts';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const HeaderScreenLayout: FC<ScreenLayoutHeaderProps> = props => {
  const { title, childrenLeft, childrenRight, isHidden } = props;

  return !isHidden || (!childrenLeft && !childrenRight && !title) ? (
    <View style={styles.container}>
      <View>{childrenLeft}</View>
      {title ? (
        <View>
          <TypographyUi weight="bold" size="title">
            {title}
          </TypographyUi>
        </View>
      ) : null}
      <View>{childrenRight}</View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
});

export default HeaderScreenLayout;

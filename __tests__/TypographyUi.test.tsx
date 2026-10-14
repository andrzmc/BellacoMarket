import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { TypographyUi } from '@/components/ui/typography';
import { typographyUiStyles } from '@/styles/components/ui';

describe('TypographyUi', () => {
  it('renders default props correctly', async () => {
    await render(<TypographyUi>Default text</TypographyUi>);

    const element = screen.getByText('Default text');
    expect(element).toBeTruthy();
    expect(element.props.style).toEqual([
      typographyUiStyles.base,
      typographyUiStyles.paragraph,
      typographyUiStyles.weight_normal,
      typographyUiStyles.color_normal,
      undefined,
    ]);
  });

  it('applies custom size, weight, and color variants correctly', async () => {
    await render(
      <TypographyUi size="title" weight="bold" color="info">
        Custom text
      </TypographyUi>,
    );

    const element = screen.getByText('Custom text');
    expect(element.props.style).toEqual([
      typographyUiStyles.base,
      typographyUiStyles.title,
      typographyUiStyles.weight_bold,
      typographyUiStyles.color_info,
      undefined,
    ]);
  });

  it('inherits standard TextProps correctly', async () => {
    await render(
      <TypographyUi
        size="small"
        numberOfLines={1}
        ellipsizeMode="tail"
        testID="custom-text"
      >
        Truncated text
      </TypographyUi>,
    );

    const element = screen.getByTestId('custom-text');
    expect(element.props.numberOfLines).toBe(1);
    expect(element.props.ellipsizeMode).toBe('tail');
  });

  it('merges custom style correctly', async () => {
    const customStyle = { marginTop: 10 };
    await render(
      <TypographyUi style={customStyle}>Styled text</TypographyUi>,
    );

    const element = screen.getByText('Styled text');
    expect(element.props.style).toEqual([
      typographyUiStyles.base,
      typographyUiStyles.paragraph,
      typographyUiStyles.weight_normal,
      typographyUiStyles.color_normal,
      customStyle,
    ]);
  });
});

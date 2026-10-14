import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { CardUi } from '@/components/ui/card';
import { CardUiStyles } from '@/styles/components/ui';

describe('CardUi', () => {
  it('renders correctly with children and default props', async () => {
    await render(
      <CardUi testID="card">
        <Text>Card Content</Text>
      </CardUi>,
    );

    expect(screen.getByText('Card Content')).toBeTruthy();
    const card = screen.getByTestId('card');
    expect(card.props.style).toEqual([
      CardUiStyles.container,
      CardUiStyles.shape_rounded,
      false,
      {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
      },
      undefined,
    ]);
  });

  it('renders heading and subheading correctly', async () => {
    await render(
      <CardUi
        heading="Main Heading"
        subheading="Secondary Subheading"
      >
        <Text>Body Content</Text>
      </CardUi>,
    );

    expect(screen.getByText('Main Heading')).toBeTruthy();
    expect(screen.getByText('Secondary Subheading')).toBeTruthy();
    expect(screen.getByText('Body Content')).toBeTruthy();
  });

  it('renders header and footer slots when provided', async () => {
    await render(
      <CardUi
        header={<Text testID="card-header">Header Slot</Text>}
        footer={<Text testID="card-footer">Footer Slot</Text>}
      >
        <Text>Body Content</Text>
      </CardUi>,
    );

    expect(screen.getByTestId('card-header')).toBeTruthy();
    expect(screen.getByText('Header Slot')).toBeTruthy();
    expect(screen.getByTestId('card-footer')).toBeTruthy();
    expect(screen.getByText('Footer Slot')).toBeTruthy();
  });

  it('applies flat shape and custom padding correctly', async () => {
    const customPadding = { top: 12, right: 16, bottom: 12, left: 16 };
    await render(
      <CardUi
        shape="flat"
        padding={customPadding}
        testID="card"
      >
        <Text>Flat Card</Text>
      </CardUi>,
    );

    const card = screen.getByTestId('card');
    expect(card.props.style).toEqual([
      CardUiStyles.container,
      CardUiStyles.shape_flat,
      false,
      {
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12,
        paddingLeft: 16,
      },
      undefined,
    ]);
  });

  it('handles onPress interaction when pressable', async () => {
    const onPressMock = jest.fn();
    await render(
      <CardUi onPress={onPressMock} testID="card">
        <Text>Pressable Card</Text>
      </CardUi>,
    );

    const card = screen.getByTestId('card');
    fireEvent.press(card);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state on non-pressable card', async () => {
    await render(
      <CardUi
        disabled
        testID="card"
      >
        <Text>Disabled Card</Text>
      </CardUi>,
    );

    const card = screen.getByTestId('card');
    expect(card.props.pointerEvents).toBe('none');
    expect(card.props.style).toEqual([
      CardUiStyles.container,
      CardUiStyles.shape_rounded,
      CardUiStyles.disabled,
      {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
      },
      undefined,
    ]);
  });

  it('handles disabled state on pressable card and prevents press events', async () => {
    const onPressMock = jest.fn();
    await render(
      <CardUi
        disabled
        onPress={onPressMock}
        testID="card"
      >
        <Text>Disabled Pressable Card</Text>
      </CardUi>,
    );

    const card = screen.getByTestId('card');
    expect(card.props.accessibilityState.disabled).toBe(true);
    expect(card.props.style).toMatchObject({
      opacity: CardUiStyles.disabled.opacity,
    });

    fireEvent.press(card);
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('merges custom style correctly', async () => {
    const customStyle = { marginHorizontal: 16 };
    await render(
      <CardUi style={customStyle} testID="card">
        <Text>Styled Card</Text>
      </CardUi>,
    );

    const card = screen.getByTestId('card');
    expect(card.props.style).toEqual([
      CardUiStyles.container,
      CardUiStyles.shape_rounded,
      false,
      {
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
      },
      customStyle,
    ]);
  });
});

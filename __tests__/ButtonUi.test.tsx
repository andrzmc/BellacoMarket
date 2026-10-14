import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { ButtonUi } from '@/components/ui/button';
import { buttonUiStyles } from '@/styles/components/ui';

describe('ButtonUi', () => {
  it('renders correctly with text prop', async () => {
    await render(<ButtonUi text="Press me" testID="button" />);

    expect(screen.getByText('Press me')).toBeTruthy();
    const button = screen.getByTestId('button');
    expect(button.props.style).toMatchObject({
      backgroundColor: buttonUiStyles.variant_normal.backgroundColor,
      opacity: 1,
    });
  });

  it('renders correctly with children', async () => {
    await render(
      <ButtonUi testID="button">
        <Text testID="child-text">Child content</Text>
      </ButtonUi>,
    );

    expect(screen.getByTestId('child-text')).toBeTruthy();
    expect(screen.getByText('Child content')).toBeTruthy();
  });

  it('applies semantic variants correctly', async () => {
    await render(<ButtonUi text="Success" variant="success" testID="button" />);

    const button = screen.getByTestId('button');
    expect(button.props.style).toMatchObject({
      backgroundColor: buttonUiStyles.variant_success.backgroundColor,
      opacity: 1,
    });
  });

  it('handles disabled state with opacity 0.5 and prevents onPress', async () => {
    const onPressMock = jest.fn();
    await render(
      <ButtonUi
        text="Disabled"
        disabled
        onPress={onPressMock}
        testID="button"
      />,
    );

    const button = screen.getByTestId('button');
    expect(button.props.accessibilityState.disabled).toBe(true);
    expect(button.props.style).toMatchObject({
      opacity: buttonUiStyles.disabled.opacity,
    });

    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('fires onPress callback when clicked and enabled', async () => {
    const onPressMock = jest.fn();
    await render(
      <ButtonUi text="Enabled" onPress={onPressMock} testID="button" />,
    );

    const button = screen.getByTestId('button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('merges custom styles correctly', async () => {
    const customStyle = { marginHorizontal: 16 };
    await render(
      <ButtonUi text="Styled" style={customStyle} testID="button" />,
    );

    const button = screen.getByTestId('button');
    expect(button.props.style).toMatchObject({
      marginHorizontal: 16,
      backgroundColor: buttonUiStyles.variant_normal.backgroundColor,
    });
  });
});

import { SkinContext } from '@/context/providers/skin/skin.context';
import {
  onChangeAppearance,
  onChangeSkinName,
} from '@/context/store/reducers/settings';
import { SKIN_OPTIONS } from '@/styles/skins';
import { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';

const useSkin = () => {
  const { skin, skinName, appearance, isDarkMode } = useContext(SkinContext);

  const dispatch = useDispatch();

  const onChangeSkin = (value: string) => {
    const data = value in SKIN_OPTIONS;
    dispatch(onChangeSkinName(data ? value : 'default'));
  };

  const onChangeSkinAppearance = (value: ColorSchemeName | null) => {
    dispatch(onChangeAppearance(value));
  };

  return {
    skin,
    skinName,
    appearance,
    isDarkMode,
    onChangeSkin,
    onChangeSkinAppearance,
  };
};

export default useSkin;

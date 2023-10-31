import * as Font from 'expo-font';
import Nunito_Black from '../assets/fonts/nuhito/Nunito_Black.ttf';
import Nunito_BlackItalic from '../assets/fonts/nuhito/Nunito-BlackItalic.ttf';
import Nunito_Bold from '../assets/fonts/nuhito/Nunito-Bold.ttf';
import Nunito_BoldItalic from '../assets/fonts/nuhito/Nunito-BoldItalic.ttf';
import Nunito_ExtraBold from '../assets/fonts/nuhito/Nunito-ExtraBold.ttf';
import Nunito_ExtraBoldItalic from '../assets/fonts/nuhito/Nunito-ExtraBoldItalic.ttf';
import Nunito_ExtraLight from '../assets/fonts/nuhito/Nunito-ExtraLight.ttf';
import Nunito_ExtraLightItalic from '../assets/fonts/nuhito/Nunito-ExtraLightItalic.ttf';
import Nunito_Italic from '../assets/fonts/nuhito/Nunito-Italic.ttf';
import Nunito_Italic_VariableFont_wght from '../assets/fonts/nuhito/Nunito-Italic-VariableFont_wght.ttf';
import Nunito_Light from '../assets/fonts/nuhito/Nunito-Light.ttf';
import Nunito_LightItalic from '../assets/fonts/nuhito/Nunito-LightItalic.ttf';
import Nunito_Medium from '../assets/fonts/nuhito/Nunito-Medium.ttf';
import Nunito_MediumItalic from '../assets/fonts/nuhito/Nunito-MediumItalic.ttf';
import Nunito_Regular from '../assets/fonts/nuhito/Nunito-Regular.ttf';
import Nunito_SemiBold from '../assets/fonts/nuhito/Nunito-SemiBold.ttf';
import Nunito_SemiBoldItalic from '../assets/fonts/nuhito/Nunito-SemiBoldItalic.ttf';
import Nunito_VariableFont_wght from '../assets/fonts/nuhito/Nunito-VariableFont_wght.ttf';
import { useState } from 'react';
const loadCustomFont = async () => {
  await Font.loadAsync({
    Nunito_Black: {
      uri: Nunito_Black,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_BlackItalic: {
      uri: Nunito_BlackItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_Bold: {
      uri: Nunito_Bold,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_BoldItalic: {
      uri: Nunito_BoldItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_ExtraBold: {
      uri: Nunito_ExtraBold,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_ExtraBoldItalic: {
      uri: Nunito_ExtraBoldItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_ExtraLight: {
      uri: Nunito_ExtraLight,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_ExtraLightItalic: {
      uri: Nunito_ExtraLightItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_Italic: {
      uri: Nunito_Italic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_Italic_VariableFont_wght: {
      uri: Nunito_Italic_VariableFont_wght,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_Light: {
      uri: Nunito_Light,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_LightItalic: {
      uri: Nunito_LightItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_Medium: {
      uri: Nunito_Medium,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_MediumItalic: {
      uri: Nunito_MediumItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_Regular: {
      uri: Nunito_Regular,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_SemiBold: {
      uri: Nunito_SemiBold,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_SemiBoldItalic: {
      uri: Nunito_SemiBoldItalic,
      fontDisplay: Font.FontDisplay.SWAP,
    },
    Nunito_VariableFont_wght: {
      uri: Nunito_VariableFont_wght,
      fontDisplay: Font.FontDisplay.SWAP,
    },
  });
};
export default loadCustomFont;

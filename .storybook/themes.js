import { create } from '@storybook/theming';
import { homepage } from '../package.json';

export const brand = create({
  base: 'light',
  brandTitle: 'gedankenessen design',
  brandUrl: homepage,
  brandImage: 'https://user-images.githubusercontent.com/24259317/202914418-3b26049a-a146-4085-8601-2dfd8a852ef9.png',
  brandTarget: '_self',

  colorPrimary: '#D9A621',
  colorSecondary: '#D9A621',

  appBg: 'white',
  appContentBg: 'white',
  appBorderRadius: '0px',
  inputBorderRadius: '0px',
  inputBorder: '#D9A621',
})


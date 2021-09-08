import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };

    backgroundColor: {
      main: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  color: {
    main: '#2A9D8F',
    secondary: '#FFF',
    tertiary: '#E76F51',
    quaternary: '#1E7167',
  },
  backgroundColor: {
    main: '#E9C46A',
    secondary: '#264653',
    tertiary: '#F4A261',
    quaternary: '#264653',
  },
};

export default defaultTheme;

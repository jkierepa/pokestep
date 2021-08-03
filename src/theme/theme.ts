import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string;
      secondary: string;
    };

    backgroundColor: {
      main: string;
      secondary: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  color: {
    main: '#895130',
    secondary: '#b2d2e4',
  },
  backgroundColor: {
    main: '#92d152',
    secondary: '#252a3a',
  },
};

export default defaultTheme;

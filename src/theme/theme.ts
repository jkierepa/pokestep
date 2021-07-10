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
    main: '#b9855b',
    secondary: '#b6c6ce',
  },
  backgroundColor: {
    main: '#b5c5ce',
    secondary: '#252a3a',
  },
};

export default defaultTheme;

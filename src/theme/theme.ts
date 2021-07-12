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
    main: '#e9a57b',
    secondary: '#d5e5ee',
  },
  backgroundColor: {
    main: '#d5e5ee',
    secondary: '#252a3a',
  },
};

export default defaultTheme;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgHeader: string;
      bgPrimary: string;
      bgSecondary: string;
      action: string;
      textPrimary: string;
      textSecondary: string;
    };
    size: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}

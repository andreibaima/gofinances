//arquivo para sobreescrerver tipo
// nesse caso vamos sobrescrever o tema do estyledcomponent como nosso tema

// typeof => copia os tipos de um objeto
import  'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme
    
    export interface DefaultTheme extends ThemeType {}
}
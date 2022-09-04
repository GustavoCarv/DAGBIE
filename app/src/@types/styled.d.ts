import { baseTheme } from '../style/baseTheme'

type Theme = typeof baseTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

import { baseTheme } from '../style/baseTheme'

type Theme = typeof baseTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

import { ThemeProvider } from 'styled-components'
import { baseTheme } from './baseTheme'

type ThemeProps = {
  children: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
)

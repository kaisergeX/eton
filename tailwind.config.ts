import type {Config} from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'
import type {PluginCreator} from 'tailwindcss/types/config'
// import defaultTheme from 'tailwindcss/defaultTheme'

const customPlugin: PluginCreator = ({addComponents}) => {
  addComponents({
    '.flex-center-between': {
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
    },
    '.flex-center': {'@apply flex items-center justify-center': {}},
  })
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontFamily: {
    //   sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [typographyPlugin, customPlugin],
}
export default config

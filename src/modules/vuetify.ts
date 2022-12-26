import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme: {
          dark: false,
          colors: {
            'primary': '#FF2122',
            'secondary': '#32323E',
            'page-header-background': '#d7d7ce',
            'page-background': '#cdcdc1',
            'table-header': '#cdcdc1',
            'background': '#FFFFFF',
            'header-background': '#b5b5a6',
            'info-text': '#666660',
          },
        },
        darkTheme: {
          dark: true,
          colors: {
            'primary': '#F89393',
            'secondary': '#32323E',
            'page-header-background': '#282831',
            'page-background': '#32323E',
            'table-header': '#2e2e2e',
            'background': '#000000',
            'header-background': '#4a4a59',
            'info-text': '#99999F',
          },
        },
      },
    },
  })
  app.use(vuetify)
}
export default install

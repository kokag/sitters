import { Vue } from 'vue/types/vue'
import { I18nMessage } from '../i18n/I18nMessage'

declare module 'vue/types/vue' {


  interface Vue {
    $style: { [key: string]: string }
    $tr: (key: I18nMessage, ...args:any[]) => string

    mounted (): void | Promise<void>

    created (): void | Promise<void>

    beforeDestroy (): void | Promise<void>
  }
}

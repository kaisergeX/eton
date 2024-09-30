import {getLocale} from '@/app/actions'
import LocaleButton from './button/locale-button'

export default async function LocaleSwitcher() {
  const locale = await getLocale()
  return <LocaleButton currentLocale={locale}>{locale}</LocaleButton>
}

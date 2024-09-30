import {useTranslations} from 'next-intl'
import {LocaleSwitcher} from '@/components'
import Navbar from '@/components/navbar'

export default function Home() {
  const t = useTranslations('homepage')

  return (
    <>
      <Navbar localeSwitcher={<LocaleSwitcher />} />
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <p>
          {t('title')}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit cum
          autem ipsam quos excepturi, consectetur, asperiores ratione ipsum
          distinctio maxime? Corporis, ex? Molestiae suscipit, dolor enim
          inventore autem eos? Officia incidunt vero sapiente necessitatibus
          voluptate. Nesciunt sed delectus provident maiores laborum, error
          doloremque facere fugit unde aut consequuntur. Laborum quod sunt saepe
          aut veritatis est eaque. Eligendi, quis laudantium!
        </p>
        <ol className="list-inside list-decimal text-center font-geistMono text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/50 px-1 py-0.5 font-semibold dark:bg-white/60">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </>
  )
}

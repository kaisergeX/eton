import {useTranslations} from 'next-intl'
import {CLIWindow, LocaleSwitcher} from '@/components'
import Navbar from '@/components/navbar'

export default function Home() {
  const t = useTranslations('homepage')

  return (
    <main>
      <Navbar localeSwitcher={<LocaleSwitcher />} />
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

      <div className="container mx-auto h-[50dvh] py-4">
        <CLIWindow />
      </div>
    </main>
  )
}

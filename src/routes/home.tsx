import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Space Burguer"
        content="Faça seu pedido e descubra o melhor sabor das galáxias.Ultrapasse Universos com Nosso Sabor"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}

import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhull <strong>Jhonattan Ferri</strong>, sua{' '}
        <strong>Camiseta Qualquer</strong> Ja esta a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catalago</Link>
    </SuccessContainer>
  )
}

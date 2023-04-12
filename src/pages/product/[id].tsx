import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          deleniti, voluptatum necessitatibus fugiat quia, non consectetur
          repellendus pariatur placeat totam vel cum iure laborum ipsum
          quibusdam inventore beatae sed tempore.
        </span>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

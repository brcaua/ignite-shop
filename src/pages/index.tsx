import Image from "next/image";
import { HomeContainer, Product, Title } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import Head from "next/head";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    currency: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title> Footbal Shop </title>
      </Head>
      <Title>Welcome to Argentinian Team Store</Title>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false} // used to blocking prefetching of our product data when one product is been hover
              className="keen-slider__slide"
            >
              <Image
                src={product.imageUrl}
                alt="Camiseta"
                width={520}
                height={480}
              />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

// --- SSG ---
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: String(price.currency),
      }).format(Number(price.unit_amount) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2h to rebuild our page if any data change
  };
};

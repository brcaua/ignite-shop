import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  Loading,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  if (isFallback) return <Loading>Loading...</Loading>;

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkoutSession", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      // if we want to redirect to a internal page, we use:
      // router.push('/checkout')

      window.location.href = checkoutUrl;
    } catch (error) {
      // Connect to an observability tool like Datadog or Sentry
      alert("Falha ao direionar ao checkout");
    } finally {
      setIsCreatingCheckoutSession(false);
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} - Footbal Shop </title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product?.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product?.name}</h1>
          <span>{product?.price}</span>
          <p>{product?.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

// always that we use Static pages and we have params like ID, we need passe this function to understand where is this param
// unfortunelly, its very complicated to work with this, but is recommended to passing anything as path and set Fallbalck as true because we can working with this loading
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const productId = params?.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: String(price.currency),
        }).format(Number(price.unit_amount) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};

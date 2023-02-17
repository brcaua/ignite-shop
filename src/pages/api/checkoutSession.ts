import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { priceId } = request.body;

  if (!priceId) {
    return response.status(400).json({
      error: "Please provide a price ID",
    });
  }

  if (request.method !== "POST") {
    return response.status(405).json({
      error: "Method not allowed",
    });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: "http://localhost:3000/",
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}

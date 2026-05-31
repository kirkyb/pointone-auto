import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { price, listingId } = await request.json();
  const fee = Math.min(price * 0.001, 100);
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'gbp',
        product_data: { name: 'PointOne Listing Fee' },
        unit_amount: Math.round(fee * 100),
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}&listingId=${listingId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/sell`,
  });

  return Response.json({ url: session.url });
}
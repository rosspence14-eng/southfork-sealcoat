import Stripe from 'stripe';

export const runtime = 'nodejs';

type RequestBody = {
  customerName?: string;
  jobAddress?: string;
  invoiceNumber?: string;
  amount?: number;
};

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return Response.json(
      {
        error: 'Set STRIPE_SECRET_KEY to enable live payment intent creation.'
      },
      { status: 501 }
    );
  }

  const body = (await request.json()) as RequestBody;
  const amount = Number(body.amount);

  if (!body.customerName?.trim() || !body.jobAddress?.trim() || !Number.isFinite(amount) || amount <= 0) {
    return Response.json(
      {
        error: 'Customer name, job address, and a positive payment amount are required.'
      },
      { status: 400 }
    );
  }

  const stripe = new Stripe(secretKey);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true
    },
    metadata: {
      customer_name: body.customerName,
      job_address: body.jobAddress,
      invoice_number: body.invoiceNumber || ''
    }
  });

  return Response.json({
    clientSecret: paymentIntent.client_secret,
    amount: paymentIntent.amount,
    paymentIntentId: paymentIntent.id
  });
}

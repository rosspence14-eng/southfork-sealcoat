"use client";

import { useMemo, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/button';

type PaymentIntentResponse =
  | {
      clientSecret: string;
      amount: number;
      paymentIntentId: string;
    }
  | {
      error: string;
    };

const cardElementOptions = {
  style: {
    base: {
      color: '#ffffff',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '16px',
      '::placeholder': {
        color: 'rgba(255, 255, 255, 0.35)'
      }
    },
    invalid: {
      color: '#ff8c00'
    }
  },
  hidePostalCode: true
} as const;

export function StripePaymentForm() {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  const stripePromise = useMemo(() => {
    if (!publishableKey) {
      return null;
    }

    return loadStripe(publishableKey);
  }, [publishableKey]);

  if (!stripePromise) {
    return (
      <section className="card-surface rounded-[1.75rem] p-8">
        <p className="eyebrow text-xs font-semibold text-gold/80">Stripe setup</p>
        <h2 className="mt-3 heading-font text-2xl font-bold text-white">Add your Stripe keys to activate payments</h2>
        <div className="mt-5 grid gap-3 text-sm text-white/72">
          {[
            'Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your environment.',
            'Set STRIPE_SECRET_KEY for the payment intent API route.',
            'Use Stripe test keys first, then swap to live keys at launch.'
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-black/20 px-4 py-3">
              {item}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <Elements
      options={{
        appearance: {
          theme: 'night',
          variables: {
            colorPrimary: '#ffd700',
            colorText: '#ffffff',
            colorBackground: '#111111',
            colorDanger: '#ff8c00',
            fontFamily: 'Open Sans, sans-serif',
            borderRadius: '16px'
          }
        }
      }}
      stripe={stripePromise}
    >
      <StripePaymentFormInner />
    </Elements>
  );
}

function StripePaymentFormInner() {
  const stripe = useStripe();
  const elements = useElements();
  const [customerName, setCustomerName] = useState('');
  const [jobAddress, setJobAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="card-surface rounded-[1.75rem] p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setStatusMessage('');

        if (!stripe || !elements) {
          setErrorMessage('Stripe has not finished loading yet.');
          return;
        }

        const numericAmount = Number(amount);
        if (!customerName.trim() || !jobAddress.trim() || !Number.isFinite(numericAmount) || numericAmount <= 0) {
          setErrorMessage('Enter a customer name, job address, and a valid payment amount.');
          return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          setErrorMessage('Card input is not available. Refresh the page and try again.');
          return;
        }

        setIsSubmitting(true);

        try {
          const response = await fetch('/api/stripe/payment-intent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              customerName,
              jobAddress,
              invoiceNumber,
              amount: numericAmount
            })
          });

          const data = (await response.json()) as PaymentIntentResponse;

          if (!response.ok || !('clientSecret' in data)) {
            setErrorMessage('error' in data ? data.error : 'Unable to start the Stripe payment.');
            return;
          }

          const confirmation = await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: customerName
              }
            }
          });

          if (confirmation.error) {
            setErrorMessage(confirmation.error.message || 'Payment could not be completed.');
            return;
          }

          if (confirmation.paymentIntent?.status === 'succeeded') {
            setStatusMessage(`Payment complete. Stripe payment intent ${confirmation.paymentIntent.id} is marked as succeeded.`);
            setCustomerName('');
            setJobAddress('');
            setInvoiceNumber('');
            setAmount('');
            cardElement.clear();
          } else {
            setStatusMessage('Payment was created, but Stripe returned a non-final status. Check the dashboard or logs.');
          }
        } catch (error) {
          setErrorMessage(error instanceof Error ? error.message : 'Unexpected payment error.');
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/75">
          Customer name
          <input
            className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40"
            placeholder="Customer name"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-white/75">
          Job address
          <input
            className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40"
            placeholder="Job address"
            value={jobAddress}
            onChange={(event) => setJobAddress(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-white/75">
          Invoice number
          <input
            className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40"
            placeholder="Optional invoice number"
            value={invoiceNumber}
            onChange={(event) => setInvoiceNumber(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-white/75">
          Payment amount
          <input
            className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40"
            inputMode="decimal"
            min="0"
            placeholder="Amount in dollars"
            step="0.01"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-white/75 md:col-span-2">
          Card details
          <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
            <CardElement options={cardElementOptions} />
          </div>
        </label>
      </div>

      {errorMessage ? (
        <div className="mt-5 rounded-2xl border border-orange-400/20 bg-orange-400/10 px-4 py-3 text-sm text-white/80">{errorMessage}</div>
      ) : null}

      {statusMessage ? (
        <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-white/80">{statusMessage}</div>
      ) : null}

      <div className="mt-6">
        <Button type="submit">{isSubmitting ? 'Processing...' : 'Pay Now'}</Button>
      </div>
    </form>
  );
}

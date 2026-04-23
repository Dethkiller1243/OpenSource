import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import { ArrowLeft, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { usePaywall } from '@/contexts/PaywallContext';

/**
 * Payment/Checkout Page
 * Handles payment processing and premium access activation
 */

export default function Payment() {
  const [location] = useLocation();
  const { setPremium } = usePaywall();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const params = new URLSearchParams(location.split('?')[1]);
  const service = params.get('service') || 'youtube-growth';
  const amount = params.get('amount') || '20';

  const serviceNames: Record<string, string> = {
    'youtube-growth': 'YouTube Growth Accelerator',
    'ai-training': 'Custom AI Model Training',
    'music-generator': 'Premium Music Generator',
    'video-upscaler': 'Video Upscaling Suite',
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setPremium(true);
      setPaymentComplete(true);
      localStorage.setItem(`service_${service}`, 'active');
      setIsProcessing(false);
    }, 2000);
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Payment Successful!
            </h1>
            <p className="text-muted-foreground mb-2">
              Your premium access to {serviceNames[service]} is now active.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Check your email for setup instructions and your dashboard login.
            </p>
            <Link href="/">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container py-6">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </a>
          </Link>
        </div>
      </nav>

      {/* Checkout Section */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>
            Checkout
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start pb-6 border-b border-border">
                    <div>
                      <p className="font-bold">{serviceNames[service]}</p>
                      <p className="text-sm text-muted-foreground">One-time payment</p>
                    </div>
                    <p className="text-2xl font-bold text-accent">£{amount}</p>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-bold mb-2">What's Included:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Full access to premium features</li>
                      <li>• 24/7 priority support</li>
                      <li>• 30-day money-back guarantee</li>
                      <li>• Real-time analytics dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4">
                    <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Your payment is secure and encrypted. We never store your full card details.
                    </p>
                  </div>

                  <Button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base"
                  >
                    {isProcessing ? 'Processing...' : `Pay £${amount}`}
                  </Button>
                </div>
              </div>
            </div>

            {/* Price Summary Sidebar */}
            <div>
              <div className="sticky top-8 bg-card border border-border rounded-lg p-8">
                <h3 className="font-bold mb-6">Total</h3>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Service</p>
                  <p className="text-sm font-bold mb-4">£{amount}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
                    <p className="text-3xl font-bold text-accent">£{amount}</p>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

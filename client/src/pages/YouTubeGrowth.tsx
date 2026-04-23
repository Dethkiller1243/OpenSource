import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { usePaywall } from '@/contexts/PaywallContext';

/**
 * YouTube Growth Accelerator Service Page
 * Premium service offering guaranteed 1M views in 30 days
 * Dark Luxury Minimalism design with gold accents
 */

export default function YouTubeGrowth() {
  const { isPremium, initiatePayment } = usePaywall();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const features = [
    'Guaranteed 1 million views in 30 days',
    'Advanced algorithmic promotion',
    'Organic engagement boost',
    'Real viewer analytics dashboard',
    'Priority support 24/7',
    'Money-back guarantee',
  ];

  const handlePayment = () => {
    initiatePayment('youtube-growth', 20);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container py-6 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </a>
          </Link>
          <div className="text-xl font-bold" style={{ fontFamily: 'Playfair Display' }}>
            YouTube Growth
          </div>
          <div className="w-16" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            YouTube Growth Accelerator
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your YouTube channel with guaranteed 1 million views in just 30 days. Our proprietary algorithm targets your ideal audience and delivers organic, sustainable growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Features */}
        <div className="md:col-span-2">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-accent mb-2">Step 1: Subscribe</h3>
                <p className="text-muted-foreground">
                  Sign up for the YouTube Growth Accelerator and connect your channel. We'll analyze your content and audience.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-accent mb-2">Step 2: Optimization</h3>
                <p className="text-muted-foreground">
                  Our AI optimizes your titles, descriptions, and tags for maximum reach. We target trending topics in your niche.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-accent mb-2">Step 3: Promotion</h3>
                <p className="text-muted-foreground">
                  We deploy our network of organic promotion channels to drive real views from engaged viewers.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-accent mb-2">Step 4: Results</h3>
                <p className="text-muted-foreground">
                  Watch your views climb. Track progress in real-time with our advanced analytics dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Pricing Card */}
        <div className="md:col-span-1">
          <div className="sticky top-8 bg-card border border-border rounded-lg p-8">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">One-time payment</p>
              <div className="text-5xl font-bold text-accent mb-2">£20</div>
              <p className="text-sm text-muted-foreground">Guaranteed 1M views in 30 days</p>
            </div>

            {isPremium ? (
              <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6">
                <p className="text-sm font-bold text-accent">✓ Premium Access Active</p>
              </div>
            ) : null}

            <Button
              onClick={handlePayment}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base mb-4"
            >
              Get Started Now
            </Button>

            <div className="bg-secondary/50 rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                30-day money-back guarantee. No questions asked if you don't see results.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-bold mb-4 text-sm">Included:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Real organic views</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Engagement boost</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Analytics dashboard</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>24/7 support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20 border-t border-border">
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alex Chen',
              channel: 'Tech Reviews',
              quote: 'Went from 50K to 1M views in 30 days. Absolutely game-changing.',
            },
            {
              name: 'Sarah Mitchell',
              channel: 'Lifestyle & Vlogs',
              quote: 'The organic growth is real. My engagement rate actually improved.',
            },
            {
              name: 'Marcus Johnson',
              channel: 'Gaming Content',
              quote: 'Best investment I made for my channel. Highly recommend.',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.channel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-20 border-t border-border text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
          Ready to grow your channel?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of creators who've already transformed their YouTube presence.
        </p>
        <Button
          onClick={handlePayment}
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base"
        >
          Start Growing Today
        </Button>
      </section>
    </div>
  );
}

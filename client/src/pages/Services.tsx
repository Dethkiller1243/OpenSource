import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Zap, Music, Film, TrendingUp, Sparkles } from 'lucide-react';

/**
 * Services Listing Page
 * Showcase all premium services available
 */

export default function Services() {
  const services = [
    {
      id: 'youtube-growth',
      title: 'YouTube Growth Accelerator',
      description: 'Guaranteed 1 million views in 30 days or your money back. Our proprietary algorithm targets your ideal audience and delivers organic, sustainable growth.',
      price: 20,
      icon: TrendingUp,
      href: '/services/youtube-growth',
      badge: 'Most Popular',
    },
    {
      id: 'ai-training',
      title: 'Custom AI Model Training',
      description: 'Fine-tune our proprietary models for your specific use case. Get a custom AI model trained on your data in just 48 hours.',
      price: 49,
      icon: Sparkles,
      href: '/services/ai-training',
    },
    {
      id: 'music-generator',
      title: 'Premium Music Generator',
      description: 'Generate royalty-free music with advanced AI algorithms. Create unlimited tracks for your content, monetized and ready to use.',
      price: 15,
      icon: Music,
      href: '/services/music-generator',
    },
    {
      id: 'video-upscaler',
      title: 'Video Upscaling Suite',
      description: 'Transform standard videos into 4K quality instantly. Enhance old footage with AI-powered upscaling and restoration.',
      price: 35,
      icon: Film,
      href: '/services/video-upscaler',
    },
    {
      id: 'api-access',
      title: 'API Access',
      description: 'Integrate all our services directly into your applications. Unlimited API calls with priority support and custom rate limits.',
      price: 99,
      icon: Zap,
      href: '/services/api-access',
      badge: 'Enterprise',
    },
  ];

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

      {/* Header */}
      <section className="container py-20">
        <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
          All Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Explore our complete suite of premium AI and digital services. Each service is designed to deliver real, measurable results.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} href={service.href}>
                <a className="group h-full">
                  <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <Icon className="w-12 h-12 text-accent" />
                      {service.badge && (
                        <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-border">
                      <span className="text-3xl font-bold text-accent">£{service.price}</span>
                      <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container py-20 border-t border-border">
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>
          Feature Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-bold">Feature</th>
                <th className="text-center py-4 px-4 font-bold">YouTube</th>
                <th className="text-center py-4 px-4 font-bold">AI Training</th>
                <th className="text-center py-4 px-4 font-bold">Music Gen</th>
                <th className="text-center py-4 px-4 font-bold">Upscaler</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Real-time Analytics', youtube: true, ai: true, music: true, upscaler: true },
                { feature: '24/7 Support', youtube: true, ai: true, music: true, upscaler: true },
                { feature: 'Money-back Guarantee', youtube: true, ai: true, music: true, upscaler: true },
                { feature: 'API Access', youtube: false, ai: true, music: true, upscaler: false },
                { feature: 'Custom Training', youtube: false, ai: true, music: false, upscaler: false },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                  <td className="py-4 px-4 font-bold">{row.feature}</td>
                  <td className="text-center py-4 px-4">{row.youtube ? '✓' : '—'}</td>
                  <td className="text-center py-4 px-4">{row.ai ? '✓' : '—'}</td>
                  <td className="text-center py-4 px-4">{row.music ? '✓' : '—'}</td>
                  <td className="text-center py-4 px-4">{row.upscaler ? '✓' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20 border-t border-border">
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: 'How long does it take to see results?',
              a: 'Most services show results within 24-48 hours. YouTube Growth Accelerator guarantees 1M views within 30 days.',
            },
            {
              q: 'What if I\'m not satisfied?',
              a: 'We offer a 30-day money-back guarantee on all services. No questions asked if you don\'t see the promised results.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes, you can cancel your subscription at any time. One-time purchases are non-refundable after 30 days.',
            },
            {
              q: 'Is my data secure?',
              a: 'All data is encrypted and stored securely. We never share your information with third parties.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 border-t border-border text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose a service above and unlock premium features today.
        </p>
      </section>
    </div>
  );
}

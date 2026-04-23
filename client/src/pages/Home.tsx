import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Zap, Music, Film, TrendingUp } from 'lucide-react';

/**
 * Home Page - Dark Luxury Minimalism Design
 * Premium portal showcasing exclusive AI and digital services
 * Color scheme: Deep charcoal (#0F0F0F) with brushed gold (#D4AF37) accents
 */

export default function Home() {
  const services = [
    {
      id: 'youtube-growth',
      title: 'YouTube Growth Accelerator',
      description: 'Guaranteed 1 million views in 30 days or your money back.',
      price: 20,
      icon: TrendingUp,
      href: '/services/youtube-growth',
    },
    {
      id: 'ai-training',
      title: 'Custom AI Model Training',
      description: 'Fine-tune our proprietary models for your specific use case.',
      price: 49,
      icon: Zap,
      href: '/services/ai-training',
    },
    {
      id: 'music-generator',
      title: 'Premium Music Generator',
      description: 'Generate royalty-free music with advanced AI algorithms.',
      price: 15,
      icon: Music,
      href: '/services/music-generator',
    },
    {
      id: 'video-upscaler',
      title: 'Video Upscaling Suite',
      description: 'Transform standard videos into 4K quality instantly.',
      price: 35,
      icon: Film,
      href: '/services/video-upscaler',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container py-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display' }}>
            OpenSource
          </div>
          <Link href="/about">
            <a className="text-sm text-muted-foreground hover:text-accent transition-colors">About</a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            Premium Digital Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Unlock exclusive access to our most advanced AI tools and digital services. Elevate your content, grow your audience, and transform your digital presence.
          </p>
          <div className="flex gap-4">
            <Link href="/services">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base">
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" className="px-8 py-6 text-base border-accent text-accent hover:bg-accent/5">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Services Grid */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold mb-16" style={{ fontFamily: 'Playfair Display' }}>
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} href={service.href}>
                <a className="group">
                  <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 cursor-pointer h-full">
                    <Icon className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex justify-between items-center">
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

      {/* CTA Section */}
      <section className="container py-20 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Ready to upgrade?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of creators and businesses using our premium services to scale their success.
          </p>
          <Link href="/services">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><a className="hover:text-accent transition-colors">About</a></Link></li>
                <li><Link href="/blog"><a className="hover:text-accent transition-colors">Blog</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services"><a className="hover:text-accent transition-colors">All Services</a></Link></li>
                <li><Link href="/pricing"><a className="hover:text-accent transition-colors">Pricing</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 OpenSource Premium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

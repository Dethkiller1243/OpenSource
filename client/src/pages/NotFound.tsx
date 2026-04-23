import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-accent" style={{ fontFamily: 'Playfair Display' }}>
          404
        </h1>
        <p className="text-2xl font-bold mb-4">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

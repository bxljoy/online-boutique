import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Nail Accessories Boutique</h1>
        <p className="text-xl mb-8">Discover unique nail accessories and small goods</p>
        <Button asChild>
          <Link href="/products">Shop Now</Link>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <Image src="https://source.unsplash.com/random/400x300?nail+art" alt="Featured Products" width={400} height={300} className="rounded-lg mb-4" />
          <p>Check out our latest nail art designs and accessories.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
          <Image src="https://source.unsplash.com/random/400x300?nail+polish" alt="New Arrivals" width={400} height={300} className="rounded-lg mb-4" />
          <p>Explore our newest collection of nail polishes and tools.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
          <Image src="https://source.unsplash.com/random/400x300?manicure" alt="Special Offers" width={400} height={300} className="rounded-lg mb-4" />
          <p>Don't miss out on our limited-time deals and discounts.</p>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p>We source only the best nail accessories and small goods for our customers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Unique Designs</h3>
            <p>Discover one-of-a-kind items that you won't find anywhere else.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Excellent Service</h3>
            <p>Our team is dedicated to providing you with the best shopping experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
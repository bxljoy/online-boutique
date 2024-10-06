import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Returns</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
          &copy; 2023 Nail Accessories Boutique. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
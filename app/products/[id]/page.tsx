"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';
import RelatedProducts from '@/components/RelatedProducts';
import { useCart } from '@/lib/CartContext';

const products = [
  { id: 1, name: 'Glitter Nail Polish Set', price: 19.99, image: 'https://source.unsplash.com/random/300x300?nail+polish', category: 'Nail Polish' },
  { id: 2, name: 'Nail Art Brush Kit', price: 24.99, image: 'https://source.unsplash.com/random/300x300?nail+brush', category: 'Tools' },
  { id: 3, name: 'Cuticle Oil Pen', price: 9.99, image: 'https://source.unsplash.com/random/300x300?cuticle+oil', category: 'Care' },
  { id: 4, name: 'Nail Stamping Plate Set', price: 29.99, image: 'https://source.unsplash.com/random/300x300?nail+stamping', category: 'Tools' },
  { id: 5, name: 'LED Nail Lamp', price: 39.99, image: 'https://source.unsplash.com/random/300x300?nail+lamp', category: 'Equipment' },
  { id: 6, name: 'Nail File and Buffer Set', price: 14.99, image: 'https://source.unsplash.com/random/300x300?nail+file', category: 'Tools' },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, comment: "Great product!", author: "Jane Doe", date: "2023-05-15" },
    { id: 2, rating: 5, comment: "Absolutely love it!", author: "John Smith", date: "2023-05-10" },
  ]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  const handleReviewSubmit = (newReview: { rating: number; comment: string }) => {
    const review = {
      id: reviews.length + 1,
      ...newReview,
      author: "Anonymous",
      date: new Date().toISOString().split('T')[0],
    };
    setReviews([...reviews, review]);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <Button onClick={handleAddToCart} className="mb-4">Add to Cart</Button>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <ReviewList reviews={reviews} />
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Write a Review</h3>
          <ReviewForm productId={product.id} onSubmit={handleReviewSubmit} />
        </div>
      </div>

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
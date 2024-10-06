"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/lib/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <Card>
      <CardHeader>
        <Link href={`/products/${product.id}`}>
          <Image src={product.image} alt={product.name} width={300} height={300} className="rounded-lg" />
        </Link>
      </CardHeader>
      <CardContent>
        <Link href={`/products/${product.id}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
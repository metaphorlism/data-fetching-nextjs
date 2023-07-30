"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    setProducts(await response.json());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 justify-center">
      {products.map((product, key) => {
        return (
          <Card
            image={product.image}
            name={product.title}
            price={product.price}
            key={key}
          />
        );
      })}
    </div>
  );
}

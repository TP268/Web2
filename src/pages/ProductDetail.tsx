
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import ProductDetailCard from '@/components/ProductDetailCard';
import { searchProduct, Product } from '@/services/productService';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { modelNumber } = useParams<{ modelNumber: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!modelNumber) {
      navigate('/');
      return;
    }

    setLoading(true);
    
    // Simulate a brief loading delay
    setTimeout(() => {
      const foundProduct = searchProduct(modelNumber);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        toast({
          title: "Product not found",
          description: "We couldn't locate this product in our database.",
          variant: "destructive",
        });
        navigate('/');
      }
      
      setLoading(false);
    }, 500);
  }, [modelNumber, toast, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pneumatic"></div>
          </div>
        ) : product ? (
          <div className="max-w-2xl mx-auto">
            <ProductDetailCard product={product} />
          </div>
        ) : (
          <div className="text-center">
            <p>Product not found. Redirecting...</p>
          </div>
        )}
      </main>
      
      <footer className="border-t py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2025 PneumaFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;


import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product, getRelatedProducts } from '@/services/productService';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailCardProps {
  product: Product;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const relatedProducts = product.relatedProducts 
    ? getRelatedProducts(product.relatedProducts) 
    : [];
  
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </Button>
          <Badge>{product.category}</Badge>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <CardTitle className="text-2xl font-bold">{product.modelNumber}</CardTitle>
            <CardDescription className="text-base">{product.brand}</CardDescription>
          </div>
          
          {product.imageUrl && (
            <div className="w-32 h-32 rounded overflow-hidden bg-muted">
              <img 
                src={product.imageUrl} 
                alt={product.modelNumber} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium text-lg mb-2">Description</h3>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div>
            <h3 className="font-medium text-lg mb-2">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="flex justify-between border-b pb-1">
                  <span className="font-medium">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {product.features && product.features.length > 0 && (
          <div>
            <h3 className="font-medium text-lg mb-2">Features</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        {product.applications && product.applications.length > 0 && (
          <div>
            <h3 className="font-medium text-lg mb-2">Common Applications</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {product.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>
        )}
        
        {product.troubleshooting && product.troubleshooting.length > 0 && (
          <div>
            <h3 className="font-medium text-lg mb-2">Troubleshooting Tips</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {product.troubleshooting.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {relatedProducts.length > 0 && (
          <div>
            <h3 className="font-medium text-lg mb-3">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="cursor-pointer hover:border-pneumatic" 
                  onClick={() => navigate(`/product/${relatedProduct.modelNumber}`)}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{relatedProduct.modelNumber}</CardTitle>
                    <CardDescription className="text-xs">{relatedProduct.brand}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        <div className="pt-4 border-t">
          <h3 className="font-medium text-lg mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Have questions about this product or need technical assistance?
            Our team is ready to help you find the right solution.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
            <Button variant="outline">
              Download Specs
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetailCard;

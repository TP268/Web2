
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/services/productService';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailCardProps {
  product: Product;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="mb-2"
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </Button>
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
      </CardContent>
    </Card>
  );
};

export default ProductDetailCard;

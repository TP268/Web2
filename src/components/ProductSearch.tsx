
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchProduct } from '@/services/productService';
import { useToast } from '@/components/ui/use-toast';
import { Search } from 'lucide-react';

interface ProductSearchProps {
  isCompact?: boolean;
  className?: string;
}

const ProductSearch = ({ isCompact, className }: ProductSearchProps) => {
  const [modelNumber, setModelNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!modelNumber.trim()) {
      toast({
        title: "Please enter a model number",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate a brief loading period
    setTimeout(() => {
      const product = searchProduct(modelNumber);
      
      if (product) {
        navigate(`/product/${product.modelNumber}`);
      } else {
        toast({
          title: "Model not found",
          description: "We couldn't find this model number. Please contact us for help.",
          variant: "destructive",
        });
      }
      
      setLoading(false);
    }, 500);
  };

  if (isCompact) {
    return (
      <form onSubmit={handleSearch} className={`flex items-center ${className}`}>
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            placeholder="Enter model number..."
            className="pl-9"
          />
        </div>
        <Button 
          type="submit" 
          size="sm"
          className="ml-2"
          disabled={loading}
        >
          {loading ? "..." : "Find"}
        </Button>
      </form>
    );
  }

  return (
    <div className={`w-full max-w-md ${className}`}>
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            placeholder="Enter model number..."
            className="pl-10 py-6 text-lg"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full py-6 text-lg"
          disabled={loading}
        >
          {loading ? "Searching..." : "Find My Product"}
        </Button>
      </form>
    </div>
  );
};

export default ProductSearch;

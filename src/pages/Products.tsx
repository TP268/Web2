
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductSearch from '@/components/ProductSearch';
import { getAllProducts, getCategories, Product } from '@/services/productService';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Search } from 'lucide-react';

const Products = () => {
  const allProducts = getAllProducts();
  const categories = getCategories();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(current =>
      current.includes(category)
        ? current.filter(c => c !== category)
        : [...current, category]
    );
  };

  // Filter products based on search and selected categories
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Pneumatic Products</h1>
              <p className="text-gray-600">Browse our catalog of high-quality pneumatic components</p>
            </div>
            <div className="w-full md:w-72">
              <ProductSearch isCompact className="w-full" />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="text" 
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label 
                        htmlFor={`category-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="h-full hover:shadow-md transition-all">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge>{product.category}</Badge>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
        <div className="h-40 bg-gray-200 mt-2 rounded flex items-center justify-center">
          {/* Product image placeholder */}
          <div className="text-5xl text-gray-400">{product.modelNumber[0]}</div>
        </div>
        <CardTitle className="mt-3">{product.modelNumber}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4">
          {product.features && product.features.length > 0 && (
            <p className="text-sm text-gray-500 mb-2 line-clamp-1">
              <span className="font-medium">Features:</span> {product.features[0]}...
            </p>
          )}
        </div>
        <Link 
          to={`/product/${product.modelNumber}`} 
          className="text-pneumatic hover:text-pneumatic-dark font-medium"
        >
          View Details →
        </Link>
      </CardContent>
    </Card>
  );
};

export default Products;

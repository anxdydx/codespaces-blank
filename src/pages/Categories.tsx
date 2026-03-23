import { useEffect, useState } from 'react';
import { supabase, Category } from '../lib/supabase';
import { Loader2, Tag } from 'lucide-react';

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [productCounts, setProductCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const categoriesRes = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (categoriesRes.data) {
        setCategories(categoriesRes.data);

        const counts: Record<string, number> = {};
        for (const category of categoriesRes.data) {
          const { count } = await supabase
            .from('products')
            .select('*', { count: 'exact', head: true })
            .eq('category_id', category.id);
          counts[category.id] = count || 0;
        }
        setProductCounts(counts);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Categories</h1>

        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Tag className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {productCounts[category.id] || 0} products
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>

                <p className="text-gray-600">
                  {category.description || 'No description available'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

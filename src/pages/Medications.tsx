
import { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import MedicationCard from '../components/MedicationCard';

// Sample medications data
const medicationsData = [
  {
    id: 1,
    name: 'Serenity 25mg',
    type: 'Anti-Anxiety',
    price: 45.99,
    description: 'Helps manage symptoms of anxiety and panic disorders.',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    dosage: '25mg, 30 tablets',
    quantity: 50,
    prescription: true,
  },
  {
    id: 2,
    name: 'Tranquil 50mg',
    type: 'Anti-Depression',
    price: 67.50,
    description: 'For treatment of major depressive disorder and related conditions.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2030&ixlib=rb-4.0.3',
    dosage: '50mg, 30 tablets',
    quantity: 30,
    prescription: true,
  },
  {
    id: 3,
    name: 'Calm Boost',
    type: 'Supplement',
    price: 29.99,
    description: 'Natural supplement to support mood balance and stress reduction.',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    dosage: '500mg, 60 capsules',
    quantity: 100,
    prescription: false,
  },
  {
    id: 4,
    name: 'Mindful Sleep',
    type: 'Sleep Aid',
    price: 19.95,
    description: 'Promotes healthy sleep patterns and better rest quality.',
    image: 'https://images.unsplash.com/photo-1583582731355-121e2c7b8a18?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    dosage: '10mg, 30 tablets',
    quantity: 75,
    prescription: false,
  },
  {
    id: 5,
    name: 'Focus Plus',
    type: 'ADHD',
    price: 89.99,
    description: 'Helps manage symptoms of attention deficit and hyperactivity.',
    image: 'https://images.unsplash.com/photo-1582888085879-3dbd270ea84f?auto=format&fit=crop&q=80&w=1916&ixlib=rb-4.0.3',
    dosage: '20mg, 30 tablets',
    quantity: 25,
    prescription: true,
  },
  {
    id: 6,
    name: 'Mood Balance',
    type: 'Bipolar',
    price: 72.75,
    description: 'For management of bipolar disorder and mood stabilization.',
    image: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?auto=format&fit=crop&q=80&w=2032&ixlib=rb-4.0.3',
    dosage: '100mg, 30 tablets',
    quantity: 40,
    prescription: true,
  },
  {
    id: 7,
    name: 'Stress Relief',
    type: 'Supplement',
    price: 24.99,
    description: 'Natural formula to reduce stress and promote relaxation.',
    image: 'https://images.unsplash.com/photo-1519500099198-fd81dad7d2a6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    dosage: '250mg, 60 capsules',
    quantity: 90,
    prescription: false,
  },
  {
    id: 8,
    name: 'Mental Clarity',
    type: 'Cognitive',
    price: 42.50,
    description: 'Supports cognitive function and mental clarity.',
    image: 'https://images.unsplash.com/photo-1550572017-37b7e5f2a690?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3',
    dosage: '15mg, 30 tablets',
    quantity: 0,
    prescription: false,
  },
];

const categories = [
  'All Categories',
  'Anti-Anxiety',
  'Anti-Depression',
  'ADHD',
  'Bipolar',
  'Sleep Aid',
  'Supplement',
  'Cognitive',
];

const Medications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [prescriptionOnly, setPrescriptionOnly] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [filteredMedications, setFilteredMedications] = useState(medicationsData);
  const [cartCount, setCartCount] = useState(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filters
  useEffect(() => {
    let results = medicationsData;
    
    // Search filter
    if (searchTerm) {
      results = results.filter(
        (medication) =>
          medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          medication.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          medication.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (category !== 'All Categories') {
      results = results.filter((medication) => medication.type === category);
    }
    
    // Prescription filter
    if (prescriptionOnly) {
      results = results.filter((medication) => medication.prescription);
    }
    
    // In stock filter
    if (inStock) {
      results = results.filter((medication) => medication.quantity > 0);
    }
    
    setFilteredMedications(results);
  }, [searchTerm, category, prescriptionOnly, inStock]);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-calm-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-calm-900 mb-6">
              Order Your <span className="text-mind-600">Medications</span> Online
            </h1>
            <p className="text-lg text-calm-600">
              Browse our selection of prescription and non-prescription medications.
              Get them delivered directly to your door with our secure service.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-calm-400" />
              <input
                type="text"
                placeholder="Search medications by name, type, or symptoms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 pl-12 pr-4 bg-white border border-calm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mind-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Filters and Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-calm-900">Filters</h3>
                <button
                  className="text-mind-600 text-sm font-medium hover:text-mind-700"
                  onClick={() => {
                    setSearchTerm('');
                    setCategory('All Categories');
                    setPrescriptionOnly(false);
                    setInStock(false);
                  }}
                >
                  Clear All
                </button>
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-calm-800 mb-3">Category</h4>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border border-calm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mind-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Prescription Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-calm-800 mb-3">Prescription</h4>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="prescription"
                    checked={prescriptionOnly}
                    onChange={() => setPrescriptionOnly(!prescriptionOnly)}
                    className="w-4 h-4 text-mind-600 focus:ring-mind-500 rounded"
                  />
                  <label htmlFor="prescription" className="ml-2 text-calm-700">
                    Prescription Only
                  </label>
                </div>
              </div>
              
              {/* In Stock Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-calm-800 mb-3">Availability</h4>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={inStock}
                    onChange={() => setInStock(!inStock)}
                    className="w-4 h-4 text-mind-600 focus:ring-mind-500 rounded"
                  />
                  <label htmlFor="inStock" className="ml-2 text-calm-700">
                    In Stock Only
                  </label>
                </div>
              </div>
              
              <button className="w-full py-3 bg-mind-600 text-white rounded-lg font-medium hover:bg-mind-700 transition-colors flex items-center justify-center">
                <Filter className="w-4 h-4 mr-2" />
                <span>Apply Filters</span>
              </button>
              
              {/* Cart Summary */}
              <div className="mt-8 p-4 bg-calm-50 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-calm-800">Your Cart</h4>
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-mind-600 mr-1" />
                    <span className="text-mind-600 font-medium">{cartCount}</span>
                  </div>
                </div>
                {cartCount > 0 ? (
                  <button className="w-full py-2.5 bg-mind-600 text-white rounded-lg font-medium hover:bg-mind-700 transition-colors">
                    View Cart
                  </button>
                ) : (
                  <p className="text-calm-600 text-sm text-center">Your cart is empty</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-calm-900">
                  {filteredMedications.length} Medications Found
                </h2>
                <p className="text-calm-600">Browse our selection of medications</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-calm-700">Sort by:</span>
                <select className="p-2 border border-calm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mind-500 focus:border-transparent">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Alphabetical</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
            
            {filteredMedications.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedications.map((medication) => (
                  <MedicationCard 
                    key={medication.id} 
                    {...medication} 
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto rounded-full bg-calm-100 flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-calm-400" />
                </div>
                <h3 className="text-xl font-semibold text-calm-900 mb-2">
                  No Medications Found
                </h3>
                <p className="text-calm-600 mb-6">
                  Try adjusting your search filters or try a different category.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setCategory('All Categories');
                    setPrescriptionOnly(false);
                    setInStock(false);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medications;

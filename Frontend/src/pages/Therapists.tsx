
import { useState, useEffect } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import TherapistCard from '../components/TherapistCard';

// Sample therapist data
const therapistsData = [
  {
    id: 1,
    name: 'Dr. Emily Chen',
    specialty: 'Anxiety & Depression',
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    availability: 'Available Today',
    experience: 8,
    price: 120,
  },
  {
    id: 2,
    name: 'Dr. Michael Johnson',
    specialty: 'Trauma & PTSD',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    availability: 'Next Week',
    experience: 12,
    price: 150,
  },
  {
    id: 3,
    name: 'Dr. Sarah Williams',
    specialty: 'Relationship Counseling',
    rating: 4.7,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1998&ixlib=rb-4.0.3',
    availability: 'Tomorrow',
    experience: 6,
    price: 110,
  },
  {
    id: 4,
    name: 'Dr. David Martinez',
    specialty: 'Addiction Recovery',
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3',
    availability: 'Available Today',
    experience: 10,
    price: 135,
  },
  {
    id: 5,
    name: 'Dr. Lisa Thompson',
    specialty: 'Child & Adolescent',
    rating: 4.8,
    reviews: 75,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    availability: 'Next Week',
    experience: 9,
    price: 140,
  },
  {
    id: 6,
    name: 'Dr. Robert Wilson',
    specialty: 'Bipolar Disorder',
    rating: 4.7,
    reviews: 68,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3',
    availability: 'Tomorrow',
    experience: 15,
    price: 160,
  },
];

const specialties = [
  'All Specialties',
  'Anxiety & Depression',
  'Trauma & PTSD',
  'Relationship Counseling',
  'Addiction Recovery',
  'Child & Adolescent',
  'Bipolar Disorder',
  'Eating Disorders',
  'OCD',
  'Grief & Loss',
];

const Therapists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [availability, setAvailability] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filteredTherapists, setFilteredTherapists] = useState(therapistsData);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filters
  useEffect(() => {
    let results = therapistsData;
    
    // Search filter
    if (searchTerm) {
      results = results.filter(
        (therapist) =>
          therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Specialty filter
    if (specialty !== 'All Specialties') {
      results = results.filter((therapist) => therapist.specialty === specialty);
    }
    
    // Availability filter
    if (availability) {
      results = results.filter((therapist) =>
        therapist.availability.toLowerCase().includes(availability.toLowerCase())
      );
    }
    
    // Price range filter
    results = results.filter(
      (therapist) =>
        therapist.price >= priceRange[0] && therapist.price <= priceRange[1]
    );
    
    setFilteredTherapists(results);
  }, [searchTerm, specialty, availability, priceRange]);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-calm-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-calm-900 mb-6">
              Find the Right <span className="text-mind-600">Therapist</span> for You
            </h1>
            <p className="text-lg text-calm-600">
              Browse our network of licensed therapists specializing in various mental health areas.
              Find someone who matches your needs and schedule a session today.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-calm-400" />
              <input
                type="text"
                placeholder="Search by name, specialty, or keyword..."
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
                    setSpecialty('All Specialties');
                    setAvailability('');
                    setPriceRange([0, 200]);
                  }}
                >
                  Clear All
                </button>
              </div>
              
              {/* Specialty Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-calm-800 mb-3">Specialty</h4>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full p-3 border border-calm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mind-500 focus:border-transparent"
                >
                  {specialties.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Availability Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-calm-800 mb-3">Availability</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="any"
                      name="availability"
                      checked={availability === ''}
                      onChange={() => setAvailability('')}
                      className="w-4 h-4 text-mind-600 focus:ring-mind-500"
                    />
                    <label htmlFor="any" className="ml-2 text-calm-700">
                      Any Time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="today"
                      name="availability"
                      checked={availability === 'today'}
                      onChange={() => setAvailability('today')}
                      className="w-4 h-4 text-mind-600 focus:ring-mind-500"
                    />
                    <label htmlFor="today" className="ml-2 text-calm-700">
                      Available Today
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="tomorrow"
                      name="availability"
                      checked={availability === 'tomorrow'}
                      onChange={() => setAvailability('tomorrow')}
                      className="w-4 h-4 text-mind-600 focus:ring-mind-500"
                    />
                    <label htmlFor="tomorrow" className="ml-2 text-calm-700">
                      Tomorrow
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="week"
                      name="availability"
                      checked={availability === 'week'}
                      onChange={() => setAvailability('week')}
                      className="w-4 h-4 text-mind-600 focus:ring-mind-500"
                    />
                    <label htmlFor="week" className="ml-2 text-calm-700">
                      This Week
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-calm-800 mb-3">Price Range</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-calm-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-calm-600">${priceRange[0]}</span>
                    <span className="text-sm text-calm-600">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-mind-600 text-white rounded-lg font-medium hover:bg-mind-700 transition-colors flex items-center justify-center">
                <Filter className="w-4 h-4 mr-2" />
                <span>Apply Filters</span>
              </button>
            </div>
          </div>
          
          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-calm-900">
                  {filteredTherapists.length} Therapists Found
                </h2>
                <p className="text-calm-600">Browse and connect with licensed professionals</p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex items-center">
                <MapPin className="w-5 h-5 text-calm-500 mr-1" />
                <span className="text-calm-700">New York, NY</span>
                <button className="ml-2 text-mind-600 text-sm font-medium hover:text-mind-700">
                  Change
                </button>
              </div>
            </div>
            
            {filteredTherapists.length > 0 ? (
              <div className="space-y-6">
                {filteredTherapists.map((therapist) => (
                  <TherapistCard key={therapist.id} {...therapist} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto rounded-full bg-calm-100 flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-calm-400" />
                </div>
                <h3 className="text-xl font-semibold text-calm-900 mb-2">
                  No Therapists Found
                </h3>
                <p className="text-calm-600 mb-6">
                  Try adjusting your search filters or try a different specialty.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSpecialty('All Specialties');
                    setAvailability('');
                    setPriceRange([0, 200]);
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

export default Therapists;

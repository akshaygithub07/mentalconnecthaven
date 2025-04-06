
import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface MedicationProps {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
  dosage: string;
  quantity: number;
  prescription: boolean;
}

const MedicationCard = ({
  id,
  name,
  type,
  price,
  description,
  image,
  dosage,
  quantity,
  prescription,
}: MedicationProps) => {
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const incrementCount = () => {
    if (count < quantity) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div 
      className="card group overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-square rounded-xl overflow-hidden bg-calm-50 mb-4">
          <img
            src={image || "https://via.placeholder.com/300x300?text=Medication"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {prescription && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-mind-600 text-white rounded-full text-xs font-medium">
            Prescription Required
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div>
          <span className="text-sm text-calm-500">{type}</span>
          <h3 className="text-lg font-medium text-calm-900">{name}</h3>
          <p className="text-sm text-calm-600 mt-1">{dosage}</p>
        </div>
        
        <p className="text-calm-600 text-sm line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-semibold text-calm-900">${price.toFixed(2)}</span>
          
          {quantity > 0 ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center border border-calm-200 rounded-lg overflow-hidden">
                <button
                  className="px-3 py-1.5 text-calm-500 hover:bg-calm-100 transition-colors"
                  onClick={decrementCount}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 py-1.5 font-medium text-calm-800">{count}</span>
                <button
                  className="px-3 py-1.5 text-calm-500 hover:bg-calm-100 transition-colors"
                  onClick={incrementCount}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <a href = '/register'>
              <button className="bg-mind-600 text-white p-2 rounded-lg hover:bg-mind-700 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              </a>
            </div>
          ) : (
            <span className="text-destructive font-medium">Out of stock</span>
          )}
        </div>
      </div>
      
      {/* Hover effect */}
      <div
        className={`absolute inset-0 bg-mind-600/5 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default MedicationCard;

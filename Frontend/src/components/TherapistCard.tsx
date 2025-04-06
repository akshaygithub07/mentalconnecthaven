
import { useState } from 'react';
import { Star, Calendar, MessageCircle } from 'lucide-react';

interface TherapistProps {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  availability: string;
  experience: number;
  price: number;
}

const TherapistCard = ({
  id,
  name,
  specialty,
  rating,
  reviews,
  image,
  availability,
  experience,
  price,
}: TherapistProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card relative group overflow-hidden transition-all duration-500 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-mind-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3">
          <div className="aspect-square rounded-xl overflow-hidden bg-calm-100"> 
            <img
              src={image || "https://via.placeholder.com/300x300?text=Therapist"}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-calm-900">{name}</h3>
              <p className="text-mind-600 font-medium">{specialty}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium text-calm-800">{rating}</span>
              <span className="text-calm-500 text-sm">({reviews})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-mind-50 text-mind-600 rounded-full text-sm">
              {experience} years exp.
            </span>
            <span className="px-3 py-1 bg-calm-50 text-calm-700 rounded-full text-sm">
              {availability}
            </span>
            <span className="px-3 py-1 bg-wellness-50 text-wellness-700 rounded-full text-sm">
              ${price}/session
            </span>
          </div>
          
          <p className="text-calm-600 line-clamp-2">
            Licensed therapist specializing in {specialty.toLowerCase()} with {experience} years of experience. Committed to providing personalized care and support.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row gap-3 transition-opacity duration-300">
            <a href = '/register'>
            <button className="btn-primary flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </button>
            </a>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Message</span>
            </button>
          </div>
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

export default TherapistCard;

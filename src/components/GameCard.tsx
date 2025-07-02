
import React from 'react';
import { Star, Users, Clock, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface GameCardProps {
  game: {
    id: number;
    title: string;
    rating: number;
    players: string;
    time: string;
    difficulty: string;
    image: string;
    description: string;
    category: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/games/${game.id}`);
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-orange-100 bg-white/90">
      <CardContent className="p-0">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge className="bg-blue-100 text-blue-800 text-xs">
              {game.category}
            </Badge>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
          
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
            {game.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold">{game.rating}</span>
            </div>
            <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
              {game.difficulty}
            </Badge>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {game.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{game.players}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{game.time}</span>
            </div>
          </div>
          
          <Button 
            onClick={handleViewDetails}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            자세히 보기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;


import React from 'react';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '쉬움': return 'bg-green-100 text-green-800';
      case '보통': return 'bg-yellow-100 text-yellow-800';
      case '어려움': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-orange-100 bg-white">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge className={getDifficultyColor(game.difficulty)}>
            {game.difficulty}
          </Badge>
        </div>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-xs font-semibold text-gray-800">{game.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {game.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 space-x-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{game.players}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{game.time}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;

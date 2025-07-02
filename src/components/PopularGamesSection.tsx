
import React from 'react';

interface Game {
  id: number;
  title: string;
  rating: number;
  players: string;
  time: string;
  difficulty: string;
  image: string;
  description: string;
  category: string;
}

interface PopularGamesSectionProps {
  games: Game[];
  gameReviews: Record<string, number>;
  popularType: 'rating' | 'review' | 'players';
  onPopularTypeChange: (type: 'rating' | 'review' | 'players') => void;
}

const PopularGamesSection: React.FC<PopularGamesSectionProps> = ({
  games,
  gameReviews,
  popularType,
  onPopularTypeChange
}) => {
  let popularGames = [...games];
  
  if (popularType === 'rating') {
    popularGames.sort((a, b) => b.rating - a.rating);
  } else if (popularType === 'review') {
    popularGames.sort((a, b) => (gameReviews[b.title] || 0) - (gameReviews[a.title] || 0));
  } else if (popularType === 'players') {
    const getMaxPlayers = (game: Game) => {
      const match = game.players.match(/(\d+)(-|~)?(\d+)?/);
      if (!match) return 0;
      return match[3] ? parseInt(match[3]) : parseInt(match[1]);
    };
    popularGames.sort((a, b) => getMaxPlayers(b) - getMaxPlayers(a));
  }
  
  popularGames = popularGames.slice(0, 5);

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">인기 게임 Top 5</h2>
        <div className="flex gap-2">
          <button
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${
              popularType === 'rating' 
                ? 'bg-orange-500 text-white border-orange-500' 
                : 'bg-white text-gray-700 border-orange-200 hover:bg-orange-50'
            }`}
            onClick={() => onPopularTypeChange('rating')}
          >
            평점순
          </button>
          <button
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${
              popularType === 'review' 
                ? 'bg-orange-500 text-white border-orange-500' 
                : 'bg-white text-gray-700 border-orange-200 hover:bg-orange-50'
            }`}
            onClick={() => onPopularTypeChange('review')}
          >
            후기순
          </button>
          <button
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${
              popularType === 'players' 
                ? 'bg-orange-500 text-white border-orange-500' 
                : 'bg-white text-gray-700 border-orange-200 hover:bg-orange-50'
            }`}
            onClick={() => onPopularTypeChange('players')}
          >
            플레이 인원순
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularGames.map((game, idx) => (
          <div key={game.title} className="bg-white/90 rounded-xl shadow p-4 flex flex-col gap-2 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold text-orange-500">#{idx + 1}</span>
              <span className="font-semibold text-gray-800">{game.title}</span>
            </div>
            <div className="text-sm text-gray-600 mb-1 line-clamp-2">{game.description}</div>
            <div className="flex gap-3 text-xs text-gray-500">
              <span>평점 <span className="font-bold text-orange-600">{game.rating}</span></span>
              <span>후기 <span className="font-bold text-orange-600">{gameReviews[game.title] || 0}</span></span>
              <span>인원 <span className="font-bold text-orange-600">{game.players}</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGamesSection;


import React, { useState } from 'react';
import Header from '@/components/Header';
import GameCard from '@/components/GameCard';
import PopularGamesSection from '@/components/PopularGamesSection';
import GameFilters from '@/components/GameFilters';
import GameStats from '@/components/GameStats';
import RecommendationCategories from '@/components/RecommendationCategories';
import { useGameFiltering } from '@/hooks/useGameFiltering';
import { allGames, gameReviews } from '@/data/gamesData';

const GameRecommendation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');
  const [selectedPlayerCount, setSelectedPlayerCount] = useState('전체');
  const [popularType, setPopularType] = useState<'rating' | 'review' | 'players'>('rating');

  const { filterGames } = useGameFiltering();

  const filteredGames = filterGames(
    allGames,
    searchTerm,
    selectedCategory,
    selectedDifficulty,
    selectedPlayerCount
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      
      <PopularGamesSection
        games={allGames}
        gameReviews={gameReviews}
        popularType={popularType}
        onPopularTypeChange={setPopularType}
      />

      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            맞춤 <span className="text-orange-500">게임 추천</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            당신에게 완벽한 보드게임을 찾아보세요
          </p>
        </div>
      </section>

      <section className="py-8 px-4 max-w-7xl mx-auto">
        <GameFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          selectedPlayerCount={selectedPlayerCount}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onDifficultyChange={setSelectedDifficulty}
          onPlayerCountChange={setSelectedPlayerCount}
        />

        <GameStats gameCount={filteredGames.length} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">검색 조건에 맞는 게임이 없습니다.</p>
            <p className="text-gray-400 mt-2">다른 조건으로 검색해보세요.</p>
          </div>
        )}
      </section>

      <RecommendationCategories />
    </div>
  );
};

export default GameRecommendation;

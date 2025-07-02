
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface GameFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  selectedDifficulty: string;
  selectedPlayerCount: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onPlayerCountChange: (value: string) => void;
}

const GameFilters: React.FC<GameFiltersProps> = ({
  searchTerm,
  selectedCategory,
  selectedDifficulty,
  selectedPlayerCount,
  onSearchChange,
  onCategoryChange,
  onDifficultyChange,
  onPlayerCountChange
}) => {
  const categories = ['전체', '전략', '파티', '협력', '추리', '덱빌딩', '워커플레이스먼트'];
  const difficulties = ['전체', '쉬움', '보통', '어려움'];
  const playerCounts = ['전체', '2명', '3명', '4명', '5명', '6명+'];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-orange-100 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Search */}
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="게임 이름이나 설명으로 검색..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-orange-200 focus:border-orange-400"
          />
        </div>
        
        {/* Category Filter */}
        <div>
          <select 
            value={selectedCategory} 
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-orange-200 rounded-md focus:border-orange-400 focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Difficulty Filter */}
        <div>
          <select 
            value={selectedDifficulty} 
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="w-full px-3 py-2 border border-orange-200 rounded-md focus:border-orange-400 focus:outline-none"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>

        {/* Player Count Filter */}
        <div>
          <select 
            value={selectedPlayerCount} 
            onChange={(e) => onPlayerCountChange(e.target.value)}
            className="w-full px-3 py-2 border border-orange-200 rounded-md focus:border-orange-400 focus:outline-none"
          >
            {playerCounts.map(count => (
              <option key={count} value={count}>{count}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GameFilters;

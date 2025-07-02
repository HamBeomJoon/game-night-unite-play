import React, { useState } from 'react';
import { Search, Filter, Star, Users, Clock, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import GameCard from '@/components/GameCard';

const GameRecommendation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');
  const [selectedPlayerCount, setSelectedPlayerCount] = useState('전체');
  const [popularType, setPopularType] = useState<'rating' | 'review' | 'players'>('rating');

  const categories = ['전체', '전략', '파티', '협력', '추리', '덱빌딩', '워커플레이스먼트'];
  const difficulties = ['전체', '쉬움', '보통', '어려움'];
  const playerCounts = ['전체', '2명', '3명', '4명', '5명', '6명+'];

  const allGames = [
    {
      id: 1,
      title: "스플렌더",
      rating: 4.8,
      players: "2-4명",
      time: "30분",
      difficulty: "보통",
      image: "/placeholder.svg",
      description: "보석 상인이 되어 부를 쌓아가는 전략 게임",
      category: "전략"
    },
    {
      id: 2,
      title: "티켓 투 라이드",
      rating: 4.6,
      players: "2-5명",
      time: "60분",
      difficulty: "쉬움",
      image: "/placeholder.svg",
      description: "기차 노선을 연결하는 재미있는 전략 게임",
      category: "전략"
    },
    {
      id: 3,
      title: "코드네임",
      rating: 4.9,
      players: "3-8명",
      time: "15분",
      difficulty: "쉬움",
      image: "/placeholder.svg",
      description: "단서로 소통하는 팀 협력 추리 게임",
      category: "추리"
    },
    {
      id: 4,
      title: "아줄",
      rating: 4.7,
      players: "2-4명",
      time: "45분",
      difficulty: "보통",
      image: "/placeholder.svg",
      description: "아름다운 타일로 궁전을 꾸미는 퍼즐 게임",
      category: "전략"
    },
    {
      id: 5,
      title: "윙스팬",
      rating: 4.8,
      players: "1-5명",
      time: "90분",
      difficulty: "보통",
      image: "/placeholder.svg",
      description: "새들의 서식지를 만드는 아름다운 엔진빌딩 게임",
      category: "전략"
    },
    {
      id: 6,
      title: "텔레스트레이션",
      rating: 4.5,
      players: "4-8명",
      time: "30분",
      difficulty: "쉬움",
      image: "/placeholder.svg",
      description: "그림과 추측이 만나는 재미있는 파티 게임",
      category: "파티"
    },
    {
      id: 7,
      title: "팬데믹",
      rating: 4.6,
      players: "2-4명",
      time: "45분",
      difficulty: "어려움",
      image: "/placeholder.svg",
      description: "전염병을 막아내는 협력 게임",
      category: "협력"
    },
    {
      id: 8,
      title: "도미니언",
      rating: 4.4,
      players: "2-4명",
      time: "30분",
      difficulty: "보통",
      image: "/placeholder.svg",
      description: "덱빌딩의 시초가 된 명작 게임",
      category: "덱빌딩"
    }
  ];

  const gameReviews = {
    '스플렌더': 12,
    '티켓 투 라이드': 8,
    '코드네임': 20,
    '아줄': 15,
    '윙스팬': 7,
    '텔레스트레이션': 18,
    '팬데믹': 10,
    '도미니언': 5,
  };

  // 인원수 필터링 로직
  const matchesPlayerCount = (game, playerCount) => {
    if (playerCount === '전체') return true;
    
    // 플레이어 수 문자열에서 숫자 추출
    const playerNumbers = game.players.match(/\d+/g);
    if (!playerNumbers) return false;
    
    const minPlayers = parseInt(playerNumbers[0]);
    const maxPlayers = playerNumbers.length > 1 ? parseInt(playerNumbers[1]) : minPlayers;
    
    switch (playerCount) {
      case '2명':
        return minPlayers <= 2 && maxPlayers >= 2;
      case '3명':
        return minPlayers <= 3 && maxPlayers >= 3;
      case '4명':
        return minPlayers <= 4 && maxPlayers >= 4;
      case '5명':
        return minPlayers <= 5 && maxPlayers >= 5;
      case '6명+':
        return maxPlayers >= 6;
      default:
        return true;
    }
  };

  let popularGames = [...allGames];
  if (popularType === 'rating') {
    popularGames.sort((a, b) => b.rating - a.rating);
  } else if (popularType === 'review') {
    popularGames.sort((a, b) => (gameReviews[b.title] || 0) - (gameReviews[a.title] || 0));
  } else if (popularType === 'players') {
    // 인원수 최대값 기준 내림차순 정렬
    const getMaxPlayers = (game) => {
      const match = game.players.match(/(\d+)(-|~)?(\d+)?/);
      if (!match) return 0;
      return match[3] ? parseInt(match[3]) : parseInt(match[1]);
    };
    popularGames.sort((a, b) => getMaxPlayers(b) - getMaxPlayers(a));
  }
  popularGames = popularGames.slice(0, 5);

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || game.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === '전체' || game.difficulty === selectedDifficulty;
    const matchesPlayers = matchesPlayerCount(game, selectedPlayerCount);
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesPlayers;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800">인기 게임 Top 5</h2>
          <div className="flex gap-2">
            <button
              className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${popularType === 'rating' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-orange-200 hover:bg-orange-50'}`}
              onClick={() => setPopularType('rating')}
            >평점순</button>
            <button
              className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${popularType === 'review' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-orange-200 hover:bg-orange-50'}`}
              onClick={() => setPopularType('review')}
            >후기순</button>
            <button
              className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${popularType === 'players' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-orange-200 hover:bg-orange-50'}`}
              onClick={() => setPopularType('players')}
            >플레이 인원순</button>
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

      {/* Search and Filter Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-orange-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="게임 이름이나 설명으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            
            {/* Category Filter */}
            <div>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
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
                onChange={(e) => setSelectedDifficulty(e.target.value)}
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
                onChange={(e) => setSelectedPlayerCount(e.target.value)}
                className="w-full px-3 py-2 border border-orange-200 rounded-md focus:border-orange-400 focus:outline-none"
              >
                {playerCounts.map(count => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center border-orange-100">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">{filteredGames.length}</div>
              <div className="text-sm text-gray-600">추천 게임</div>
            </CardContent>
          </Card>
          <Card className="text-center border-orange-100">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">4.6</div>
              <div className="text-sm text-gray-600">평균 평점</div>
            </CardContent>
          </Card>
          <Card className="text-center border-orange-100">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">2-8</div>
              <div className="text-sm text-gray-600">인원 범위</div>
            </CardContent>
          </Card>
          <Card className="text-center border-orange-100">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">45분</div>
              <div className="text-sm text-gray-600">평균 시간</div>
            </CardContent>
          </Card>
        </div>

        {/* Games Grid */}
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

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          상황별 게임 추천
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-orange-100 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                처음 만난 사람들과
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">아이스브레이킹에 좋은 간단한 파티 게임들</p>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">코드네임</Badge>
                <Badge variant="outline" className="mr-2">텔레스트레이션</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                전략 게임 초보자
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">복잡하지 않으면서도 전략적 재미가 있는 게임들</p>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">스플렌더</Badge>
                <Badge variant="outline" className="mr-2">티켓 투 라이드</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-500" />
                연인/부부와 함께
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">둘이서 즐기기 좋은 로맨틱한 게임들</p>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">아줄</Badge>
                <Badge variant="outline" className="mr-2">스플렌더</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GameRecommendation;

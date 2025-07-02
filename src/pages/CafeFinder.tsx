
import React, { useState } from 'react';
import { Search, MapPin, Clock, Phone, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';

const CafeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedGame, setSelectedGame] = useState('all');
  const [filteredCafes, setFilteredCafes] = useState([]);

  // 샘플 카페 데이터 (보유 게임 정보 추가)
  const cafes = [
    {
      id: 1,
      name: '보드게임카페 플레이하우스',
      region: 'seoul',
      address: '서울시 강남구 테헤란로 123',
      phone: '02-1234-5678',
      hours: '10:00 - 24:00',
      rating: 4.5,
      gameCount: 300,
      image: '/placeholder.svg',
      features: ['주차가능', '단체룸', '음료무제한'],
      availableGames: ['스플렌더', '티켓 투 라이드', '코드네임', '아줄', '윙스팬', '텔레스트레이션', '팬데믹']
    },
    {
      id: 2,
      name: '다이스앤롤',
      region: 'seoul',
      address: '서울시 홍대 와우산로 456',
      phone: '02-9876-5432',
      hours: '12:00 - 02:00',
      rating: 4.3,
      gameCount: 250,
      image: '/placeholder.svg',
      features: ['24시간', '커플석', '생맥주'],
      availableGames: ['스플렌더', '코드네임', '윙스팬', '텔레스트레이션', '도미니언']
    },
    {
      id: 3,
      name: '게임스테이션',
      region: 'busan',
      address: '부산시 해운대구 센텀시티로 789',
      phone: '051-1111-2222',
      hours: '11:00 - 23:00',
      rating: 4.7,
      gameCount: 400,
      image: '/placeholder.svg',
      features: ['오션뷰', '프리미엄룸', '디저트'],
      availableGames: ['스플렌더', '티켓 투 라이드', '코드네임', '아줄', '윙스팬', '팬데믹', '도미니언']
    },
    {
      id: 4,
      name: '보드런',
      region: 'incheon',
      address: '인천시 남동구 구월로 321',
      phone: '032-3333-4444',
      hours: '10:00 - 22:00',
      rating: 4.2,
      gameCount: 180,
      image: '/placeholder.svg',
      features: ['가족친화', '키즈존', '주차무료'],
      availableGames: ['티켓 투 라이드', '코드네임', '텔레스트레이션']
    },
    {
      id: 5,
      name: '플레이존',
      region: 'seoul',
      address: '서울시 종로구 인사동길 654',
      phone: '02-5555-6666',
      hours: '09:00 - 23:00',
      rating: 4.4,
      gameCount: 220,
      image: '/placeholder.svg',
      features: ['전통찻집', '조용한분위기', '와이파이'],
      availableGames: ['스플렌더', '아줄', '윙스팬', '팬데믹', '도미니언']
    },
    {
      id: 6,
      name: '게임하우스',
      region: 'daegu',
      address: '대구시 중구 동성로 987',
      phone: '053-7777-8888',
      hours: '11:00 - 24:00',
      rating: 4.6,
      gameCount: 350,
      image: '/placeholder.svg',
      features: ['넓은공간', '토너먼트', '이벤트'],
      availableGames: ['스플렌더', '티켓 투 라이드', '코드네임', '아줄', '텔레스트레이션', '팬데믹']
    }
  ];

  const regions = [
    { value: 'all', label: '전체 지역' },
    { value: 'seoul', label: '서울' },
    { value: 'busan', label: '부산' },
    { value: 'incheon', label: '인천' },
    { value: 'daegu', label: '대구' },
    { value: 'daejeon', label: '대전' },
    { value: 'gwangju', label: '광주' }
  ];

  const games = [
    { value: 'all', label: '전체 게임' },
    { value: '스플렌더', label: '스플렌더' },
    { value: '티켓 투 라이드', label: '티켓 투 라이드' },
    { value: '코드네임', label: '코드네임' },
    { value: '아줄', label: '아줄' },
    { value: '윙스팬', label: '윙스팬' },
    { value: '텔레스트레이션', label: '텔레스트레이션' },
    { value: '팬데믹', label: '팬데믹' },
    { value: '도미니언', label: '도미니언' }
  ];

  // 검색 및 필터링 로직
  React.useEffect(() => {
    let filtered = cafes;

    if (searchTerm) {
      filtered = filtered.filter(cafe => 
        cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cafe.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cafe.availableGames.some(game => game.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedRegion !== 'all') {
      filtered = filtered.filter(cafe => cafe.region === selectedRegion);
    }

    if (selectedGame !== 'all') {
      filtered = filtered.filter(cafe => cafe.availableGames.includes(selectedGame));
    }

    setFilteredCafes(filtered);
  }, [searchTerm, selectedRegion, selectedGame]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 페이지 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">보드게임 카페 찾기</h1>
          <p className="text-gray-600">전국의 다양한 보드게임 카페를 찾아보세요</p>
        </div>

        {/* 검색 및 필터 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="카페명, 지역, 게임명으로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:w-48">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map(region => (
                    <SelectItem key={region.value} value={region.value}>
                      {region.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:w-48">
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger>
                  <SelectValue placeholder="게임 선택" />
                </SelectTrigger>
                <SelectContent>
                  {games.map(game => (
                    <SelectItem key={game.value} value={game.value}>
                      {game.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Filter className="w-4 h-4 mr-2" />
              검색
            </Button>
          </div>
        </div>

        {/* 검색 결과 */}
        <div className="mb-4">
          <p className="text-gray-600">
            총 <span className="font-semibold text-orange-600">{filteredCafes.length}</span>개의 카페를 찾았습니다
            {selectedGame !== 'all' && (
              <span className="ml-2 text-orange-600">
                ({selectedGame} 보유 카페)
              </span>
            )}
          </p>
        </div>

        {/* 카페 목록 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCafes.map(cafe => (
            <Card key={cafe.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">카페 이미지</span>
                </div>
                <CardTitle className="text-xl">{cafe.name}</CardTitle>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{cafe.rating}</span>
                  <span className="text-gray-500">({cafe.gameCount}개 게임)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{cafe.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{cafe.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{cafe.hours}</span>
                </div>
                
                {/* 보유 게임 목록 */}
                <div className="pt-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">보유 게임</p>
                  <div className="flex flex-wrap gap-1">
                    {cafe.availableGames.slice(0, 4).map((game, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full ${
                          selectedGame === game 
                            ? 'bg-orange-200 text-orange-800 font-semibold' 
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {game}
                      </span>
                    ))}
                    {cafe.availableGames.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{cafe.availableGames.length - 4}개
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {cafe.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600">
                    상세보기
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    전화걸기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 결과가 없을 때 */}
        {filteredCafes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">검색 결과가 없습니다.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setSelectedGame('all');
              }}
              variant="outline"
            >
              전체 보기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CafeFinder;

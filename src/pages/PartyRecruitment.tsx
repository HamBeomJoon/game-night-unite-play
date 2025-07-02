import React, { useState } from 'react';
import { Plus, Users, MapPin, Clock, Calendar, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { toast } from 'sonner';
import Header from '@/components/Header';
import UserRating from '@/components/UserRating';
import { UserProfile } from '@/types/user';

const PartyRecruitment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);
  
  // 모임 생성 폼 상태
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    gameType: '',
    location: '',
    date: '',
    time: '',
    maxParticipants: 4,
    isRuleMasterIncluded: false
  });

  // 샘플 사용자 데이터
  const sampleUsers: UserProfile[] = [
    {
      id: "1",
      username: "게임러버",
      rating: 4.8,
      totalReviews: 23,
      completedTrades: 5,
      completedParties: 18,
      joinedDate: "2024-01-15",
      badges: ["룰마스터", "친근한호스트"]
    },
    {
      id: "2", 
      username: "파티왕",
      rating: 4.6,
      totalReviews: 15,
      completedTrades: 2,
      completedParties: 25,
      joinedDate: "2024-03-20",
      badges: ["모임왕", "분위기메이커"]
    },
    {
      id: "3",
      username: "농부왕", 
      rating: 4.9,
      totalReviews: 31,
      completedTrades: 12,
      completedParties: 22,
      joinedDate: "2023-11-10",
      badges: ["전략왕", "룰마스터"]
    }
  ];

  // 샘플 모임 데이터
  const partyData = [
    {
      id: 1,
      title: '스플렌더 초보자 모임',
      description: '스플렌더를 처음 해보는 분들과 함께 즐겨요!',
      gameType: '전략',
      location: '강남역 보드게임카페',
      date: '2025-01-15',
      time: '19:00',
      currentParticipants: 2,
      maxParticipants: 4,
      isRuleMasterIncluded: true,
      organizer: sampleUsers[0],
      tags: ['초보환영', '룰마스터', '전략게임']
    },
    {
      id: 2,
      title: '파티게임 모임 - 웃음 보장!',
      description: '텔레스트레이션, 코드네임 등 웃긴 게임들로 스트레스 해소해요',
      gameType: '파티',
      location: '홍대 보드게임펍',
      date: '2025-01-16',
      time: '20:00',
      currentParticipants: 1,
      maxParticipants: 6,
      isRuleMasterIncluded: false,
      organizer: sampleUsers[1],
      tags: ['파티게임', '웃음', '스트레스해소']
    },
    {
      id: 3,
      title: '아그리콜라 고수 모임',
      description: '아그리콜라 경험자들과 함께하는 고난도 게임',
      gameType: '전략',
      location: '신촌 보드게임카페',
      date: '2025-01-17',
      time: '18:30',
      currentParticipants: 3,
      maxParticipants: 4,
      isRuleMasterIncluded: false,
      organizer: sampleUsers[2],
      tags: ['고수만', '전략게임', '고난도']
    }
  ];

  const filteredParties = partyData.filter(party => {
    const matchesSearch = party.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         party.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || party.gameType === filterType;
    return matchesSearch && matchesType;
  });

  const handleCreateParty = () => {
    if (!formData.title || !formData.location || !formData.date || !formData.time) {
      toast.error('필수 정보를 모두 입력해주세요!');
      return;
    }
    
    toast.success('모임이 성공적으로 생성되었습니다!');
    setIsCreateDrawerOpen(false);
    setFormData({
      title: '',
      description: '',
      gameType: '',
      location: '',
      date: '',
      time: '',
      maxParticipants: 4,
      isRuleMasterIncluded: false
    });
  };

  const handleJoinParty = (partyId: number) => {
    toast.success('모임 참여 신청이 완료되었습니다!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">일행 모집</h1>
          <p className="text-gray-600 mb-6">함께 보드게임을 즐길 새로운 친구들을 찾아보세요!</p>
          
          <Drawer open={isCreateDrawerOpen} onOpenChange={setIsCreateDrawerOpen}>
            <DrawerTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                모임 만들기
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-w-2xl mx-auto">
              <DrawerHeader>
                <DrawerTitle>새 모임 만들기</DrawerTitle>
              </DrawerHeader>
              <div className="p-6 space-y-4">
                <div>
                  <Label htmlFor="title">모임 제목 *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="예: 스플렌더 초보자 모임"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">모임 설명</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="어떤 게임을 하고 싶은지, 어떤 분위기인지 설명해주세요"
                  />
                </div>
                
                <div>
                  <Label>게임 장르</Label>
                  <ToggleGroup type="single" value={formData.gameType} onValueChange={(value) => setFormData({...formData, gameType: value || ''})}>
                    <ToggleGroupItem value="전략">전략</ToggleGroupItem>
                    <ToggleGroupItem value="파티">파티</ToggleGroupItem>
                    <ToggleGroupItem value="협력">협력</ToggleGroupItem>
                    <ToggleGroupItem value="추리">추리</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">장소 *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="예: 강남역 보드게임카페"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxParticipants">최대 인원</Label>
                    <Input
                      id="maxParticipants"
                      type="number"
                      min="2"
                      max="10"
                      value={formData.maxParticipants}
                      onChange={(e) => setFormData({...formData, maxParticipants: parseInt(e.target.value)})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">날짜 *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">시간 *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="ruleMaster"
                    checked={formData.isRuleMasterIncluded}
                    onChange={(e) => setFormData({...formData, isRuleMasterIncluded: e.target.checked})}
                    className="w-4 h-4 text-orange-500 rounded focus:ring-orange-400"
                  />
                  <Label htmlFor="ruleMaster">룰마스터 포함 (룰 설명 가능)</Label>
                </div>
                
                <Button onClick={handleCreateParty} className="w-full bg-orange-500 hover:bg-orange-600">
                  모임 만들기
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* 검색 및 필터 */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="모임 제목이나 설명으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={filterType === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterType('all')}
              size="sm"
            >
              전체
            </Button>
            <Button
              variant={filterType === '전략' ? 'default' : 'outline'}
              onClick={() => setFilterType('전략')}
              size="sm"
            >
              전략
            </Button>
            <Button
              variant={filterType === '파티' ? 'default' : 'outline'}
              onClick={() => setFilterType('파티')}
              size="sm"
            >
              파티
            </Button>
            <Button
              variant={filterType === '협력' ? 'default' : 'outline'}
              onClick={() => setFilterType('협력')}
              size="sm"
            >
              협력
            </Button>
          </div>
        </div>

        {/* 모임 리스트 - 사용자 평점 추가 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParties.map((party) => (
            <Card key={party.id} className="hover:shadow-lg transition-all duration-300 border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-blue-100 text-blue-800">
                    {party.gameType}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                  {party.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {party.description}
                </p>
                
                <div className="mb-4">
                  <UserRating user={party.organizer} showDetails={false} />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{party.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{party.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{party.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-blue-600 font-medium">
                      {party.currentParticipants}/{party.maxParticipants}명
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {party.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleJoinParty(party.id)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={party.currentParticipants >= party.maxParticipants}
                >
                  {party.currentParticipants >= party.maxParticipants ? '모집 완료' : '참여하기'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredParties.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            <p className="text-gray-400">새로운 모임을 만들어보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartyRecruitment;

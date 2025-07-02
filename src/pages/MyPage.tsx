
import React from "react";
import { Calendar, MapPin, Clock, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from "@/components/Header";
import { Party } from '@/types/party';

const mySales = [
  { id: 1, name: "스플렌더", status: "판매중", price: 35000 },
  { id: 2, name: "아줄", status: "거래완료", price: 28000 },
];

const myFavorites = [
  { id: 3, name: "윙스팬", price: 55000 },
];

// 참여 중인 모임 샘플 데이터
const myParties: Party[] = [
  {
    id: 1,
    title: '스플렌더 초보자 모임',
    description: '스플렌더를 처음 해보는 분들과 함께 즐겨요!',
    gameType: '전략',
    location: '강남역 보드게임카페',
    date: '2025-01-15',
    time: '19:00',
    currentParticipants: 3,
    maxParticipants: 4,
    isRuleMasterIncluded: true,
    organizer: { id: "1", username: "게임러버", rating: 4.8, totalReviews: 23 },
    tags: ['초보환영', '룰마스터'],
    status: 'upcoming'
  },
  {
    id: 3,
    title: '아그리콜라 고수 모임',
    description: '아그리콜라 경험자들과 함께하는 고난도 게임',
    gameType: '전략',
    location: '신촌 보드게임카페',
    date: '2025-01-17',
    time: '18:30',
    currentParticipants: 4,
    maxParticipants: 4,
    isRuleMasterIncluded: false,
    organizer: { id: "3", username: "농부왕", rating: 4.9, totalReviews: 31 },
    tags: ['고수만', '전략게임'],
    status: 'upcoming'
  }
];

const statusColor = (status: string) =>
  status === "판매중"
    ? "bg-green-100 text-green-700 border-green-300"
    : "bg-gray-200 text-gray-500 border-gray-300";

const getPartyStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-700';
    case 'ongoing': return 'bg-green-100 text-green-700';
    case 'completed': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getPartyStatusText = (status: string) => {
  switch (status) {
    case 'upcoming': return '예정';
    case 'ongoing': return '진행중';
    case 'completed': return '완료';
    default: return '예정';
  }
};

const MyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">마이페이지</h1>
        
        {/* 프로필 */}
        <div className="bg-white/90 rounded-xl shadow p-6 mb-8 flex items-center gap-4 hover:shadow-lg transition-all">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl font-bold text-orange-500">김</div>
          <div>
            <div className="font-semibold text-lg text-gray-800">김지훈</div>
            <div className="text-gray-500 text-sm">서울 강남구</div>
          </div>
        </div>

        {/* 참여 중인 모임 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-orange-600">참여 중인 모임</h2>
          <div className="space-y-4">
            {myParties.length === 0 ? (
              <div className="text-gray-400">참여 중인 모임이 없습니다.</div>
            ) : (
              myParties.map((party) => (
                <Card key={party.id} className="border-orange-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{party.title}</h3>
                      <Badge className={getPartyStatusColor(party.status || 'upcoming')}>
                        {getPartyStatusText(party.status || 'upcoming')}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{party.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{party.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{party.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-blue-600 font-medium">
                          {party.currentParticipants}/{party.maxParticipants}명
                        </span>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      채팅방 입장
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
        
        {/* 내 판매글 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-orange-600">내 판매글</h2>
          <div className="space-y-3">
            {mySales.length === 0 ? (
              <div className="text-gray-400">등록된 판매글이 없습니다.</div>
            ) : (
              mySales.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-orange-100 rounded-lg px-4 py-3 shadow-sm gap-3"
                >
                  <span className="flex-1 font-medium text-gray-800">{item.name}</span>
                  <span className="font-bold text-orange-600 mr-2">{item.price.toLocaleString()}원</span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusColor(
                      item.status
                    )} text-center min-w-[64px]`}
                  >
                    {item.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* 관심목록 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-orange-600">관심목록</h2>
          <div className="space-y-3">
            {myFavorites.length === 0 ? (
              <div className="text-gray-400">관심 상품이 없습니다.</div>
            ) : (
              myFavorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-orange-100 rounded-lg px-4 py-3 shadow-sm gap-3"
                >
                  <span className="flex-1 font-medium text-gray-800">{item.name}</span>
                  <span className="font-bold text-orange-600">{item.price.toLocaleString()}원</span>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* 최근 활동 */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-orange-600">최근 활동</h2>
          <div className="bg-white/90 rounded-xl shadow p-6 text-gray-400 text-center">최근 활동 내역이 없습니다.</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

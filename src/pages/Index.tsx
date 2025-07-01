
import React from 'react';
import { Dice1, Users, MapPin, ShoppingCart, Star, BookOpen, Coffee, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import GameCard from '@/components/GameCard';
import CommunityPost from '@/components/CommunityPost';

const Index = () => {
  const featuredGames = [
    {
      id: 1,
      title: "스플렌더",
      rating: 4.8,
      players: "2-4명",
      time: "30분",
      difficulty: "보통",
      image: "/placeholder.svg",
      description: "보석 상인이 되어 부를 쌓아가는 전략 게임"
    },
    {
      id: 2,
      title: "티켓 투 라이드",
      rating: 4.6,
      players: "2-5명",
      time: "60분",
      difficulty: "쉬움",
      image: "/placeholder.svg",
      description: "기차 노선을 연결하는 재미있는 전략 게임"
    },
    {
      id: 3,
      title: "코드네임",
      rating: 4.9,
      players: "3-8명",
      time: "15분",
      difficulty: "쉬움",
      image: "/placeholder.svg",
      description: "단서로 소통하는 팀 협력 추리 게임"
    },
    {
      id: 4,
      title: "아줄",
      rating: 4.7,
      players: "2-4명",
      time: "45분",
      difficulty: "보통",
      image: "/placeholder.svg",
      description: "아름다운 타일로 궁전을 꾸미는 퍼즐 게임"
    }
  ];

  const communityPosts = [
    {
      id: 1,
      type: "모집",
      title: "주말 전략게임 모임 모집해요! (룰마 포함)",
      author: "진서",
      location: "홍대 보드게임카페",
      time: "2시간 전",
      participants: 3,
      maxParticipants: 4,
      tags: ["전략게임", "룰마스터", "주말"]
    },
    {
      id: 2,
      type: "거래",
      title: "스플렌더 새상품 판매해요",
      author: "수혁",
      price: "35,000원",
      time: "5시간 전",
      tags: ["새상품", "전략게임"]
    },
    {
      id: 3,
      type: "후기",
      title: "어제 해본 윙스팬 완전 추천!",
      author: "예진",
      rating: 5,
      time: "1일 전",
      tags: ["후기", "전략게임", "추천"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <Hero />
      
      {/* Featured Games Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">이번 주 인기 게임</h2>
          <p className="text-gray-600 text-lg">사용자들이 가장 많이 추천한 보드게임을 만나보세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">실시간 커뮤니티</h2>
          <p className="text-gray-600 text-lg">지금 활발하게 이루어지고 있는 모임과 거래들</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {communityPosts.map((post) => (
            <CommunityPost key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            더 많은 글 보기
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">2,847</div>
              <div className="text-gray-600">등록된 게임</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">15,692</div>
              <div className="text-gray-600">활성 사용자</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">524</div>
              <div className="text-gray-600">연결된 카페</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">1,203</div>
              <div className="text-gray-600">이번달 모임</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Dice1 className="w-6 h-6" />
                보드와 함께
              </h3>
              <p className="text-gray-400">
                보드게임을 사랑하는 모든 사람들을 위한 통합 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>게임 추천</li>
                <li>일행 모집</li>
                <li>카페 찾기</li>
                <li>중고거래</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">커뮤니티</h4>
              <ul className="space-y-2 text-gray-400">
                <li>공지사항</li>
                <li>이벤트</li>
                <li>문의하기</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">정보</h4>
              <ul className="space-y-2 text-gray-400">
                <li>회사소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>파트너십</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 보드와 함께. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

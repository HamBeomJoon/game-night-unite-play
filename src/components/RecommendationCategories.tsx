
import React from 'react';
import { Users, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RecommendationCategories: React.FC = () => {
  return (
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
  );
};

export default RecommendationCategories;

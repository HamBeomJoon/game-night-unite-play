
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GameStatsProps {
  gameCount: number;
}

const GameStats: React.FC<GameStatsProps> = ({ gameCount }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card className="text-center border-orange-100">
        <CardContent className="p-4">
          <div className="text-2xl font-bold text-orange-600 mb-1">{gameCount}</div>
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
  );
};

export default GameStats;

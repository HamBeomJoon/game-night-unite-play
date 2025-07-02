import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Star, PlayCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import RatingForm from '@/components/RatingForm';

const GameDetail = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  // 샘플 게임 데이터 (실제로는 API에서 가져와야 함)
  const gameData = {
    id: 1,
    title: "스플렌더",
    rating: 4.8,
    players: "2-4명",
    time: "30분",
    difficulty: "보통",
    age: "10+",
    image: "/placeholder.svg",
    description: "보석 상인이 되어 부를 쌓아가는 전략 게임입니다. 간단한 규칙이지만 깊이 있는 전략을 요구하는 게임으로, 초보자도 쉽게 배울 수 있습니다.",
    category: "전략",
    designer: "Marc André",
    publisher: "Space Cowboys",
    year: 2014,
    components: [
      "보석 토큰 40개",
      "개발 카드 90장",
      "귀족 타일 10개",
      "규칙서 1권"
    ],
    howToPlay: [
      {
        step: 1,
        title: "준비",
        description: "보석 토큰을 색깔별로 분류하고, 개발 카드를 레벨별로 나누어 놓습니다."
      },
      {
        step: 2,
        title: "턴 진행",
        description: "차례가 되면 다음 중 하나를 선택합니다:\n1) 보석 토큰 가져오기\n2) 개발 카드 구매하기\n3) 개발 카드 예약하기"
      },
      {
        step: 3,
        title: "승리 조건",
        description: "개발 카드를 구매하여 위신 점수 15점을 먼저 달성하는 플레이어가 승리합니다."
      }
    ],
    tips: [
      "초반에는 저렴한 개발 카드를 구매하여 할인 효과를 노리세요",
      "귀족 카드는 추가 점수를 주므로 조건을 맞춰보세요",
      "상대방이 원하는 카드를 예약하여 방해할 수도 있습니다"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example"
  };

  const handleGameRating = (rating: number, comment: string) => {
    // 실제로는 API 호출을 통해 서버에 평점을 저장해야 함
    console.log('게임 평점 제출:', { gameId, rating, comment });
    // 성공 메시지 표시 (toast 등)
    alert(`평점 ${rating}점이 성공적으로 제출되었습니다!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-orange-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          뒤로 가기
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <img 
              src={gameData.image} 
              alt={gameData.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{gameData.title}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">{gameData.rating}</span>
              </div>
              <Badge className="bg-blue-100 text-blue-800">{gameData.category}</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-sm">{gameData.players}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm">{gameData.time}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">난이도: </span>
                <span className="font-medium">{gameData.difficulty}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">연령: </span>
                <span className="font-medium">{gameData.age}</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{gameData.description}</p>
            
            <div className="flex gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Users className="w-4 h-4 mr-2" />
                일행 모집하기
              </Button>
              <Button variant="outline" className="border-orange-200">
                <PlayCircle className="w-4 h-4 mr-2" />
                플레이 영상
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="rules">게임 방법</TabsTrigger>
            <TabsTrigger value="components">구성품</TabsTrigger>
            <TabsTrigger value="tips">팁 & 전략</TabsTrigger>
            <TabsTrigger value="info">게임 정보</TabsTrigger>
            <TabsTrigger value="rating">평점 남기기</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rules" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  게임 진행 방법
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {gameData.howToPlay.map((step) => (
                  <div key={step.step} className="border-l-4 border-orange-200 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {step.step}. {step.title}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle>게임 구성품</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {gameData.components.map((component, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tips">
            <Card>
              <CardHeader>
                <CardTitle>게임 팁 & 전략</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {gameData.tips.map((tip, index) => (
                    <div key={index} className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>게임 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">디자이너:</span>
                    <span className="ml-2 font-medium">{gameData.designer}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">출판사:</span>
                    <span className="ml-2 font-medium">{gameData.publisher}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">출시년도:</span>
                    <span className="ml-2 font-medium">{gameData.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rating">
            <RatingForm
              type="game"
              targetId={gameId || '1'}
              targetName={gameData.title}
              onSubmit={handleGameRating}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameDetail;

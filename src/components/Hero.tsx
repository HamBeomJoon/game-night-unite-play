
import React from 'react';
import { Dice1, Users, MapPin, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Dice1,
      title: "맞춤 게임 추천",
      description: "취향과 인원에 맞는 완벽한 게임을 찾아보세요",
      path: "/games"
    },
    {
      icon: Users,
      title: "일행 모집",
      description: "함께 게임할 사람들을 쉽게 만나보세요",
      path: "/party"
    },
    {
      icon: MapPin,
      title: "카페 찾기",
      description: "원하는 게임이 있는 근처 카페를 찾아보세요",
      path: "/cafes"
    },
    {
      icon: ShoppingCart,
      title: "안전한 거래",
      description: "중고 보드게임을 믿고 거래하세요",
      path: "/trade"
    }
  ];

  const handleFeatureClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Hero Content */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            보드게임을 더 쉽게,<br />
            <span className="text-orange-500">더 재미있게</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            게임 추천부터 일행 모집, 카페 찾기, 중고거래까지<br />
            보드게임의 모든 것을 한곳에서 해결하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
              서비스 둘러보기
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleFeatureClick(feature.path)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

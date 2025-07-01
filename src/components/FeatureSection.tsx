
import React from 'react';
import { Star, Users, BookOpen, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureSection = () => {
  const features = [
    {
      icon: Star,
      title: "스마트한 게임 추천",
      description: "사용자 리뷰와 평점을 기반으로 한 개인화된 게임 추천 시스템으로, 항상 새롭고 재미있는 게임을 발견할 수 있습니다.",
      benefits: ["개인 취향 분석", "평점 기반 추천", "신작 게임 알림"]
    },
    {
      icon: Users,
      title: "활발한 커뮤니티",
      description: "룰마스터 매칭부터 일행 모집까지, 같은 취향을 가진 사람들과 쉽게 연결되어 함께 게임을 즐길 수 있습니다.",
      benefits: ["일행 모집 시스템", "룰마스터 연결", "게임 후기 공유"]
    },
    {
      icon: BookOpen,
      title: "모바일 최적화 룰 위키",
      description: "복잡한 룰도 한눈에! 사용자들이 직접 작성하고 공유하는 게임별 핵심 룰 요약과 팁을 확인하세요.",
      benefits: ["핵심 룰 요약", "자주 틀리는 규칙", "시작 세팅 가이드"]
    },
    {
      icon: Coffee,
      title: "카페 연동 서비스",
      description: "근처 보드게임 카페의 보유 게임 현황을 실시간으로 확인하고, 원하는 게임이 있는 카페를 쉽게 찾을 수 있습니다.",
      benefits: ["실시간 보유 현황", "카페별 필터링", "예약 연동 서비스"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            왜 <span className="text-orange-500">보드와 함께</span>일까요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            보드게임을 즐기는 모든 과정에서 마주하는 어려움들을 해결하기 위해 만들어진 통합 플랫폼입니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

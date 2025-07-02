import React, { useState } from "react";
import { Dice1, Gamepad2, ShoppingCart, MessageCircle, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import UserRating from "@/components/UserRating";
import { UserProfile } from "@/types/user";

const priceRanges = [
  { label: "1만원 이하", value: "under1" },
  { label: "1-3만원", value: "1to3" },
  { label: "3-5만원", value: "3to5" },
  { label: "5만원 이상", value: "over5" },
];
const conditions = ["새 제품", "상급", "중급"];
const locations = ["전체", "강남/서초", "홍대/마포", "잠실/송파"];

function SecondHandMarket() {
  const navigate = useNavigate();
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("전체");

  // 샘플 사용자 데이터
  const sampleUsers: UserProfile[] = [
    {
      id: "1",
      username: "김지훈",
      rating: 4.8,
      totalReviews: 23,
      completedTrades: 15,
      completedParties: 8,
      joinedDate: "2024-01-15",
      badges: ["신뢰거래자", "친절한판매자"]
    },
    {
      id: "2", 
      username: "박예진",
      rating: 4.6,
      totalReviews: 12,
      completedTrades: 8,
      completedParties: 15,
      joinedDate: "2024-03-20",
      badges: ["모임왕"]
    },
    {
      id: "3",
      username: "이진서", 
      rating: 4.9,
      totalReviews: 35,
      completedTrades: 25,
      completedParties: 12,
      joinedDate: "2023-11-10",
      badges: ["베테랑거래자", "룰마스터"]
    }
  ];

  const items = [
    {
      id: 1,
      name: "스플렌더",
      condition: "상급",
      price: 35000,
      originalPrice: 45000,
      seller: sampleUsers[0],
      location: "강남구",
      postedDate: "2일 전",
      images: ["/placeholder.svg?height=200&width=200"],
      description: "한 번만 플레이한 거의 새 제품입니다. 구성품 모두 완전합니다.",
      views: 23,
      likes: 5,
    },
    {
      id: 2,
      name: "아줄",
      condition: "중급",
      price: 28000,
      originalPrice: 40000,
      seller: sampleUsers[1],
      location: "마포구",
      postedDate: "1주 전",
      images: ["/placeholder.svg?height=200&width=200"],
      description: "몇 번 플레이했지만 관리 잘 되어있습니다. 박스에 약간의 사용감 있음.",
      views: 45,
      likes: 12,
    },
    {
      id: 3,
      name: "윙스팬",
      condition: "상급",
      price: 55000,
      originalPrice: 70000,
      seller: sampleUsers[2],
      location: "송파구",
      postedDate: "3일 전",
      images: ["/placeholder.svg?height=200&width=200"],
      description: "선물받았는데 취향에 안 맞아서 판매합니다. 미개봉 새 제품입니다.",
      views: 67,
      likes: 18,
    },
  ];

  // 필터 핸들러
  const handlePriceChange = (value: string) => {
    setSelectedPrices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  const handleConditionChange = (value: string) => {
    setSelectedConditions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
  };

  // 필터 초기화 핸들러
  const handleResetFilters = () => {
    setSelectedPrices([]);
    setSelectedConditions([]);
    setSelectedLocation("전체");
  };

  // 필터링 로직
  const filteredItems = items.filter((item) => {
    // 가격대 필터
    let priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((range) => {
        if (range === "under1") return item.price <= 10000;
        if (range === "1to3") return item.price > 10000 && item.price <= 30000;
        if (range === "3to5") return item.price > 30000 && item.price <= 50000;
        if (range === "over5") return item.price > 50000;
        return true;
      });
    // 상태 필터
    let conditionMatch =
      selectedConditions.length === 0 || selectedConditions.includes(item.condition);
    // 지역 필터 (실제 데이터 location이 구 단위이므로, 대략적 매칭)
    let locationMatch =
      selectedLocation === "전체" ||
      (selectedLocation === "강남/서초" && item.location.includes("강남")) ||
      (selectedLocation === "홍대/마포" && item.location.includes("마포")) ||
      (selectedLocation === "잠실/송파" && item.location.includes("송파"));
    return priceMatch && conditionMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">중고 거래소</h2>
            <p className="text-gray-600">보드게임을 사고팔며 새로운 게임을 만나보세요</p>
          </div>
          <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white">
            <ShoppingCart className="h-4 w-4" />
            판매글 작성
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-orange-100 bg-white/90">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-orange-600">검색 필터</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleResetFilters}
                  className="text-xs border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  초기화
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">가격대</label>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label className="flex items-center" key={range.value}>
                        <input
                          type="checkbox"
                          className="mr-2 accent-orange-500"
                          checked={selectedPrices.includes(range.value)}
                          onChange={() => handlePriceChange(range.value)}
                        />
                        <span className="text-sm">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">상태</label>
                  <div className="space-y-2">
                    {conditions.map((cond) => (
                      <label className="flex items-center" key={cond}>
                        <input
                          type="checkbox"
                          className="mr-2 accent-orange-500"
                          checked={selectedConditions.includes(cond)}
                          onChange={() => handleConditionChange(cond)}
                        />
                        <span className="text-sm">{cond}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">지역</label>
                  <select
                    className="w-full p-2 border rounded-md border-orange-200 focus:border-orange-400"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 border-orange-100 bg-white/90">
              <CardHeader>
                <CardTitle className="text-orange-600">거래 안전 가이드</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">평점 확인</div>
                    <div className="text-gray-600">판매자의 평점과 후기를 확인하세요</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">직거래 권장</div>
                    <div className="text-gray-600">안전한 공공장소에서 만나세요</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">구성품 확인</div>
                    <div className="text-gray-600">거래 전 구성품을 꼼꼼히 확인하세요</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-16 text-lg">조건에 맞는 상품이 없습니다.</div>
              ) : (
                filteredItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow border-orange-100 bg-white/90">
                    <CardContent className="p-0">
                      <img
                        src={item.images[0] || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                          <Badge variant={item.condition === "상급" ? "default" : "secondary"} className="text-xs">
                            {item.condition}
                          </Badge>
                        </div>

                        <div className="mb-3">
                          <div className="text-2xl font-bold text-orange-600">{item.price.toLocaleString()}원</div>
                          <div className="text-sm text-gray-400 line-through">
                            정가 {item.originalPrice.toLocaleString()}원
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                        <div className="mb-3">
                          <UserRating user={item.seller} showDetails={false} />
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                          <div>{item.location}</div>
                          <div>{item.postedDate}</div>
                        </div>

                        <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                          <div>조회 {item.views}</div>
                          <div>관심 {item.likes}</div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">상세보기</Button>
                          <Button variant="outline" size="sm" className="border-orange-200">
                            <MessageCircle className="h-4 w-4 text-orange-500" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">더 많은 상품 보기</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SecondHandMarket;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Star, ShoppingBag, Users, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import RatingForm from '@/components/RatingForm';
import { UserProfile as UserProfileType, UserReview } from '@/types/user';

const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [showRatingForm, setShowRatingForm] = useState(false);
  
  // 샘플 사용자 데이터 (실제로는 API에서 가져와야 함)
  const userData: UserProfileType = {
    id: userId || '1',
    username: '진서',
    avatar: '/placeholder.svg',
    rating: 4.7,
    totalReviews: 24,
    completedTrades: 15,
    completedParties: 32,
    joinedDate: '2023-03-15',
    badges: ['신뢰할 수 있는 거래자', '열정적인 게이머', '친근한 룰마스터']
  };

  // 샘플 후기 데이터
  const userReviews: UserReview[] = [
    {
      id: '1',
      reviewerId: '2',
      reviewerName: '수혁',
      targetUserId: userId || '1',
      rating: 5,
      comment: '거래도 깔끔하고 게임 설명도 정말 잘해주세요! 다음에도 함께 하고 싶습니다.',
      type: 'trade',
      date: '2024-01-15'
    },
    {
      id: '2',
      reviewerId: '3',
      reviewerName: '예진',
      targetUserId: userId || '1',
      rating: 4,
      comment: '모임 진행을 잘해주셔서 재미있게 게임했어요. 추천합니다!',
      type: 'party',
      date: '2024-01-10'
    },
    {
      id: '3',
      reviewerId: '4',
      reviewerName: '민준',
      targetUserId: userId || '1',
      rating: 5,
      comment: '약속 시간도 잘 지키시고 게임도 잘 가르쳐주세요.',
      type: 'party',
      date: '2024-01-05'
    }
  ];

  const handleUserReview = (rating: number, comment: string) => {
    // 실제로는 API 호출을 통해 서버에 후기를 저장해야 함
    console.log('사용자 후기 제출:', { targetUserId: userId, rating, comment });
    alert(`${userData.username}님에 대한 후기가 성공적으로 제출되었습니다!`);
    setShowRatingForm(false);
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
            <Card className="border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{userData.username}</h2>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-semibold">{userData.rating}</span>
                  <span className="text-gray-500">({userData.totalReviews}개 후기)</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">{userData.completedTrades}</div>
                    <div className="text-sm text-gray-600">완료된 거래</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">{userData.completedParties}</div>
                    <div className="text-sm text-gray-600">참여한 모임</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {new Date(userData.joinedDate).toLocaleDateString('ko-KR')} 가입
                </div>

                <Button 
                  onClick={() => setShowRatingForm(true)}
                  className="bg-orange-500 hover:bg-orange-600 w-full"
                >
                  후기 작성하기
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* 뱃지 섹션 */}
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    획득한 뱃지
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {userData.badges.map((badge, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 후기 작성 폼 */}
              {showRatingForm && (
                <RatingForm
                  type="user"
                  targetId={userData.id}
                  targetName={userData.username}
                  onSubmit={handleUserReview}
                />
              )}
            </div>
          </div>
        </div>

        {/* 후기 목록 */}
        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle>받은 후기 ({userReviews.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.reviewerName}</span>
                      <Badge variant={review.type === 'trade' ? 'default' : 'secondary'} className="text-xs">
                        {review.type === 'trade' ? '거래' : '모임'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating 
                                ? 'text-yellow-500 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        {new Date(review.date).toLocaleDateString('ko-KR')}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;

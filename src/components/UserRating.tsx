
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, User, ShoppingBag, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';

interface UserRatingProps {
  user: UserProfile;
  showDetails?: boolean;
}

const UserRating: React.FC<UserRatingProps> = ({ user, showDetails = false }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="space-y-2">
      {/* 첫 번째 줄: 사용자 이름과 평점 */}
      <div className="flex items-center justify-between flex-wrap gap-1">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-3 h-3 text-orange-600" />
          </div>
          <span 
            className="font-medium text-sm hover:text-orange-600 cursor-pointer transition-colors truncate"
            onClick={handleUserClick}
            title={user.username}
          >
            {user.username}
          </span>
        </div>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{user.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500">({user.totalReviews})</span>
        </div>
      </div>
      
      {/* 두 번째 줄: 상세 정보와 배지 */}
      <div className="flex flex-wrap items-center gap-1.5">
        {showDetails && (
          <>
            <Badge variant="outline" className="text-xs whitespace-nowrap">
              <ShoppingBag className="w-3 h-3 mr-1" />
              거래 {user.completedTrades}
            </Badge>
            <Badge variant="outline" className="text-xs whitespace-nowrap">
              <Users className="w-3 h-3 mr-1" />
              모임 {user.completedParties}
            </Badge>
          </>
        )}
        
        {user.badges.length > 0 && (
          <>
            {user.badges.map((badge, index) => (
              <Badge key={index} className="text-xs bg-green-100 text-green-800 whitespace-nowrap">
                {badge}
              </Badge>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UserRating;

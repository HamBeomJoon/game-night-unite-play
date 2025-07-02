
import React from 'react';
import { Star, User, ShoppingBag, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';

interface UserRatingProps {
  user: UserProfile;
  showDetails?: boolean;
}

const UserRating: React.FC<UserRatingProps> = ({ user, showDetails = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
          <User className="w-3 h-3 text-orange-600" />
        </div>
        <span className="font-medium text-sm">{user.username}</span>
      </div>
      
      <div className="flex items-center gap-1">
        <Star className="w-3 h-3 text-yellow-500 fill-current" />
        <span className="text-sm font-medium">{user.rating.toFixed(1)}</span>
        <span className="text-xs text-gray-500">({user.totalReviews})</span>
      </div>
      
      {showDetails && (
        <div className="flex gap-2">
          <Badge variant="outline" className="text-xs">
            <ShoppingBag className="w-3 h-3 mr-1" />
            거래 {user.completedTrades}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Users className="w-3 h-3 mr-1" />
            모임 {user.completedParties}
          </Badge>
        </div>
      )}
      
      {user.badges.length > 0 && (
        <div className="flex gap-1">
          {user.badges.map((badge, index) => (
            <Badge key={index} className="text-xs bg-green-100 text-green-800">
              {badge}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserRating;

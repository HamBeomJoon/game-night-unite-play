
import React from 'react';
import { Users, DollarSign, Star, MapPin, Clock, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CommunityPostProps {
  post: {
    id: number;
    type: string;
    title: string;
    author: string;
    location?: string;
    time: string;
    participants?: number;
    maxParticipants?: number;
    price?: string;
    rating?: number;
    tags: string[];
  };
}

const CommunityPost: React.FC<CommunityPostProps> = ({ post }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case '모집': return 'bg-blue-100 text-blue-800';
      case '거래': return 'bg-green-100 text-green-800';
      case '후기': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case '모집': return Users;
      case '거래': return DollarSign;
      case '후기': return Star;
      default: return Users;
    }
  };

  const TypeIcon = getTypeIcon(post.type);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-orange-100 bg-white">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge className={getTypeColor(post.type)}>
            <TypeIcon className="w-3 h-3 mr-1" />
            {post.type}
          </Badge>
          <span className="text-xs text-gray-500">{post.time}</span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-orange-600 cursor-pointer transition-colors">
          {post.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="font-medium">{post.author}</span>
          {post.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{post.location}</span>
            </div>
          )}
        </div>

        {/* Type-specific content */}
        {post.type === '모집' && post.participants !== undefined && (
          <div className="flex items-center gap-2 mb-3 text-sm">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 font-medium">
              {post.participants}/{post.maxParticipants}명 모집중
            </span>
          </div>
        )}

        {post.type === '거래' && post.price && (
          <div className="text-lg font-bold text-green-600 mb-3">
            {post.price}
          </div>
        )}

        {post.type === '후기' && post.rating !== undefined && (
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < post.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({post.rating}/5)</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-orange-200 text-orange-700">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action button */}
        <Button 
          size="sm" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          {post.type === '모집' ? '참여하기' : post.type === '거래' ? '연락하기' : '자세히 보기'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityPost;

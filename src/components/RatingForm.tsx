
import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RatingFormProps {
  type: 'game' | 'user';
  targetId: string;
  targetName: string;
  onSubmit: (rating: number, comment: string) => void;
}

const RatingForm: React.FC<RatingFormProps> = ({ type, targetId, targetName, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      onSubmit(rating, comment);
      setRating(0);
      setComment('');
    }
  };

  const getTitle = () => {
    return type === 'game' ? `${targetName} 게임 평가하기` : `${targetName}님에게 후기 남기기`;
  };

  const getPlaceholder = () => {
    return type === 'game' 
      ? '게임에 대한 솔직한 후기를 남겨주세요...'
      : '함께한 경험에 대한 후기를 남겨주세요...';
  };

  return (
    <Card className="border-orange-100">
      <CardHeader>
        <CardTitle className="text-lg">{getTitle()}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              별점 평가
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1 hover:scale-110 transition-transform"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star 
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating) 
                        ? 'text-yellow-500 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              후기 작성 (선택사항)
            </label>
            <Textarea
              placeholder={getPlaceholder()}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] border-orange-200 focus:border-orange-400"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={rating === 0}
            className="bg-orange-500 hover:bg-orange-600 w-full"
          >
            <Send className="w-4 h-4 mr-2" />
            후기 제출하기
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RatingForm;

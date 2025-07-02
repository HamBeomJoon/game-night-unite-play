
export interface UserProfile {
  id: string;
  username: string;
  avatar?: string;
  rating: number;
  totalReviews: number;
  completedTrades: number;
  completedParties: number;
  joinedDate: string;
  badges: string[];
}

export interface UserReview {
  id: string;
  reviewerId: string;
  reviewerName: string;
  targetUserId: string;
  rating: number;
  comment: string;
  type: 'trade' | 'party';
  date: string;
}
